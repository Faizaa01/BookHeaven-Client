const ProfileForm = ({ register, errors, isEditing }) => {
  return (
    <div className="space-y-4">
      <div className="form-control">
        <label className="label text-gray-800">Username</label>
        <input
          type="text"
          className="input input-bordered bg-gray-100 text-black w-full px-4 py-2"
          disabled={!isEditing}
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
        )}
      </div>

      <div className="form-control">
        <label className="label text-gray-800">First Name</label>
        <input
          type="text"
          className="input input-bordered bg-gray-100 text-black w-full px-4 py-2"
          disabled={!isEditing}
          {...register("first_name", { required: "First name is required" })}
        />
        {errors.first_name && (
          <p className="text-red-500 text-sm mt-1">{errors.first_name.message}</p>
        )}
      </div>

      <div className="form-control">
        <label className="label text-gray-800">Last Name</label>
        <input
          type="text"
          className="input input-bordered bg-gray-100 text-black w-full px-4 py-2"
          disabled={!isEditing}
          {...register("last_name")}
        />
      </div>

      <div className="form-control">
        <label className="label text-gray-800">Email Address</label>
        <input
          type="email"
          className="input input-bordered bg-gray-100 text-black w-full px-4 py-2"
          disabled
          {...register("email")}
        />
      </div>

      <div className="form-control">
        <label className="label text-gray-800">Address</label>
        <input
          type="text"
          className="input input-bordered bg-gray-100 text-black w-full px-4 py-2"
          disabled={!isEditing}
          {...register("address")}
        />
      </div>

      <div className="form-control">
        <label className="label text-gray-800">Phone Number</label>
        <input
          type="text"
          className="input input-bordered bg-gray-100 text-black w-full px-4 py-2"
          disabled={!isEditing}
          {...register("phone_number")}
        />
      </div>
    </div>
  );
};

export default ProfileForm;
