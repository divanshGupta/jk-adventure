import supabaseAdmin from "@/lib/supabaseAdmin";
import { supabase } from "@/lib/supabaseClient"; // your public client for table ops

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { userId } = req.body;

  try {
    // Delete from auth
    const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(userId);
    if (authError) throw authError;

    // Delete from public users table
    const { error: tableError } = await supabase.from("users").delete().eq("id", userId);
    if (tableError) throw tableError;

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Delete user error:", error);
    res.status(500).json({ error: error.message });
  }
}
