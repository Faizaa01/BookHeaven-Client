import { useState } from "react";
import { useNavigate } from "react-router";

const UpdateBook = ({ bookId, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpdate = () => {
    setLoading(true);
    try {
      navigate(`/book/edit/${bookId}`);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("Navigation failed:", err);
      alert("Failed to navigate to edit page.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleUpdate}
      disabled={loading}
      className={`px-8 py-4 rounded text-white ${
        loading ? "bg-gray-400 cursor-not-allowed" : "bg-lime-600 hover:bg-lime-900"
      }`}
    >
      {loading ? "Loading..." : "Update"}
    </button>
  );
};

export default UpdateBook;
