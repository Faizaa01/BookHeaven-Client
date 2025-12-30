import { useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMembers = async () => {
    try {
      const res = await authApiClient.get("/member/");
    //   console.log(res.data);
      setMembers(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load members");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading members...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Registered Members
        </h1>

        {members.length === 0 ? (
          <p className="text-center text-gray-500">
            No members found.
          </p>
        ) : (
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3">Name</th>
                <th className="border p-3">Email</th>
                <th className="border p-3">Membership Date</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id} className="text-center">
                  <td className="border p-3">
                    {member.name}
                  </td>
                  <td className="border p-3">
                    {member.email}
                  </td>
                  <td className="border p-3">
                    {member.membership_date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Members;
