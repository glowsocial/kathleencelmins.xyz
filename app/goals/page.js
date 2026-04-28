export const metadata = {
  title: "Goals",
  description: "What I'm working toward — less of a checklist, more of a compass.",
};

export default function GoalsPage() {
  return (
    <div className="page-container">
      <div className="about-content">
        <h1 className="animate-in">Goals</h1>

        <p className="manifesto-text animate-in animate-in-delay-1">
          I used to be the kind of person who set a lot of goals. Be thinner. Be richer.
          Be more accomplished. The new year would feel less gloomy because I had a list.
        </p>

        <p className="manifesto-text animate-in animate-in-delay-2">
          Somewhere along the way, I realized the best things in my life happened when
          I stopped reaching for goals and started following threads that interested me.
        </p>

        <p className="manifesto-text animate-in animate-in-delay-3" style={{ color: 'var(--text-muted)', fontSize: 'var(--text-lg)' }}>
          So this page is less of a checklist and more of a compass.
        </p>

        <hr />

        <div className="goal-marker animate-in animate-in-delay-4">
          <h2 style={{ marginTop: 0 }}>The one thing</h2>
          <p>
            <strong>Write more, and share it.</strong> Not for an audience. Not to build
            a brand. Just to get the thoughts out of my head and onto a page, and to
            see what they look like in the light.
          </p>
        </div>
      </div>
    </div>
  );
}
