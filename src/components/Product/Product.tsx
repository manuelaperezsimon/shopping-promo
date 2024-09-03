import React from "react";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import Button from "../Button/Button";
import { Product } from "@/interfaces/product";

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps): JSX.Element => {
  const {
    name,
    prices,
    baseprice,
    images,
    packagingSize,
    dosageForm,
    supplier,
    reviewCount,
  } = product;

  const imageUrl =
    images[0]?.variants["100"].formats.webp.resolutions["2x"].url;

  const maxStars = 5;

  const clampedReviewCount = Math.max(0, Math.min(reviewCount, 10));

  const fullStars = Math.floor(clampedReviewCount / 2);
  const halfStars = clampedReviewCount % 2;
  const emptyStars = Math.max(0, maxStars - fullStars - halfStars);

  return (
    <div className="bg-white shadow-md rounded-lg flex flex-row md:flex-col p-2 gap-2 relative border-b border-gray-200 mb-4 last:mb-0">
      <div className="relative w-1/3 md:w-full">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-40 object-cover rounded-lg"
        />
        <CiHeart
          data-testid="heart-icon"
          className="absolute top-2 right-2 text-gray-400 w-8 h-8 cursor-pointer hidden md:block"
        />
        <Button
          Icon={FiShoppingCart}
          bgColor="bg-[#00463D]"
          hoverBgColor="bg-[#003D2C]"
          textColor="white"
          border="border border-transparent"
          text="+"
          testId="shop-icon"
          textSm
          className="absolute bottom-2 md:static md:bottom-auto md:right-auto mt-8"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between p-2">
        <div className="flex gap-2 items-start md:hidden">
          <h3 className="text-xl font-semibold flex-1">{name}</h3>
          <CiHeart
            data-testid="heart-icon"
            className="text-gray-400 w-8 h-8 cursor-pointer"
          />
        </div>
        <h3 className="hidden md:block text-xl font-semibold mb-2">{name}</h3>
        <div className="flex gap-2 text-slate-600 mb-2">
          <p>{packagingSize}</p> • <p>{dosageForm}</p>
        </div>
        <p className="text-slate-600 mb-2">{supplier}</p>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(fullStars)].map((_, index) => (
            <FaStar
              key={`full-${index}`}
              className="text-yellow-300 w-5 h-5"
              data-testid="full-star"
            />
          ))}
          {halfStars > 0 && (
            <FaStar
              key="half"
              className="text-yellow-300 w-5 h-5"
              style={{ clipPath: "inset(0 50% 0 0)" }}
              data-testid="half-star"
            />
          )}
          {[...Array(emptyStars)].map((_, index) => (
            <FaStar
              key={`empty-${index}`}
              className="text-gray-300 w-5 h-5"
              data-testid="empty-star"
            />
          ))}
          <p className="text-gray-800 ml-2">({reviewCount})</p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <p className="text-gray-800 font-poppins text-lg leading-7 text-center font-bold">
            {prices.salesPrice.formattedValue}
          </p>
          <p className="text-sm text-slate-500 line-through font-poppins text-lg text-center font-light">
            {prices.recommendedRetailPrice.formattedValue}
          </p>
        </div>
        <p className="text-slate-600 font-poppins text-lg leading-7 font-semibold mt-6">
          {baseprice}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
