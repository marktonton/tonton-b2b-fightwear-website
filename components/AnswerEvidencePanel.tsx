import Link from 'next/link';

export default function AnswerEvidencePanel({
  question,
  answer,
  sourceNote = 'Based on physical sample inspection, confirmed product specifications, and current TONTON development and production workflows. Project-specific values remain subject to sample approval.',
}: {
  question: string;
  answer: string;
  sourceNote?: string;
}) {
  return (
    <section className="answer-evidence" aria-labelledby="answer-evidence-title">
      <div className="answer-evidence-answer">
        <p>QUICK ANSWER</p>
        <h2 id="answer-evidence-title">{question}</h2>
        <p>{answer}</p>
      </div>
      <aside className="answer-evidence-review" aria-label="Content review and evidence basis">
        <p>CONTENT REVIEW</p>
        <h3>Reviewed by TONTON Product Development &amp; Quality Control Team</h3>
        <span>{sourceNote}</span>
        <strong>Last reviewed: September 22, 2026</strong>
        <nav aria-label="Evidence and next-step links">
          <Link href="/factory">Inspect Factory Evidence <span aria-hidden="true">→</span></Link>
          <Link href="/service-support">Review Production Support <span aria-hidden="true">→</span></Link>
          <Link href="/project-builder?source=answer-evidence">Build Your Project Brief <span aria-hidden="true">→</span></Link>
        </nav>
      </aside>
    </section>
  );
}
