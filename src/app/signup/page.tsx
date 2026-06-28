import Link from "next/link";
import { signup } from "./actions";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="flex flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <h1 className="mb-6 text-2xl font-bold">Sign Up</h1>

        {params.error && (
          <p className="mb-4 rounded border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400">
            {params.error}
          </p>
        )}

        <form action={signup} className="flex flex-col gap-4">
          <div>
            <label htmlFor="username" className="mb-1 block text-sm text-zinc-300">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              minLength={3}
              maxLength={24}
              className="w-full rounded border border-white/10 bg-zinc-900 px-3 py-2 text-white outline-none focus:border-emerald-500"
            />
            <p className="mt-1 text-xs text-zinc-500">
              This is the name other people will see on your submissions.
            </p>
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-zinc-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded border border-white/10 bg-zinc-900 px-3 py-2 text-white outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block text-sm text-zinc-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              className="w-full rounded border border-white/10 bg-zinc-900 px-3 py-2 text-white outline-none focus:border-emerald-500"
            />
          </div>
          <button
            type="submit"
            className="rounded bg-emerald-500 px-4 py-2 font-semibold text-black hover:bg-emerald-400"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-zinc-400">
          Already have an account?{" "}
          <Link href="/login" className="text-emerald-400 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
