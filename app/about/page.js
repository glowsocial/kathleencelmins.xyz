export const metadata = {
  title: "About",
  description: "About Kathleen Celmins — builder, writer, the unshrunk version.",
};

export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="about-content">
        <h1 className="animate-in">About</h1>

        <p className="manifesto-text animate-in animate-in-delay-1">
          I build things, I write about what I notice, and I recently
          fired my inner gatekeeper.
        </p>

        <hr />

        <div className="about-section animate-in animate-in-delay-2">
          <p>
            I&rsquo;ve been working in digital marketing since 2010 &mdash; lead magnets,
            email sequences, content strategies, the whole thing. In 2025,
            I built <a href="https://glowsocial.com">Glow Social</a>, a software
            product that creates and publishes social media content for local
            businesses across 12 platforms.
          </p>
        </div>

        <div className="about-section animate-in animate-in-delay-3">
          <p>
            For most of my career, I stayed behind the scenes. I built the systems,
            wrote the copy, shipped the code &mdash; and let other people be the face
            of it. I told myself that was a preference. It wasn&rsquo;t. It was a rule
            I inherited a long time ago from people who are no longer in the room.
          </p>
        </div>

        <div className="about-section animate-in animate-in-delay-4">
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
