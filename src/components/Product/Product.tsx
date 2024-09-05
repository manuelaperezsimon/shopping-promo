import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import Button from "../Button/Button";
import { Product } from "@/interfaces/product";
import { useCartContext } from "../../hooks/useCartContext";

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps): JSX.Element => {
  const { addToCart } = useCartContext();
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    name,
    prices,
    baseprice,
    images,
    packagingSize,
    dosageForm,
    supplier,
    reviewCount,
    stock,
    available,
  } = product;

  const imageUrl =
    images[0]?.variants["100"]?.formats?.webp?.resolutions["2x"].url;

  const maxStars = 5;
  const clampedReviewCount = Math.max(0, Math.min(reviewCount, 10));
  const fullStars = Math.floor(clampedReviewCount / 2);
  const halfStars = clampedReviewCount % 2;
  const emptyStars = Math.max(0, maxStars - fullStars - halfStars);

  const handleAddToCart = () => {
    if (stock > 0) {
      addToCart(product);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="bg-white shadow-md rounded-lg relative border border-gray-200 mb-4 flex flex-col h-full">
      <CiHeart
        data-testid="heart-icon"
        className={`absolute top-4 right-4 w-6 h-6 lg:w-8 lg:h-8 cursor-pointer z-10 ${
          isFavorite ? "text-pink-500" : "text-gray-400"
        }`}
        onClick={toggleFavorite}
      />

      <div className="relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-64 object-contain rounded-t-lg"
        />
      </div>

      <div className="flex flex-col p-4 flex-grow pb-16">
        {" "}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {name}
          </h3>

          <div className="flex gap-2 text-slate-600 text-sm mt-2">
            <p>{packagingSize}</p>
            <span>•</span>
            <p>{dosageForm}</p>
          </div>

          <p className="text-slate-600 text-sm mb-2">{supplier}</p>

          <div className="flex items-center gap-1 mt-2">
            {[...Array(fullStars)].map((_, index) => (
              <FaStar
                key={`full-${index}`}
                className="text-yellow-300 w-4 h-4"
                data-testid="full-star"
              />
            ))}
            {halfStars > 0 && (
              <FaStar
                key="half"
                className="text-yellow-300 w-4 h-4"
                style={{ clipPath: "inset(0 50% 0 0)" }}
                data-testid="half-star"
              />
            )}
            {[...Array(emptyStars)].map((_, index) => (
              <FaStar
                key={`empty-${index}`}
                className="text-gray-300 w-4 h-4"
                data-testid="empty-star"
              />
            ))}
            <p className="text-gray-800 ml-2 text-sm">({reviewCount})</p>
          </div>

          <div className="flex items-center gap-2 text-sm mt-2">
            <p className="text-lg font-semibold text-gray-900">
              {prices.salesPrice.formattedValue}
            </p>
            {prices.recommendedRetailPrice && (
              <p className="text-gray-500 line-through">
                {prices.recommendedRetailPrice.formattedValue}
              </p>
            )}
          </div>

          <p className="text-gray-600 text-sm mt-1">{baseprice}</p>
        </div>
      </div>

      <div className="absolute bottom-4 right-4">
        <Button
          Icon={FiShoppingCart}
          bgColor="bg-[#00463D]"
          hoverBgColor="bg-[#003D2C]"
          textColor="white"
          border="border border-transparent"
          text="+"
          testId="shop-icon"
          className="w-full md:w-auto"
          actionOnClick={handleAddToCart}
          disabled={stock <= 0 || !available}
          iconColor="text-white"
        />
      </div>
    </div>
  );
};

export default ProductCard;
