import { star } from "@/assets/icons";

const ReviewCard = ({ imageURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imageURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          className="text-xl font-montserrat text-state-gray"
          src={star}
          alt="rating icon"
          width={24}
          height={24}
        />
        ({rating})
      </div>
      <p className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </p>
    </div>
  );
};

export default ReviewCard;
