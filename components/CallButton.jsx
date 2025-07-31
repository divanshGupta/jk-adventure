import { Phone } from 'lucide-react';
const CallButton = () => {
    return (
        <button className="block md:hidden fixed z-10 bottom-4 right-4 text-white p-3 rounded-full shadow-lg bg-black backdrop-blur-md transition">
            <Phone className="w-6 h-6" />
        </button>
    )
}
export default CallButton;