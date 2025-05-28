import { star } from "@/assets/icons";
import { shoe4 } from "@/assets/images";

const PopularProductsCard = ({ imageURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col max-sm:w-full w-full justify-center max-sm:items-center">
      <img src={imageURL} className="w-[282px] h-[282px]" />
      <div>
        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="rating icon" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
          {price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductsCard;
