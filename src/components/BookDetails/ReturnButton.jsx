import { useState } from "react";
import authApiClient from "../../services/auth-api-client";

const ReturnButton = ({ bookId, onSuccess }) => {
  const [loading, setLoading] = useState(false);

const handleReturn = async () => {
  setLoading(true);
  try {
    const response = await authApiClient.post(`/books/${bookId}/return/`, {});
    
    if (response.status === 200) {
      alert("Book returned successfully!");
      if (onSuccess) onSuccess(response.data);
    } else {
      alert("Something went wrong while returning the book.");
    }
  } catch (err) {
    console.error("Return failed:", err);
    if (err.response && err.response.data) {
      const msg = err.response.data.error || err.response.data.detail || "Failed to return book.";
      alert(msg);
    } else if (err.request) {
      alert("No response from server. Please try again.");
    } else {
      alert("Request failed: " + err.message);
    }
  } finally {
    setLoading(false);
  }
};


  return (
    <button
      onClick={handleReturn}
      disabled={loading} // only disable while processing
      className={`px-8 py-4 rounded text-white ${
        loading ? "bg-gray-400 cursor-not-allowed" : "bg-gray-600 hover:bg-gray-800"
      }`}
    >
      {loading ? "Returning..." : "Return"}
    </button>
  );
};

export default ReturnButton;
