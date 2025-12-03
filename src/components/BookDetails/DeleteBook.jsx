import { useState } from "react";
import authApiClient from "../../services/auth-api-client";

const DeleteBook = ({ bookId, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this book?")) return;

    setLoading(true);
    try {
      await authApiClient.delete(`/books/${bookId}/`);
      alert("Book deleted successfully!");
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("Delete failed:", err);
      alert(err.response?.data?.error || "Failed to delete book.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className={` px-8 py-4 rounded text-white ${
        loading ? "bg-gray-400 cursor-not-allowed" : "bg-pink-500 hover:bg-red-500"
      }`}
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
};

export default DeleteBook;
