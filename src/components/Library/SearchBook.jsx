import { Search } from "lucide-react";

const SearchBook = ({
  searchQuery,
  setSearchQuery,
  sortOrder,
  setSortOrder,
  }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 mb-12">
          <div className="flex items-center gap-12">
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-4 pr-10 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-rose-300 hover:bg-pink-400 text-white rounded-r-md">
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-4 text-sm text-gray-600 whitespace-nowrap">
              <span>Default Sorting : </span>
              <select
                className="border border-gray-300 rounded pr-16 py-1"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="">Default</option>
                <option value="title">Title: A to Z</option>
                <option value="-title">Title: Z to A</option>
              </select>
            </div>
          </div>
        </div>
    );
};

export default SearchBook;