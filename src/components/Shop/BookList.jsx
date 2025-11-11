import BookItem from "../Books/BookItem";

const ProductList = ({ books, loading }) => {
  if (loading)
    return (
      <div className="flex justify-center items-center py-10 min-h-screen text-5xl">
        <span className="loading loading-bars loading-xl text-lime-900/30"></span>
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {books.map((book) => (
        <BookItem book={book} key={book.id} />
      ))}
    </div>
  );
};

export default ProductList;