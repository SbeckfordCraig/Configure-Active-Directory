"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function signup(formData: FormData) {
  const email = (formData.get("email") as string).trim();
  const password = formData.get("password") as string;
  const username = (formData.get("username") as string).trim();

  if (!username) {
    redirect(`/signup?error=${encodeURIComponent("Username is required.")}`);
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { username } },
  });

  if (error) {
    redirect(`/signup?error=${encodeURIComponent(error.message)}`);
  }

  // If email confirmation is off, Supabase logs the user in immediately.
  if (data.session) {
    redirect("/profile");
  }

  redirect("/login?check_email=1");
}
