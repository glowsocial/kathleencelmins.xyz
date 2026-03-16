export const metadata = {
  title: "About",
  description: "About Kathleen Celmins.",
};

export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="about-content">
        <h1>About</h1>

        <p className="manifesto-text">
          I live in Arizona, where the desert mornings are cool enough for a sweater
          and the afternoon sun warms your back on winter walks.
        </p>

        <hr />

        <p>
          I&rsquo;ve been working in digital marketing since 2010 &mdash; lead magnets,
          email sequences, content strategies, the whole thing. More recently,
          I built <a href="https://glowsocial.com">Glow Social</a>, a software
          product that creates social media content for local businesses.
        </p>

        <p>
          But this site isn&rsquo;t about that. This is a place to write about whatever
          is on my mind. The things I&rsquo;m noticing, the books I&rsquo;m reading, the way
          a year can feel both long and short at the same time. Part reflection,
          part thinking out loud.
        </p>

        <p>
          I believe we get better at thinking by writing things down. Not everything
          here will be polished. That&rsquo;s kind of the point.
        </p>
      </div>
    </div>
  );
}
