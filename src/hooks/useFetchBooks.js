import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchBook = (
  currentPage,
  selectedCategory,
  selectedAuthor,
  selectedAvailability,
  searchQuery,
  sortOrder) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const url = `/books/?page=${currentPage}&category=${selectedCategory}&author=${selectedAuthor}&availability_status=${selectedAvailability}&search=${searchQuery}&ordering=${sortOrder}`;
      try {
        const response = await apiClient.get(url);
        const data = await response.data;

        setBooks(data.results);
        setTotalPages(Math.ceil(data.count / 8));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [currentPage, selectedAuthor, selectedCategory, selectedAvailability, searchQuery, sortOrder]);

  return { books, loading, totalPages };
};

export default useFetchBook;