import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
const useFetchAuthor = () => {
    const [authors, setAuthors] = useState([]);
  useEffect(() => {
    apiClient.get("/authors").then((res) => setAuthors(res.data));
  }, []);

  return authors;
};

export default useFetchAuthor;