type ReviewEvidence = {
  screenshot: string;
  screenshotAlt: string;
  buyer: string;
  date: string;
  dateLabel: string;
  title: string;
  quote: string;
  summary: string;
  project: string;
  evidence: readonly string[];
};

const ALIBABA_PROFILE = 'https://tontos.m.en.alibaba.com/';

export default function CustomerReviewEvidence({ review }: { review: ReviewEvidence }) {
  return (
    <section className="customer-review-evidence" aria-labelledby="customer-review-title">
      <div className="rg-section-heading">
        <p className="rg-eyebrow">Repeat-Buyer Feedback</p>
        <h2 id="customer-review-title">{review.title}</h2>
        <p>{review.summary}</p>
      </div>

      <article className="customer-review-card">
        <a
          className="customer-review-screenshot"
          href={review.screenshot}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the original Alibaba.com review screenshot"
        >
          <img src={review.screenshot} alt={review.screenshotAlt} loading="lazy" />
          <span>View original review screenshot</span>
        </a>

        <div className="customer-review-copy">
          <div className="customer-review-meta">
            <span className="customer-review-stars" aria-label="5 out of 5 stars">★★★★★</span>
            <span>Repeat buyer</span>
            <time dateTime={review.date}>{review.dateLabel}</time>
          </div>
          <blockquote>“{review.quote}”</blockquote>
          <p className="customer-review-buyer">— {review.buyer}, buyer name masked for privacy</p>

          <div className="customer-review-project">
            <p><strong>Completed project:</strong> {review.project}</p>
            <ul aria-label="Customer project and review evidence">
              {review.evidence.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <p className="customer-review-source">
            <strong>Source:</strong> Review originally submitted through the TONTON{' '}
            <a href={ALIBABA_PROFILE} target="_blank" rel="noopener noreferrer">Alibaba.com storefront</a>.
            The screenshot is retained as source evidence; project specifications are confirmed separately for every order.
          </p>
        </div>
      </article>
    </section>
  );
}
