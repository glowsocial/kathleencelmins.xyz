import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

// A slim bar: the name, four links, a subscribe button. The home page
// carries the masthead; this just gets the reader back to it.
export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-name">
          Kathleen Celmins
        </Link>
        <nav>
          <ul className="site-nav">
            <li className="nav-secondary">
              <Link href="/archive">Archive</Link>
            </li>
            <li className="nav-secondary">
              <Link href="/goals">Goals</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li className="nav-secondary">
              <Link href="/work-with-me">Work with me</Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
            <li>
              <Link href="/#subscribe" className="btn btn-primary btn-sm">
                Subscribe
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
