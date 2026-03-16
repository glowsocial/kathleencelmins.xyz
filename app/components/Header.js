import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-name">
          Kathleen Celmins
        </Link>
        <nav>
          <ul className="site-nav">
            <li>
              <Link href="/writing">writing</Link>
            </li>
            <li>
              <Link href="/goals">goals</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
