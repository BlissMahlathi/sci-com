// Shared SectionHeader component
const SectionHeader = ({ eyebrow, title, subtitle, centered = false }) => (
  <div className="section-header" style={centered ? { textAlign: 'center' } : {}}>
    {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
    <h2 className="section-title">{title}</h2>
    {subtitle && (
      <p
        className="section-subtitle"
        style={centered ? { margin: '0 auto' } : {}}
      >
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeader;
