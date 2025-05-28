const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div>
      <div
        className={`border-2 rounded-xl ${
          bigShoeImg === imgURL.bigShoe
            ? "border-2 border-coral-red"
            : "border-transparent"
        }`}
        onClick={handleClick}
      >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
          <img
            src={imgURL.thumbnail}
            alt="shoe colletion"
            width={127}
            height={103.34}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
