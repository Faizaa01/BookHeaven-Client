import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import BookData from "../components/BookDetails/BookData";
import BookImage from "../components/BookDetails/BookImage";
import Recommendations from "../components/BookDetails/Recommendations";
import useAuthContext from "../hooks/useAuthContext";

const BookDetails = () => {
  const { bookId } = useParams(); 
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    apiClient.get(`/books/${bookId}/`)
      .then(res => setBook(res.data))
      .finally(() => setLoading(false));
  }, [bookId]);

  const handleDelete = () => {
  navigate("/books");
};

  if (loading) return (
  <div className="text-center py-8 m-56">
    <div className="inline-block w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
  </div>
);
  if (!book) return <div className="p-10 text-center">Book Not Found</div>;

  return (
    <div className="bg-white  min-h-screen">
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BookImage images={book.images} name={book.title} />
        <BookData book={book} user={user} onDelete={handleDelete} />
      </div>
      <Recommendations categoryId={book.category.id} currentBookId={book.id} />
    </div>
  </div>
  );
};

export default BookDetails;
