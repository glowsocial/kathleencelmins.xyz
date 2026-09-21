export const metadata = {
  title: "Work with me",
  description:
    "Done-for-you social media from Kathleen Celmins, founder of boomp.net. $275 a month. The software writes the posts, Kathleen approves them, they publish.",
};

const PAY_URL = "https://buy.stripe.com/8x29AUaH34tZ3G40jZ0co0a";
const CALL_URL =
  "https://boomp.net/lets-meet?utm_source=kathleencelmins.xyz&utm_medium=referral&utm_campaign=done_for_you&utm_content=work_with_me";
const SOFTWARE_URL =
  "https://boomp.net/pricing?utm_source=kathleencelmins.xyz&utm_medium=referral&utm_campaign=done_for_you&utm_content=work_with_me_software";

// One door, one price. Her name on it. The software is the how; she is
// the who. The "for you if" lines do the qualifying so the page doesn't
// need a sales call to filter.
export default function WorkWithMePage() {
  return (
    <div className="read-container">
      <div className="about-content">
        <h1>Work with me</h1>
        <p className="manifesto-text">
          I run your social media. You never open the app.
        </p>

        <hr className="about-rule" />

        <div className="about-section">
          <p>
            <strong>What it is.</strong>{" "}Twenty posts, one carousel and one
            video a month, made from your website and published to your
            accounts. The software I built writes them. I read every one
            before it goes out. That is the whole job, and it is off your
            plate.
          </p>
        </div>

        <div className="offer-card">
          <p className="offer-price">
            <span className="offer-amount">$275</span>
            <span className="offer-period">a month</span>
          </p>
          <p className="offer-terms">
            No contract. Cancel whenever. First posts within a week of the
            setup call.
          </p>
          <p className="about-cta">
            <a className="btn btn-primary" href={PAY_URL}>
              Start now
            </a>
            <a className="btn btn-secondary" href={CALL_URL}>
              Talk to me first
            </a>
          </p>
        </div>

        <div className="about-section">
          <p>
            <strong>This is for you if.</strong>
          </p>
          <ul>
            <li>You have a business that already works and you want social handled, not learned.</li>
            <li>You will not review drafts. You want to hear nothing unless something needs you.</li>
            <li>You have a website that says what you do. That is all I need to start.</li>
          </ul>
        </div>

        <div className="about-section">
          <p>
            <strong>This is not for you if.</strong>{" "}You want to write the
            posts yourself, or approve each one. That is the{" "}
            <a href={SOFTWARE_URL}>software on its own</a>, from $39 a month,
            and it is the better deal for you.
          </p>
        </div>

        <div className="about-section">
          <p>
            <strong>Why it costs what it costs.</strong>{" "}An agency charges
            $1,000 to $3,000 a month for a person writing from scratch. I am
            not writing from scratch. The software does that, and I am the
            person at the end of it saying yes or no. Under ten minutes a
            week per account. So the price is the software plus my hand on
            it, and nothing else.
          </p>
        </div>

        <div className="about-section">
          <p>
            <strong>Who is behind it.</strong>{" "}Me. I have worked in
            marketing since 2010. In 2025 I stopped advising on it and built
            boomp.net instead. I write the code and I answer the support
            email. If your posts are wrong, you are talking to the person
            who can fix it. <a href="/about">More about me</a>.
          </p>
        </div>

        <div className="about-section">
          <p className="about-cta">
            <a className="btn btn-primary" href={PAY_URL}>
              Start now
            </a>
            <span>$275 a month. Pay online, or book a call first.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
