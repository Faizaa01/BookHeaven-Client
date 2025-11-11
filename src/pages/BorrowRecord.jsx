import { useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";

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

  if (loading) return <p>Loading borrow records...</p>;
  if (!borrows.length) return <p>No borrow history yet.</p>;

  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2">Book</th>
          <th className="border px-4 py-2">Status</th>
          <th className="border px-4 py-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {borrows.map((b) => (
          <tr key={b.id}>
            <td className="border px-4 py-2">{b.book.title}</td>
            <td className="border px-4 py-2">{b.status}</td>
            <td className="border px-4 py-2">
              {b.status === "BORROWED" ? b.borrow_date : b.return_date || "-"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BorrowRecord;
