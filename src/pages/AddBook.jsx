import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import apiClient from '../services/api-client';
import authApiClient from '../services/auth-api-client';
import bg from '../assets/images/0.jpeg';
import { useNavigate } from 'react-router';

const AddBook = () => {
    const{
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);
    const [bookId, setBookId] = useState(null);
    const [previewImages, setPreviewImages] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        apiClient.get("/categories").then((res) => setCategories(res.data));
        apiClient.get("/authors").then((res) => setAuthors(res.data));
    }, []);

    const handleBookAdd = async (data) => {
    try {
      const payload = {
        title: data.name,
        author_id: data.author,
        category_id: data.category,
        isbn: data.ISBN,
        availability_status: data.availability === "available",
      };
      const bookRes = await authApiClient.post("/books/", payload);
      setBookId(bookRes.data.id);
      alert("Book added successfully");

    } catch (error) {
      if (error.response) {
        console.error("Error data:", error.response.data);
      }
      console.error("Error adding book", error);
      alert("Failed to add book");
    }
  };


    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
        setPreviewImages(files.map((file) => URL.createObjectURL(file)));
    };

    const handleUpload = async() => {
        if(!images.length) return alert("Please select images to upload");
        setLoading(true);
        try{
            for (const image of images) {
            const formData = new FormData();
            formData.append("image", image);
            await authApiClient.post(`/books/${bookId}/images/`, formData);
            } 
            alert("Images uploaded successfully");
            setLoading(false);
            setImages([]);
            setPreviewImages([]);
            navigate(`/library/${bookId}`);
        } catch(error) {
            console.error("Error uploading images", error);
            setLoading(false);
        }
    }

    return (
    <section className='bg-rose-100 py-20' style={{backgroundImage: `url(${bg})`,backgroundSize: 'cover'}}>
    <div className="max-w-xl mx-auto mt-12 p-8 shadow-md rounded-lg bg-white/30 backdrop-blur-xl"
        >
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Add New Book</h2>
      {!bookId ? (
        <form onSubmit={handleSubmit(handleBookAdd)} className="space-y-10">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Book Name
            </label>
            <input
              {...register("name", { required: true })}
              className={`input input-bordered w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500`}
              placeholder="Book Name"
            />
            {errors.name && (
              <p className="text-red-600 text-xs mt-1">This field is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Author
            </label>
            <select
              {...register("author", { required: true })}
              className="select select-bordered w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select an author
              </option>
              {authors.map((auth) => (
                <option key={auth.id} value={auth.id}>
                  {auth.name}
                </option>
              ))}
            </select>
            {errors.author && (
              <p className="text-red-600 text-xs mt-1">This field is required</p>
            )}
          </div>

          
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              ISBN
            </label>
            <input
              type="number"
              {...register("ISBN", { required: true })}
              className={`input input-bordered w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500`}
              placeholder="ISBN"
            />
            {errors.stock && (
              <p className="text-red-600 text-xs mt-1">This field is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Category
            </label>
            <select
              {...register("category", { required: true })}
              className={`select select-bordered w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500`}
              defaultValue=""
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-600 text-xs mt-1">This field is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
                Availability Status
            </label>
            <select
                {...register("availability", { required: true })}
                className="select select-bordered w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                defaultValue="available"
            >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
            </select>
            {errors.availability && (
                <p className="text-red-600 text-xs mt-1">This field is required</p>
            )}
        </div>

        <button type="submit" className="btn btn-warning text-black opacity-60 w-full py-4 text-lg font-semibold transition-colors duration-200">
            Add Book
        </button>

        </form>
      ) : (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Upload Book Images
          </h3>
          <input
            type="file"
            multiple
            accept="image/*"
            className="file-input file-input-bordered w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            onChange={handleImageChange}
          />
          {previewImages.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {previewImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Preview ${idx + 1}`}
                  className="w-20 h-20 rounded-lg object-cover border border-gray-200"
                />
              ))}
            </div>
          )}

          <button onClick={handleUpload}
            className="btn btn-warning text-black opacity-60 w-full mt-6 py-3 text-lg font-semibold transition-colors duration-200"
            disabled={loading} >
            {loading ? "Uploading images..." : "Upload Images"}
          </button>
        </div>
      )}
    </div>
    </section>
  );
};

export default AddBook;