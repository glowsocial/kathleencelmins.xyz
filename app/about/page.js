export const metadata = {
  title: "About",
  description:
    "Kathleen Celmins is the founder of boomp.net, software that runs social media for business owners who'd rather not do it themselves. Chandler, Arizona.",
};

// A bio for someone who just searched her name, not a manifesto.
// The facts first, the voice underneath.
export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="about-content">
        <h1>About</h1>

        <p className="manifesto-text">
          I build software for business owners who&rsquo;d rather not run
          their own social media, and I write about what running it teaches me.
        </p>

        <hr />

        <div className="about-section">
          <p>
            <strong>The short version.</strong>{" "}I&rsquo;m Kathleen Celmins,
            the founder of <a href="https://boomp.net">boomp.net</a>. I live
            in Chandler, Arizona. I&rsquo;ve worked in digital marketing since
            2010: lead magnets, email sequences, content strategy, the whole
            thing. In 2025 I stopped advising on it and built the software
            instead.
          </p>
        </div>

        <div className="about-section">
          <p>
            <strong>What it does.</strong>{" "}It reads your website, writes the
            posts, and all you do is say yes. Local businesses stay current on
            social without a content hire or an agency retainer. It launched
            as Glow Social in 2025 and got its real name in 2026.
          </p>
        </div>

        <div className="about-section">
          <p>
            <strong>How I work.</strong>{" "}I&rsquo;m not the founder who raised
            a round and hired someone to build it. I write the code, I answer
            the support email, I decide what ships and what doesn&rsquo;t. Some
            of what&rsquo;s here is the log of that: what shipped, what broke,
            what I got wrong in public.
          </p>
        </div>

        <div className="about-section">
          <p>
            <strong>Why the writing.</strong>{" "}For most of my career I stayed
            behind the scenes and let other people be the face of the work.
            This site is where I practice the other thing: writing what I
            actually think instead of what sounds safe. Some of it is about
            building software. Some of it is about books and identity and
            taking up space on purpose. Not all of it is polished. That&rsquo;s
            the point.
          </p>
        </div>

        <div className="about-section">
          <p>
            <strong>Elsewhere.</strong>{" "}
            <a href="https://boomp.net">boomp.net</a> &middot;{" "}
            <a href="https://www.linkedin.com/in/kathleencelmins/">LinkedIn</a>
          </p>
        </div>

        <div className="about-section">
          <p>
            I live in Arizona with my husband and two kids, where the desert
            mornings are cool enough for a sweater and the afternoons remind
            you to drink water.
          </p>
        </div>
      </div>
    </div>
  );
}
