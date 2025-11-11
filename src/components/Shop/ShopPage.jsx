import { useState } from "react";
import Pagination from "./Pagination";
import BookList from "./BookList";
import SearchBook from "./SearchBook";
import Filter from "./Filter";
import useFetchBook from "../../hooks/useFetchBooks";
import useFetchCategory from "../../hooks/useFetchCategory";
import { useSearchParams } from "react-router";
import useFetchAuthor from "../../hooks/useFetchAuthor";

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const [selectedCategory, setSelecetedCategory] = useState(initialCategory);

  const { books, loading, totalPages } = useFetchBook(
    currentPage,
    selectedCategory,
    selectedAuthor,
    selectedAvailability,
    searchQuery,
    sortOrder
  );

  const categories = useFetchCategory();
  const authors = useFetchAuthor();


  return (
    <div className="w-full min-h-screen bg-base-200">
      <div className="max-w-11/12 mx-auto px-4 py-4">
        <h1 className="text-4xl font-serif text-neutral-500 text-center py-12">
          Explore Your Favourite Books
        </h1>

        {/* Top Filter Bar - Same line as image */}
        <SearchBook
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        <div className="flex gap-6">
          {/* Sidebar Filter */}
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelecetedCategory={setSelecetedCategory}
            authors={authors}
            selectedAuthor={selectedAuthor}
            setSelectedAuthor={setSelectedAuthor}
            selectedAvailability={selectedAvailability}
            setSelectedAvailability={setSelectedAvailability}
          />    

          {/* Main Content */}
          <main className="flex-1">
            <BookList books={books} loading={loading} />
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={setCurrentPage}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;