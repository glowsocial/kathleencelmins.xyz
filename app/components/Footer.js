export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="footer-tagline">The unshrunk version.</p>
        <p className="footer-text">&copy; {year} Kathleen Celmins</p>
      </div>
    </footer>
  );
}
