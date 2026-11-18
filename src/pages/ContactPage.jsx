import { Link } from 'react-router-dom';
import {
  RiArrowRightLine,
  RiPhoneLine,
  RiMailLine,
  RiWhatsappLine,
} from 'react-icons/ri';
import PageHero from '../components/shared/PageHero';

const ContactPage = () => (
  <main>
    <PageHero
      eyebrow="Get In Touch"
      title={<span>Contact <span className="highlight">Us</span></span>}
      subtitle="SCO • RMC Paper 1 • Mentorship"
      titleId="contact-title"
    />
    <section className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-intro">
          <span>Start a conversation</span>
          <h2>Ask about SCO, Rock Mechanics Paper 1, mentorship, dates, fees or the right preparation path for you.</h2>
        </div>

        <div className="contact-details contact-details-three">
          <a
            className="contact-detail-card contact-whatsapp-card"
            href="https://wa.me/27637533950?text=Hello%20Sci-Com%20Academy%2C%20I%20would%20like%20to%20ask%20about%20your%20training."
            target="_blank"
            rel="noopener noreferrer"
            id="contact-whatsapp"
          >
            <RiWhatsappLine aria-hidden="true" />
            <div>
              <p>WhatsApp</p>
              <strong>063 753 3950</strong>
              <span>Message the academy directly on WhatsApp.</span>
            </div>
          </a>

          <a className="contact-detail-card" href="tel:+27849160302" id="contact-phone">
            <RiPhoneLine aria-hidden="true" />
            <div>
              <p>Contact us</p>
              <strong>+27 84 916 0302</strong>
              <span>Call to discuss your training.</span>
            </div>
          </a>

          <a className="contact-detail-card" href="mailto:info@sci-comacademy.com" id="contact-email">
            <RiMailLine aria-hidden="true" />
            <div>
              <p>Email</p>
              <strong>info@sci-comacademy.com</strong>
              <span>Send your enquiry by email.</span>
            </div>
          </a>
        </div>

        <aside className="contact-banking-card" aria-labelledby="banking-title">
          <h2 id="banking-title">Banking details</h2>
          <dl>
            <div><dt>Bank</dt><dd>First National Bank</dd></div>
            <div><dt>Acc No</dt><dd>63210282941</dd></div>
            <div><dt>Branch code</dt><dd>250655</dd></div>
          </dl>
        </aside>

        <div className="contact-course-banner">
          <div>
            <span>Find the right programme</span>
            <h2>Tell us what you are preparing for.</h2>
            <p>The academy can guide your enquiry toward the right preparation path.</p>
            <Link to="/programmes" className="btn-primary" id="contact-view-courses">
              View Courses <RiArrowRightLine aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default ContactPage;
