import { useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";
import bg from "../assets/images/5.jpg";

const BorrowRecord = () => {
  const [borrows, setBorrows] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBorrows = async () => {
    try {
      const response = await authApiClient.get("/borrowrecords/");
      setBorrows(response.data);
    } catch (err) {
      console.error("Failed to fetch borrow records:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBorrows();
  }, []);

  return (
    <div
      className="min-h-screen w-full flex justify-center items-start pt-24 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full max-w-3xl bg-white/30 backdrop-blur-xl shadow-lg rounded-2xl p-8 border border-white/40">
        <h2 className="text-center text-2xl font-semibold text-black mb-6">
          Borrow History
        </h2>

        {loading ? (
          <div className="text-center py-20 text-gray-700">
            Loading borrow records...
          </div>
        ) : borrows.length === 0 ? (
          <div className="text-center py-20 text-gray-700">
            No borrow history yet.
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-600 border-b border-white/50">
                <th className="px-4 py-2">Book</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>

            <tbody>
              {borrows.map((b) => (
                <tr key={b.id} className="border-b border-white/40">
                  <td className="px-4 py-2 text-gray-600">{b.book.title}</td>
                  <td className="px-4 py-2">
                    <span
                      className={
                        b.status === "BORROWED" ? "text-red-300" : "text-lime-600"
                      }
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    {b.status === "BORROWED" ? b.borrow_date : b.return_date || "-"}
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

export default BorrowRecord;
