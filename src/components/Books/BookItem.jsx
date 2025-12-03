import { Link } from "react-router";
import defaultImage from "../../assets/images/default.jpg";

const BookItem = ({ book }) => {
    return (
        <Link to={`/library/${book.id}`}>
        <div className="group cursor-pointer h-full flex flex-col">
            <div className="shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex-1 flex flex-col">
                <div className="w-full bg-amber-900/10 h-80 flex items-center justify-center py-8">
                    <img
                        src={book.images?.length > 0 ? book.images[0].image : defaultImage}
                        alt={book.title || "Book Cover"}
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
                <div className="p-8 flex-1 flex flex-col bg-amber-900/10 text-center">
                    <h2 className="text-xl font-serif text-indigo-900/60 line-clamp-2 group-hover:text-rose-300 transition-colors">
                        {book.title}
                    </h2>
                    <p className="text-gray-600 text-sm mt-auto">
                        {book.author?.name}
                    </p>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default BookItem;