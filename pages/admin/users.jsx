import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient"; // adjust import path
import withAdminAuth from "@/lib/withAdminAuth";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all users
  const fetchUsers = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("users").select("*");

    if (error) {
      console.error("Error fetching users:", error.message);
    } else {
      setUsers(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete user
  const deleteUser = async (id) => {
  if (!confirm("Are you sure you want to delete this user?")) return;

  try {
    const res = await fetch("/api/deleteUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: id }),
    });

    if (!res.ok) throw new Error("Failed to delete user");

    setUsers(users.filter((u) => u.id !== id));
  } catch (err) {
    console.error(err.message);
  }
};


  // Restrict / Unrestrict user
  const toggleRestrict = async (id, restricted) => {
    const { error } = await supabase
      .from("users")
      .update({ restricted: !restricted })
      .eq("id", id);

    if (error) {
      console.error("Error updating restriction:", error.message);
    } else {
      setUsers(
        users.map((u) =>
          u.id === id ? { ...u, restricted: !restricted } : u
        )
      );
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Admin - Users</h2>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Restricted</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">
                  {user.restricted ? "Yes" : "No"}
                </td>
                <td className="border p-2 space-x-2">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => toggleRestrict(user.id, user.restricted)}
                    className={`${
                      user.restricted
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    } text-white px-3 py-1 rounded`}
                  >
                    {user.restricted ? "Unrestrict" : "Restrict"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default withAdminAuth(AdminUsers);