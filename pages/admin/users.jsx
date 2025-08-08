import withAuth from "@/lib/withAuth";

const AdminUsers = () => {
    return (
        <div><h1>this is admin's users list.</h1></div>
    )
}
export default withAuth(AdminUsers);