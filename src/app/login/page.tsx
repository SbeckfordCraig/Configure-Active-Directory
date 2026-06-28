import Link from "next/link";
import { login } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; check_email?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="flex flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <h1 className="mb-6 text-2xl font-bold">Log In</h1>

        {params.check_email && (
          <p className="mb-4 rounded border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-400">
            Account created! Check your email to confirm your account, then log in below.
          </p>
        )}
        {params.error && (
          <p className="mb-4 rounded border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400">
            {params.error}
          </p>
        )}

        <form action={login} className="flex flex-col gap-4">
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
              className="w-full rounded border border-white/10 bg-zinc-900 px-3 py-2 text-white outline-none focus:border-emerald-500"
            />
          </div>
          <button
            type="submit"
            className="rounded bg-emerald-500 px-4 py-2 font-semibold text-black hover:bg-emerald-400"
          >
            Log In
          </button>
        </form>

        <p className="mt-4 text-sm text-zinc-400">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-emerald-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
