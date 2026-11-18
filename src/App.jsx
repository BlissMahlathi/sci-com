import { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';

import IntroScreen   from './components/intro/IntroScreen';
import Navbar        from './components/layout/Navbar';
import Footer        from './components/layout/footer';

import HomePage      from './pages/HomePage';
import AboutPage     from './pages/AboutPage';
import CoursePage    from './pages/CoursePage';
import MentorshipPage from './pages/MentorshipPage';
import ContactPage   from './pages/ContactPage';
import GalleryPage   from './pages/GalleryPage';
import NotFound      from './pages/NotFound';


const App = () => {
  // Show intro only if session hasn't seen it yet
  const alreadySeen = typeof sessionStorage !== 'undefined' &&
    sessionStorage.getItem('scicom_intro_done');

  const [showIntro, setShowIntro] = useState(!alreadySeen);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <>
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}

      {/* Site renders underneath intro; becomes visible when intro slides up */}
      <div style={{ visibility: showIntro ? 'hidden' : 'visible' }}>
        <Navbar />
        <Routes>
          <Route path="/"            element={<HomePage />} />
          <Route path="/about"       element={<AboutPage />} />
          <Route path="/programmes"  element={<CoursePage />} />
          <Route path="/mentorship"  element={<MentorshipPage />} />
          <Route path="/contact"     element={<ContactPage />} />
          <Route path="/gallery"     element={<GalleryPage />} />
          <Route path="*"            element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;