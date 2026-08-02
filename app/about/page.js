export const metadata = {
  title: "About",
  description: "About Kathleen Celmins — builder, writer, the unshrunk version.",
};

export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="about-content">
        <h1>About</h1>

        <p className="manifesto-text">
          I build things, I write about what I notice, and I recently
          fired my inner gatekeeper.
        </p>

        <hr />

        <div className="about-section">
          <p>
            I&rsquo;ve been working in digital marketing since 2010 &mdash; lead
            magnets, email sequences, content strategies, the whole thing. In
            2025 I stopped advising on it and built the software instead:{" "}
            <a href="https://boomp.net">boomp.net</a>, which keeps local
            businesses current on social without a content hire or an agency
            retainer. It launched as Glow Social and got its real name in 2026.
          </p>
        </div>

        <div className="about-section">
          <p>
            I&rsquo;m not the founder who raised a round and hired someone to
            build it. I write the code, I answer the support email, I decide
            what ships and what doesn&rsquo;t. Some of what&rsquo;s here is the
            log of that: what shipped, what broke, what I got wrong in public.
          </p>
        </div>

        <div className="about-section">
          <p>
            For most of my career, I stayed behind the scenes. I built the systems,
            wrote the copy, shipped the code &mdash; and let other people be the face
            of it. I told myself that was a preference. It wasn&rsquo;t. It was a rule
            I inherited a long time ago from people who are no longer in the room.
          </p>
        </div>

        <div className="about-section">
          <p>
            This site is where I practice the other thing: being visible. Writing
            what I actually think instead of what sounds safe. Some of it is about
            building software. Some of it is about books and identity and what it
            means to take up space on purpose.
          </p>

          <p>
            Not everything here will be polished. That&rsquo;s the whole point.
          </p>
        </div>

        <div className="about-section">
          <p>
            I live in Arizona with my husband and two kids, where the desert mornings
            are cool enough for a sweater and the afternoons remind you to drink water.
          </p>
        </div>
      </div>
    </div>
  );
}
