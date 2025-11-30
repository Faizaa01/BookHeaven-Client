import { useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";
import bg from "../assets/images/1.jpg";

const MembershipPage = () => {
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [memberData, setMemberData] = useState(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const checkMembership = async () => {
    try {
      const res = await authApiClient.get(`/member/me/`);
      setMemberData(res.data);
    } catch (err) {
        console.error(err);
      setMemberData(null);
    } finally {
      setChecking(false);
    }
  };

  useEffect(() => {
    checkMembership();
  }, []);

  const handleMembership = async () => {
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await authApiClient.put("/member/become-member/");
      setMemberData(res.data);
      setSuccess("You are now a member!");
    } catch (err) {
      setError(
        err.response?.data?.detail || "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Checking membership...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6"
    style={{ backgroundImage: `url(${bg})` , backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center mb-4 text-rose-300">
          Membership
        </h1>

        {memberData ? (
          <div>
            <p className="text-lime-600 font-medium mb-4 text-center">
              You are already a member.
            </p>

            <div className="p-5 rounded-xl border border-emerald-500 bg-emerald-50">
              <h2 className="text-xl font-semibold mb-2 text-gray-400 text-center">Membership Card</h2>
              <p className="text-gray-700 font-semibold">Name: {memberData.name}</p>
              <p className="text-gray-700  font-semibold">Email: {memberData.email}</p>
              <p className="text-gray-700  font-semibold">Membership Date: {memberData.membership_date}</p>
              <p className="text-gray-700  font-semibold">Status: Active</p>
            </div>
          </div>
        ) : (
          <>
            <p className="text-gray-600 text-center mb-6">
              Click the button below to activate your membership.
            </p>

            {success && (
              <p className="text-green-300 text-center mb-4">{success}</p>
            )}
            {error && (
              <p className="text-red-300 text-center mb-4">{error}</p>
            )}

            <button
              onClick={handleMembership}
              disabled={loading}
              className="w-full bg-lime-800/50 text-white py-2 rounded-lg transition-all active:scale-95 disabled:opacity-50"
            >
              {loading ? "Processing..." : "Become a Member"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MembershipPage;
