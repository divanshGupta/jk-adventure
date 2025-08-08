import withAuth from "@/lib/withAuth"

const AdminBookings = () => {
    return (
        <div><h1>this is admin's bookings list.</h1></div>
    )
}
export default withAuth(AdminBookings);