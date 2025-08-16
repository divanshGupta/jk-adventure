import withAuth from "@/lib/withAuth";
import useUserProfile from "@/hooks/useUserProfile";

const Bookings = () => {
    const { user } = useUserProfile();
    return (
        <div className="mt-32">hello, {user?.name}</div>
    )
}
export default withAuth(Bookings);