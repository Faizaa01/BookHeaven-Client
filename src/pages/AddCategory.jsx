import { useState } from 'react';
import { useForm } from 'react-hook-form';
import authApiClient from '../services/auth-api-client';
import bg from '../assets/images/0.jpeg';

const AddCategory = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const payload = { name: data.name };
      await authApiClient.post('/categories/', payload);
      alert('Category added successfully');
    } catch (err) {
      console.error('Error adding category', err);
      alert('Failed to add category');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='bg-rose-100 py-20' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
      <div className="max-w-xl mx-auto mt-12 p-8 shadow-md rounded-lg bg-white/30 backdrop-blur-xl">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Add New Category</h2>
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
            className="btn btn-secondary w-full py-3 text-lg font-semibold"
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Category'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddCategory;
