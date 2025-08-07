import { CgDanger } from "react-icons/cg";
import Link
 from "next/link";
const unauthorized = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-4 md:gap-12">
            <CgDanger size={80} className="text-red-700"/>
            <h1 className="text-xl md:text-4xl text-red-700">You are not allowed to access this page.</h1>
            <Link
            href={'/'}><button className="px-4 py-2 shadow-md rounded-md border border-gray-500">Go Back</button></Link>
        </div>
    )
}
export default unauthorized;