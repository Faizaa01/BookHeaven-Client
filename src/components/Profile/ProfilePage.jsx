import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import authApiClient from "../../services/auth-api-client";
import bg from "../../assets/images/5.jpg";

const ProfilePage = () => {
  const { user } = useAuthContext();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    try {
      const res = await authApiClient.get("/borrowrecords/");
      console.log(res.data)
      setHistory(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full pt-28 px-6 bg-cover bg-center flex justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full max-w-5xl space-y-10">
        
        {/* Profile Section */}
        <div className="bg-white/25 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-3xl p-10 w-full">
        <h2 className="text-center text-3xl font-semibold text-black mb-8">
            Profile Information
        </h2>

        <div className="space-y-2 text-gray-700 text-md">
            <p><span className="font-semibold">Userame:</span> {user.username}</p>
            <p><span className="font-semibold">Name:</span> {user.first_name || "Not Set"} {user.last_name}</p>
            <p><span className="font-semibold">Email:</span> {user.email}</p>
            <p><span className="font-semibold">Address:</span> {user.address || "Not set"}</p>
            <p><span className="font-semibold">Phone:</span> {user.phone_number || "Not set"}</p>
            <p><span className="font-semibold">Total Borrowed:</span> {history.length || 0 }</p>
          </div>
        </div>



        {/* Borrow History */}
        <div className="bg-white/25 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-3xl p-10 mb-16">
          <h2 className="text-2xl text-black font-semibold mb-6">Borrow History</h2>

          {loading ? (
            <p className="text-gray-700 text-center">Loading...</p>
          ) : history.length === 0 ? (
            <p>No borrow history found.</p>
          ) : (
            <div className="space-y-4">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="p-5 bg-white/40 backdrop-blur-xl border rounded-xl text-gray-600 flex items-center justify-between gap-6"
                >
                  <div className="flex-1 space-y-1">
                    <p><span className="font-semibold">Book:</span> {item.book.title}</p>
                    <p><span className="font-semibold">User:</span> {item.member.name}</p>
                    <p><span className="font-semibold">Borrow Date:</span> {item.borrow_date}</p>
                    <p><span className="font-semibold">Return Date:</span> {item.return_date || "Not returned"}</p>
                  </div>

                  {item.book.images?.length > 0 && (
                    <img
                      src={item.book.images[0].image}
                      alt={item.book.title}
                      className="w-22 h-32 object-cover rounded-lg border shadow-md"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
