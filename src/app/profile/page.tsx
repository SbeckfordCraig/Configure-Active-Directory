import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/app/auth/actions";

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const username = (user.user_metadata?.username as string | undefined) ?? "Unnamed";
  const memberSince = new Date(user.created_at).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-12">
      <div className="rounded-lg border border-white/10 bg-zinc-900 p-6">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 text-3xl font-bold text-emerald-400">
          {username.charAt(0).toUpperCase()}
        </div>
        <h1 className="text-2xl font-bold">{username}</h1>
        <p className="text-zinc-400">{user.email}</p>
        <p className="mt-4 text-sm text-zinc-500">Member since {memberSince}</p>

        <form action={signOut} className="mt-6">
          <button
            type="submit"
            className="rounded border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-white/30 hover:text-white"
          >
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
}
