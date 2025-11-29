const Filter = ({
    categories,
    selectedCategory,
    setSelecetedCategory,
    authors,
    selectedAuthor,
    setSelectedAuthor,
    selectedAvailability,
    setSelectedAvailability
}) => {
    return (
        <aside className="w-64 mb-8">
            <div className="sticky top-6 space-y-6">
              
              {/* Categories */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 text-gray-900 border-rose-300">
                  Categories
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer text-gray-700 hover:text-pink-300">
                    <input
                      type="radio"
                      name="category"
                      value=""
                      checked={selectedCategory === ""}
                      onChange={(e) => setSelecetedCategory(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">All Categories</span>
                  </label>
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center cursor-pointer text-gray-700 hover:text-pink-300">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={(e) => setSelecetedCategory(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-sm">{category.name} ({category.book_count})</span>
                    </label>
                  ))}
                </div>
              </div>

                {/* Authors */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 text-gray-900 border-rose-300">
                  Authors 
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer text-gray-700 hover:text-pink-400">
                    <input
                      type="radio"
                      name="author"
                      value=""
                      checked={selectedAuthor === ""}
                      onChange={(e) => setSelectedAuthor(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">All Authors</span>
                  </label>
                  {authors.map((author) => (
                    <label key={author.id} className="flex items-center cursor-pointer text-gray-700 hover:text-pink-400">
                      <input
                        type="radio"
                        name="author"
                        value={author.id}
                        checked={selectedAuthor === author.id.toString()}
                        onChange={(e) => setSelectedAuthor(e.target.value)}
                        className="mr-2"
                        />

                      <span className="text-sm">{author.name}{author.book_count}</span>
                    </label>
                  ))}
                </div>
              </div>


              {/* Availability */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 text-gray-900 border-rose-300">
                    Availability
                </h3>
                <div className="space-y-2">
                    <label className="flex items-center cursor-pointer text-gray-700 hover:text-pink-400">
                    <input
                        type="radio"
                        name="availability"
                        value=""
                        checked={selectedAvailability === ""}
                        onChange={(e) => setSelectedAvailability(e.target.value)}
                        className="mr-2"
                    />
                    <span className="text-sm">All</span>
                    </label>
                    <label className="flex items-center cursor-pointer text-gray-700 hover:text-pink-400">
                    <input
                        type="radio"
                        name="availability"
                        value="true"
                        checked={selectedAvailability === "true"}
                        onChange={(e) => setSelectedAvailability(e.target.value)}
                        className="mr-2"
                    />
                    <span className="text-sm">Available</span>
                    </label>
                    <label className="flex items-center cursor-pointer text-gray-700 hover:text-pink-400">
                    <input
                        type="radio"
                        name="availability"
                        value="false"
                        checked={selectedAvailability === "false"}
                        onChange={(e) => setSelectedAvailability(e.target.value)}
                        className="mr-2"
                    />
                    <span className="text-sm">Unavailable</span>
                    </label>
                </div>
                </div>


            </div>
          </aside>
    );
};

export default Filter;