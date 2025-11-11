import defaultImage from "../../assets/images/default.jpg";

const BookImage = ({ images, name }) => {
  const img = images?.length > 0 ? images[0].image : defaultImage;

  return (
    <div className="w-full flex justify-center">
      <img
        src={img}
        alt={name}
        className="shadow-lg max-h-[600px] object-contain bg-white p-4"
      />
    </div>
  );
};

export default BookImage;
