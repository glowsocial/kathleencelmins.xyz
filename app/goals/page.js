export const metadata = {
  title: "Goals",
  description: "What I'm working toward — less of a checklist, more of a compass.",
};

export default function GoalsPage() {
  return (
    <div className="page-container">
      <div className="about-content">
        <h1>Goals</h1>

        <p>
          I used to be the kind of person who set a lot of goals. Be thinner. Be richer.
          Be more accomplished. The new year would feel less gloomy because I had a list.
        </p>

        <p>
          Somewhere along the way, I realized the best things in my life happened when
          I stopped reaching for goals and started following threads that interested me.
        </p>

        <p className="manifesto-text">
          So this page is less of a checklist and more of a compass.
        </p>

        <hr />

        <div className="goal-marker">
          <h2>The one thing</h2>
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
