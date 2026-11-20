import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { RiSendPlaneLine, RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import PageHero from '../components/shared/PageHero';

const ApplyPage = () => {
  const formRef = useRef(null);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    programme: '',
    experience: '',
    preferredTiming: '',
    goals: '',
  });

  const updateField = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  useEffect(() => {
    gsap.fromTo(
      formRef.current?.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out', delay: 0.3 }
    );
  }, [step]);

  const nextStep = () => setStep((current) => Math.min(current + 1, 3));
  const previousStep = () => setStep((current) => Math.max(current - 1, 1));

  const openEmail = (event) => {
    event.preventDefault();
    const subject = `Application enquiry: ${form.programme}`;
    const body = [
      'SCI-COM ACADEMY APPLICATION ENQUIRY',
      '===================================',
      '',
      'PERSONAL DETAILS',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone / WhatsApp: ${form.phone}`,
      '',
      'PROGRAMME DETAILS',
      `Programme: ${form.programme}`,
      `Current experience / level: ${form.experience}`,
      `Preferred timing: ${form.preferredTiming}`,
      '',
      'PERSONAL GOAL',
      form.goals,
      '',
      'Sent from the Sci-Com Academy website',
    ].join('\n');

    window.location.href = `mailto:ScicomAcademy1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main>
      <PageHero
        eyebrow="Start Learning"
        title={<span>Apply <span className="highlight">Now</span></span>}
        subtitle="Complete a few details and open a beautifully prepared email to the academy."
      />
      <section className="section" aria-label="Application form">
        <div className="container">
          <div className="apply-grid">
            <aside className="apply-aside">
              <span>Application in 3 steps</span>
              <h2>Tell us where you want to grow.</h2>
              <p>We will prepare your information into an email that you can review and send from your own email app.</p>
              <div className="apply-progress" aria-label={`Step ${step} of 3`}>
                {[1, 2, 3].map((item) => (
                  <div className={item <= step ? 'active' : ''} key={item}>
                    <b>{item}</b>
                    <span>{item === 1 ? 'You' : item === 2 ? 'Programme' : 'Goals'}</span>
                  </div>
                ))}
              </div>
            </aside>

            <form ref={formRef} id="application-form" onSubmit={openEmail} aria-label="Application form">
              {step === 1 && (
                <div className="apply-step">
                  <span className="apply-step-eyebrow">Step 1 of 3</span>
                  <h2>About you</h2>
                  <div className="form-field">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" value={form.name} onChange={updateField} placeholder="Your full name" autoComplete="name" required />
                  </div>
                  <div className="form-field-row">
                    <div className="form-field">
                      <label htmlFor="email">Email Address</label>
                      <input id="email" name="email" type="email" value={form.email} onChange={updateField} placeholder="you@email.com" autoComplete="email" required />
                    </div>
                    <div className="form-field">
                      <label htmlFor="phone">Phone / WhatsApp</label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={updateField} placeholder="+27 00 000 0000" autoComplete="tel" required />
                    </div>
                  </div>
                  <button type="button" className="btn-primary apply-next" onClick={nextStep}>
                    Continue <RiArrowRightLine aria-hidden="true" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="apply-step">
                  <span className="apply-step-eyebrow">Step 2 of 3</span>
                  <h2>Your programme</h2>
                  <div className="form-field">
                    <label htmlFor="programme">Programme of interest</label>
                    <select id="programme" name="programme" value={form.programme} onChange={updateField} required>
                      <option value="" disabled>Select a programme</option>
                      <option>Strata Control (SCO)</option>
                      <option>Rock Mechanics Paper 1</option>
                      <option>Mentorship</option>
                      <option>Other / Not sure yet</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="experience">Current experience or level</label>
                    <select id="experience" name="experience" value={form.experience} onChange={updateField} required>
                      <option value="" disabled>Select your experience level</option>
                      <option>New to the programme</option>
                      <option>Studying or currently preparing</option>
                      <option>Working in the mining industry</option>
                      <option>Experienced / seeking advancement</option>
                    </select>
                  </div>
                  <div className="apply-actions">
                    <button type="button" className="btn-secondary" onClick={previousStep}>
                      <RiArrowLeftLine aria-hidden="true" /> Back
                    </button>
                    <button type="button" className="btn-primary" onClick={nextStep}>
                      Continue <RiArrowRightLine aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="apply-step">
                  <span className="apply-step-eyebrow">Step 3 of 3</span>
                  <h2>Goals and availability</h2>
                  <div className="form-field">
                    <label htmlFor="preferredTiming">Preferred start or timing</label>
                    <select id="preferredTiming" name="preferredTiming" value={form.preferredTiming} onChange={updateField} required>
                      <option value="" disabled>Select preferred timing</option>
                      <option>As soon as possible</option>
                      <option>Within one month</option>
                      <option>Within three months</option>
                      <option>Just gathering information</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="goals">What would you like to achieve?</label>
                    <textarea id="goals" name="goals" rows={5} value={form.goals} onChange={updateField} placeholder="Tell us about your goals, exam or career plans..." required />
                  </div>
                  <label className="apply-confirm">
                    <input type="checkbox" required />
                    <span>I confirm that these details are accurate.</span>
                  </label>
                  <div className="apply-actions">
                    <button type="button" className="btn-secondary" onClick={previousStep}>
                      <RiArrowLeftLine aria-hidden="true" /> Back
                    </button>
                    <button type="submit" className="btn-primary" id="application-submit-btn">
                      <RiSendPlaneLine aria-hidden="true" /> Open Email
                    </button>
                  </div>
                  <p className="apply-email-note">This opens your email app with a prepared message. Nothing is submitted until you press send.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApplyPage;
