export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="footer-tagline">The unshrunk version.</p>
        <p className="footer-text">&copy; {year} Kathleen Celmins</p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/work-with-me">Work with me</a>
          <a href="https://boomp.net">boomp.net</a>
          <a href="/feed.xml">RSS</a>
        </div>
      </div>
    </footer>
  );
}
