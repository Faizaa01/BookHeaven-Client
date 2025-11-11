import { Link } from "react-router";
import BorrowButton from "./BorrowButton";
import ReturnButton from "./ReturnButton";

const BookData = ({ book }) => {
  return (
    <div className="space-y-6 p-6 bg-white shadow-lg border border-gray-200">
      
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold text-indigo-900">{book.title}</h1>
          <span className="text-gray-600 text-lg">by {book.author.name}</span>
          <div className="flex items-center gap-4">
          <span className="px-4 py-2 text-sm bg-rose-100 text-rose-700 rounded-full">
            {book.category.name}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-8">
        <p className="text-gray-700 font-medium">ISBN: <span className="font-normal">{book.isbn}</span></p>
        <p className={`font-medium ${book.availability_status ? "text-lime-700" : "text-red-600"}`}>
          {book.availability_status ? "Available" : "Not Available"}
        </p>
      </div>

      <div className="prose prose-sm text-gray-700 border-t pt-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          vitae justo nec libero pretium consequat. Fusce vel leo a urna
          sollicitudin cursus. Sed ut perspiciatis unde omnis iste natus error
          sit voluptatem.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-8 mt-16">
        <BorrowButton bookId={book.id} />
        <ReturnButton bookId={book.id} />
        <Link to="/borrowrecord">
        <button>Borrow Records</button>
        </Link>
      </div>
    </div>
  );
};

export default BookData;
