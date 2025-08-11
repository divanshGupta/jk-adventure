export default function ProfileCard({ userProfile }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
      <img
        src="/images/img4.jpg"
        alt="Profile"
        className="w-28 h-28 rounded-full border object-cover"
      />
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-xl font-semibold">{userProfile?.name || 'User'}</h2>
        <p className="text-lg text-gray-500">{userProfile?.email}</p>
      </div>
    </div>
  );
}
