import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import withAdminAuth from "@/lib/withAdminAuth";

const AdminServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const { data, error } = await supabase.from("services").select("*");
    if (error) console.error("Error fetching services:", error);
    else setServices(data);
  };

  const deleteService = async (id) => {
    const { error } = await supabase.from("services").delete().eq("id", id);
    if (error) console.error("Error deleting service:", error);
    else fetchServices();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Services</h2>
      <ul className="space-y-2">
        {services.map((service) => (
          <li
            key={service.id}
            className="flex justify-between items-center border p-3 rounded-md"
          >
            <p className="font-semibold">{service.name}</p>
            <button
              onClick={() => deleteService(service.id)}
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
export default withAdminAuth(AdminServices);