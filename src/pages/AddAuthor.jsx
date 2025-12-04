import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import authApiClient from '../services/auth-api-client';
import bg from '../assets/images/0.jpeg';

const AddAuthor = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [authors, setAuthors] = useState([]);

  const fetchAuthors = async () => {
    try {
      const res = await authApiClient.get('/authors/');
      setAuthors(res.data);
    } catch (err) {
      console.error('Error fetching authors', err);
    }
  };

  useEffect(() => {
      fetchAuthors();
    }, []);

  const onSubmit = async (data) => {
    console.log(data)
    try {
      setLoading(true);
      const payload = {
        name: data.name,
        biography: data.bio,
      };
      await authApiClient.post('/authors/', payload);
      await fetchAuthors();
      alert('Author added successfully');
    } catch (err) {
      console.error('Error adding author', err);
      alert('Failed to add author');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await authApiClient.delete(`/authors/${id}/`);
      setAuthors(authors.filter(c => c.id !== id));
      alert("Author deleted successfully");
    } catch (err) {
      console.error('Delete failed', err);
      alert('Failed to delete');
    }
  };

  return (
    <section className='bg-rose-100 py-20' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
      <div className="max-w-xl mx-auto mt-12 p-8 shadow-md rounded-lg bg-white/30 backdrop-blur-xl">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Add New Author</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Author Name</label>
            <input
              {...register('name', { required: true })}
              className="input input-bordered w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Author Name"
            />
            {errors.name && <p className="text-red-600 text-xs mt-1">This field is required</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Biography</label>
            <textarea
              {...register('bio')}
              rows={4}
              className="textarea textarea-bordered w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Short biography"
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning text-black opacity-60 w-full py-3 text-lg font-semibold"
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Author'}
          </button>
        </form>

        <h3 className="text-2xl text-center font-semibold mt-10 mb-4 text-gray-800">Existing Authors</h3>

        {authors.length === 0 ? (
          <p className="text-gray-700">No authors found.</p>
        ) : (
          <ul className="space-y-3">
            {authors.map(aut => (
              <li key={aut.id} className="flex justify-between items-center bg-white/50 p-3 rounded-md shadow">
                <span className="text-gray-800 font-medium">{aut.name}</span>
                <button
                  onClick={() => handleDelete(aut.id)}
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

export default AddAuthor;
