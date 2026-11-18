import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const GREETINGS = [
  { word: 'Welcome',   lang: 'English' },
  { word: 'Sawubona', lang: 'isiZulu' },
  { word: 'Molo',     lang: 'isiXhosa' },
  { word: 'Welkom',   lang: 'Afrikaans' },
  { word: 'Dumelang', lang: 'Sepedi' },
  { word: 'Dumelang', lang: 'Setswana' },
  { word: 'Dumelang', lang: 'Sesotho' },
  { word: 'Minjhani', lang: 'Xitsonga' },
  { word: 'Sawubona', lang: 'siSwati' },
  { word: 'Ndaa',     lang: 'Tshivenḓa' },
  { word: 'Lotjhani', lang: 'isiNdebele' },
];

// Total: 11 greetings × ~0.4s each ≈ 4.4s, then logo reveal ~1.2s

const IntroScreen = ({ onComplete }) => {
  const wrapRef    = useRef(null);
  const wordRef    = useRef(null);
  const langRef    = useRef(null);
  const logoWrap   = useRef(null);
  const indexRef   = useRef(0);

  useEffect(() => {
    // Check if already shown this session
    if (sessionStorage.getItem('scicom_intro_done')) {
      onComplete();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('scicom_intro_done', '1');
        // Slide the whole intro screen up and out
        gsap.to(wrapRef.current, {
          yPercent: -100,
          duration: 0.7,
          ease: 'power3.inOut',
          onComplete: onComplete,
        });
      },
    });

    // Build greeting sequence
    GREETINGS.forEach((g, i) => {
      const isFirst = i === 0;

      tl.call(() => {
        if (wordRef.current) wordRef.current.textContent = g.word;
        if (langRef.current) langRef.current.textContent = `— ${g.lang}`;
      })
        .fromTo(
          [wordRef.current, langRef.current],
          { opacity: 0, y: isFirst ? 30 : 15 },
          { opacity: 1, y: 0, duration: 0.18, ease: 'power2.out' },
          isFirst ? 0.1 : '>'
        )
        .to(
          [wordRef.current, langRef.current],
          { opacity: 0, y: -15, duration: 0.15, ease: 'power2.in' },
          `>+0.12`
        );
    });

    // Logo reveal after greetings
    tl.set(wordRef.current, { display: 'none' })
      .set(langRef.current, { display: 'none' })
      .fromTo(
        logoWrap.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.55, ease: 'back.out(1.4)' },
        '>+0.05'
      )
      .to(logoWrap.current, { opacity: 0, y: -20, duration: 0.4, ease: 'power2.in' }, '>+0.6');

    return () => { tl.kill(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="intro-screen" ref={wrapRef}>
      <div style={{ textAlign: 'center', position: 'absolute' }}>
        <div className="intro-greeting" ref={wordRef}>Welcome</div>
        <div className="intro-lang-tag" ref={langRef}>— English</div>
      </div>

      <div className="intro-logo-wrap" ref={logoWrap} style={{ position: 'absolute' }}>
        <img src="/src/assets/logo.jpg" alt="Sci-Com Academy" />
        <div className="intro-logo-name">
          Sci-Com <span>ACADEMY</span>
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Spreading Educational Hope
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
