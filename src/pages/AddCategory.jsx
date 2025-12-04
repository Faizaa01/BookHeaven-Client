import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import authApiClient from '../services/auth-api-client';
import bg from '../assets/images/0.jpeg';

const AddCategory = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await authApiClient.get('/categories/');
      setCategories(res.data);
    } catch (err) {
      console.error('Error fetching categories', err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await authApiClient.post('/categories/', { name: data.name });
      await fetchCategories();
    } catch (err) {
      console.error('Error adding category', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await authApiClient.delete(`/categories/${id}/`);
      setCategories(categories.filter(c => c.id !== id));
      alert("Category deleted successfully");
    } catch (err) {
      console.error('Delete failed', err);
      alert('Failed to delete');
    }
  };

  return (
    <section className='bg-rose-100 py-20' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
      <div className="max-w-xl mx-auto p-8 shadow-md rounded-lg bg-white/30 backdrop-blur-xl">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Add New Category</h2>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Category Name</label>
            <input
              {...register('name', { required: true })}
              className="input input-bordered w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Category Name"
            />
            {errors.name && <p className="text-red-600 text-xs mt-1">This field is required</p>}
          </div>

          <button
            type="submit"
            className="btn btn-warning text-black opacity-60 w-full py-3 text-lg font-semibold"
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Category'}
          </button>
        </form>

        {/* CATEGORY LIST */}
        <h3 className="text-2xl text-center font-semibold mt-10 mb-4 text-gray-800">Existing Categories</h3>

        {categories.length === 0 ? (
          <p className="text-gray-700">No categories found.</p>
        ) : (
          <ul className="space-y-3">
            {categories.map(cat => (
              <li key={cat.id} className="flex justify-between items-center bg-white/50 p-3 rounded-md shadow">
                <span className="text-gray-800 font-medium">{cat.name}</span>
                <button
                  onClick={() => handleDelete(cat.id)}
                  className="px-3 py-1 bg-red-300 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default AddCategory;
