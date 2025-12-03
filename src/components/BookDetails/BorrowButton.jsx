import { useState, useEffect } from "react";
import authApiClient from "../../services/auth-api-client";

const BorrowButton = ({ bookId, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [isBorrowed, setIsBorrowed] = useState(false);

  const fetchBookStatus = async () => {
    try {
      const response = await authApiClient.get(`/books/${bookId}/`);
      const book = response.data;
      setIsBorrowed(!book.availability_status); 
    } catch (err) {
      console.error("Failed to fetch book status:", err);
    }
  };

  useEffect(() => {
    fetchBookStatus();
  }, [bookId]);

  const handleBorrow = async () => {
    setLoading(true);
    try {
      await authApiClient.post(`/books/${bookId}/borrow/`);
      alert("Book borrowed successfully!");
      setIsBorrowed(true);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("Borrow failed:", err);
      alert(err.response?.data?.error || "Failed to borrow book.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleBorrow}
      disabled={loading || isBorrowed}
      className={`px-8 py-4 rounded text-white ${
        loading || isBorrowed
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-rose-400 hover:bg-pink-600"
      }`}
    >
      {loading ? "Borrowing..." : isBorrowed ? "Unavailable" : "Borrow"}
    </button>
  );
};

export default BorrowButton;
