import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import withAdminAuth from "@/lib/withAdminAuth";

const AdminPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    const { data, error } = await supabase.from("packages").select("*");
    if (error) console.error("Error fetching packages:", error);
    else setPackages(data);
  };

  const deletePackage = async (id) => {
    const { error } = await supabase.from("packages").delete().eq("id", id);
    if (error) console.error("Error deleting package:", error);
    else fetchPackages();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Packages</h2>
      <ul className="space-y-2">
        {packages.map((pkg) => (
          <li
            key={pkg.id}
            className="flex justify-between items-center border p-3 rounded-md"
          >
            <div>
              <p className="font-semibold">{pkg.title}</p>
              <p className="text-sm text-gray-500">{pkg.description}</p>
            </div>
            <button
              onClick={() => deletePackage(pkg.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default withAdminAuth(AdminPackages);