import { useEffect, useState } from 'react';
import apiClient from "../../services/api-client";
import ErrorAlert from "../ErrorAlert";
import { Link } from "react-router";
import BookItem from './BookItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Book = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    useEffect(() => {
        setLoading(true);
        apiClient
            .get("/books/")
            .then((res) => setBooks(res.data.results))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 768) {
                setItemsPerPage(2);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(3);
            } else {
                setItemsPerPage(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = Math.ceil(books.length / itemsPerPage);

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(books.length - 1, prev + 1));
    };


    const visibleBooks = books.slice(
        currentIndex,
        currentIndex + itemsPerPage
    );

    if (error) return <ErrorAlert message={error} />;

    return (
        <section className="py-12 px-4 bg-rose-50">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                        GRAB YOUR OPPORTUNITY
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
                        Books You Will Love
                    </h2>
                </div>
                
                
                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className="p-3 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-gray-50"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentIndex >= books.length - itemsPerPage}
                        className="p-3 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-gray-50"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                </div>
                <Link
                    to="/shop"
                    className="px-5 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-all"
                >
                    View Library
                </Link>
                </div>

                {/* Slider Container */}
                <div className="relative overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {visibleBooks.map((book) => (
                            <div key={book.id} className="w-full">
                                <BookItem book={book} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots Indicator */}
                {totalSlides > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index * itemsPerPage)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    Math.floor(currentIndex / itemsPerPage) === index
                                        ? 'bg-gray-800 w-8' : 'bg-gray-300 hover:bg-gray-400 w-2'
                                }`}
                            />
                        ))}
                    </div>
                )}

                {isLoading && (
                    <div className="text-center py-8">
                        <div className="inline-block w-8 h-8 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Book;