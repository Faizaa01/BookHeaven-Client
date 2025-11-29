import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import ErrorAlert from "../../components/ErrorAlert";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePasswd";
import ProfileButtons from "./ProfileButtons";
import bg from "../../assets/images/5.jpg";

const SettingsPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user, updateUserProfile, changePassword, errorMsg } = useAuthContext();

  // Only initialize form after user is loaded
  const { register, handleSubmit, watch, reset, formState: { errors, isSubmitting } } = useForm();

  // Populate form when user data arrives
  useEffect(() => {
    if (user) {
      reset({
        username: user.username || "",
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        email: user.email || "",
        address: user.address || "",
        phone_number: user.phone_number || "",
      });
    }
  }, [user, reset]);

  const onSubmit = async (data) => {
    try {
      await updateUserProfile({
        username: data.username,
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.address,
        phone_number: data.phone_number,
      });

      if (data.current_password && data.new_password) {
        await changePassword({
          current_password: data.current_password,
          new_password: data.new_password,
        });
      }
      setIsEditing(false);
    } catch (err) {
      console.log(err.response?.data || err);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex justify-center items-start pt-24 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="card w-full max-w-2xl mx-auto shadow-xl mb-16">
        <div className="card-body bg-white/30 backdrop-blur-xl shadow-lg rounded-2xl p-8 border border-white/40">
          {errorMsg && <ErrorAlert error={errorMsg} />}
          <h2 className="card-title text-2xl mb-4 text-black flex justify-center">
            Profile Information
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <EditProfile register={register} errors={errors} isEditing={isEditing} />
            <ChangePassword errors={errors} register={register} isEditing={isEditing} watch={watch} />
            <ProfileButtons isEditing={isEditing} setIsEditing={setIsEditing} isSubmitting={isSubmitting} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
