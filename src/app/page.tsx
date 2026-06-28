import SubmissionCard from "@/components/SubmissionCard";
import { sampleSubmissions } from "@/lib/sample-submissions";

const categories = ["All", "Games", "Art", "Animation"] as const;

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <span className="text-xl font-bold text-emerald-400">IndieArcade</span>
          <nav className="flex gap-4 text-sm text-zinc-300">
            <a href="#" className="hover:text-white">
              Log In
            </a>
            <a href="#" className="hover:text-white">
              Sign Up
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="mb-1 text-2xl font-bold">Browse</h1>
        <p className="mb-6 text-zinc-400">
          Discover games, art, and animation from independent creators.
        </p>

        <div className="mb-6 flex gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-zinc-300 first:border-emerald-500 first:bg-emerald-500/10 first:text-emerald-400 hover:border-white/30"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {sampleSubmissions.map((submission) => (
            <SubmissionCard key={submission.id} submission={submission} />
          ))}
        </div>
      </main>
    </div>
  );
}
