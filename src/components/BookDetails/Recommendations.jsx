import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import BookItem from "../Books/BookItem";

const Recommendations = ({ categoryId, currentBookId }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!categoryId) return;

    const fetchRecommendations = async () => {
      try {
        const res = await apiClient.get(`/books/?category=${categoryId}&page=1&page_size=5`);
        const filtered = res.data.results.filter((b) => b.id !== currentBookId);
        setBooks(filtered);
      } catch (err) {
        console.error("Failed to fetch recommendations", err);
      }
    };

    fetchRecommendations();
  }, [categoryId, currentBookId]);

  if (books.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">More from this category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
