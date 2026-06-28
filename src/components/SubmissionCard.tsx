import type { Submission } from "@/lib/sample-submissions";

function formatPlays(plays: number): string {
  if (plays >= 1000) return `${(plays / 1000).toFixed(1)}k`;
  return String(plays);
}

export default function SubmissionCard({ submission }: { submission: Submission }) {
  return (
    <a
      href="#"
      className="group block overflow-hidden rounded-lg border border-white/10 bg-zinc-900 transition hover:border-white/30"
    >
      <div
        className={`flex h-36 items-center justify-center bg-gradient-to-br ${submission.thumbnailGradient} text-3xl font-bold text-white/80`}
      >
        {submission.title.charAt(0)}
      </div>
      <div className="p-3">
        <div className="mb-1 flex items-center justify-between text-xs text-zinc-400">
          <span className="rounded bg-white/10 px-2 py-0.5">{submission.category}</span>
          <span>{submission.daysAgo}d ago</span>
        </div>
        <h3 className="truncate font-semibold text-white group-hover:text-emerald-400">
          {submission.title}
        </h3>
        <p className="truncate text-sm text-zinc-400">by {submission.author}</p>
        <div className="mt-2 flex items-center justify-between text-sm text-zinc-400">
          <span>▶ {formatPlays(submission.plays)} plays</span>
          <span>★ {submission.rating.toFixed(1)}</span>
        </div>
      </div>
    </a>
  );
}
