import { useState, useEffect } from "react";
import { getUserProfile, updateUserProfile } from "@/lib/auth";

export default function PersonalInfo() {
  const [profile, setProfile] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await getUserProfile();
      if (!error && data) {
        setProfile(data);
      }
      setLoading(false);
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    const { error } = await updateUserProfile({
      name: profile.name,
      phone: profile.phone,
    });
    setSaving(false);

    if (error) {
      setMessage("Failed to update profile. Try again.");
    } else {
      setMessage("Profile updated successfully.");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto space-y-4 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-semibold">Personal Information</h2>

      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full p-2 border rounded"
      />

      <input
        type="email"
        name="email"
        value={profile.email}
        disabled
        className="w-full p-2 border rounded bg-gray-100"
      />

      <input
        type="tel"
        name="phone"
        value={profile.phone || ""}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full p-2 border rounded"
      />

      {message && <p className="text-green-600">{message}</p>}

      <button
        onClick={handleSave}
        disabled={saving}
        className="bg-blue-600 text-white p-2 rounded w-full"
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
}
