import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import apiClient from '../../services/api-client';
import bg from "../../assets/images/2.jpg";
import { User } from 'lucide-react';

const Author = () => {
    const [authors, setAuthors] = useState([])
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
          setLoading(true);
          apiClient
              .get("/authors/")
              .then((res) => setAuthors(res.data))
              .catch((err) => setError(err.message))
              .finally(() => setLoading(false));
      }, []);

  const visibleAuthors = 3;
  const maxIndex = Math.max(0, authors.length - visibleAuthors);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  if (error) return <ErrorAlert message={error} />;

  return (
    <div className="w-full h-[400px] flex items-center justify-center p-8" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="max-w-7xl w-full relative">
        <div className='text-3xl text-center mb-6 font-serif'>
          <h3>Our Authors</h3>
        </div>
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-2/3 -translate-y-1/2 z-10 bg-red-300 hover:bg-rose-400 disabled:bg-stone-300 disabled:cursor-not-allowed text-white p-3 rounded-r-lg shadow-lg transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          className="absolute right-0 top-2/3 -translate-y-1/2 z-10 bg-red-300 hover:bg-rose-400 disabled:bg-stone-300 disabled:cursor-not-allowed text-white p-3 rounded-l-lg shadow-lg transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (33.333 + 2)}%)` }}
          >
            {authors.map((author, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-stone-600/30 shadow-lg p-6 w-[calc(33.333%-1rem)]"
              >
                {/* Avatar and Name Row */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-200 to-rose-200 flex-shrink-0 flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {author.name}
                  </h3>
                </div>
                
                {/* Biography Below */}
                <p className="text-md text-gray-100 leading-relaxed">
                  {author.biography.split(' ').slice(0, 20).join(' ')+'...'}
                </p>
              </div>
            ))}
            {isLoading && (
                <div className="text-center py-8">
                    <div className="inline-block w-8 h-8 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;