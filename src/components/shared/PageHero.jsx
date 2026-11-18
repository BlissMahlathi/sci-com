const PageHero = ({ eyebrow, title, subtitle, titleId }) => (
  <section className="page-hero" aria-label={`${eyebrow} hero`}>
    <div className="container page-hero-content">
      <span className="page-hero-eyebrow">{eyebrow}</span>
      <h1 className="page-hero-title" id={titleId}>{title}</h1>
      <p className="page-hero-subtitle">{subtitle}</p>
    </div>
  </section>
);

export default PageHero;
