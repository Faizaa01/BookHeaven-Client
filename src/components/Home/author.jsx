import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import ErrorAlert from '../../components/ErrorAlert';
import apiClient from '../../services/api-client';
import { useEffect, useState } from 'react';
import bg from "../../assets/images/2.jpg";

const Author = () => {
  const [authors, setAuthors] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleAuthors, setVisibleAuthors] = useState(3);

  useEffect(() => {
    setLoading(true);
    apiClient.get("/authors/")
      .then(res => setAuthors(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleAuthors(1);
      else if (width < 1024) setVisibleAuthors(2);
      else setVisibleAuthors(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, authors.length - visibleAuthors);

  const handlePrev = () => setCurrentIndex(prev => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex(prev => Math.min(maxIndex, prev + 1));

  if (error) return <ErrorAlert error={error} />;

  return (
    <div className="w-full h-[400px] flex items-center justify-center p-8" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="max-w-7xl w-full relative">
        <h3 className='text-3xl text-center mb-6 font-serif text-white'>Our Authors</h3>

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
            style={{ transform: `translateX(-${(currentIndex * 100) / visibleAuthors}%)` }}
          >
            {authors.map((author, index) => (
              <div
                key={index}
                className={`flex-shrink-0 bg-stone-600/30 shadow-lg p-6`}
                style={{ width: `${100 / visibleAuthors}%` }}
              >
                {/* Avatar and Name Row */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-200 to-rose-200 flex-shrink-0 flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{author.name}</h3>
                </div>

                {/* Biography */}
                <p className="text-md text-gray-100 leading-relaxed">
                  {author.biography.split(' ').slice(0, 20).join(' ') + '...'}
                </p>
              </div>
            ))}
            {isLoading && (
              <div className="text-center py-8 w-full">
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
