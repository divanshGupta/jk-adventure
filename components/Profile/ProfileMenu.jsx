import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ProfileMenu({ menuItems, logoutFunction }) {
  return (
   <>
    <div className="mt-6 text-lg bg-white rounded-lg shadow-md divide-y">
      {menuItems.map((item, idx) => {
        if (item.type === "link") {
            return (
                <Link key={idx} href={item.path}>
                <div className="flex items-center justify-between p-6 hover:bg-gray-100 cursor-pointer">
                    <span className="text-gray-700">{item.label}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                </Link>
            )
        }
        if (item.type === "action") {
            return (
                <button
                key={idx}
                    onClick={logoutFunction}
                    className="text-red-600 w-full flex items-center justify-between p-6 hover:bg-gray-100 cursor-pointer"
                    >
                    Log Out
                </button>
            )
        }
        return null;
        })}
    </div>
    
    </>
  );
}
