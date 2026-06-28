import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/app/auth/actions";

export default async function SiteHeader() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const username = user?.user_metadata?.username as string | undefined;

  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-emerald-400">
          IndieArcade
        </Link>
        <nav className="flex items-center gap-4 text-sm text-zinc-300">
          {user ? (
            <>
              <Link href="/profile" className="hover:text-white">
                {username ?? user.email}
              </Link>
              <form action={signOut}>
                <button type="submit" className="hover:text-white">
                  Log Out
                </button>
              </form>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-white">
                Log In
              </Link>
              <Link href="/signup" className="hover:text-white">
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
