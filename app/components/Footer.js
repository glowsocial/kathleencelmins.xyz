export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,50 L0,20 Q360,0 720,20 Q1080,40 1440,20 L1440,50 Z"
            fill="#3E2A1F"
          />
        </svg>
      </div>
      <div className="site-footer-inner">
        <p className="footer-tagline">Glad you&rsquo;re here.</p>
        <p className="footer-text">&copy; {year} Kathleen Celmins</p>
      </div>
    </footer>
  );
}
