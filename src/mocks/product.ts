import { Product } from "@/interfaces/product";

export const mockProduct: Product = {
  code: "12345",
  name: "Test Product",
  supplier: "Test Supplier",
  dosageForm: "Tablet",
  rating: 4.5,
  reviewCount: 10,
  packagingSize: "10 Tablets",
  defaultSaleCondition: "In Stock",
  baseprice: "$10.00 per tablet",
  url: "test-product-url",
  available: true,
  stock: 50,
  categories: [{ id: "1", name: "Category 1" }],
  saleConditions: {
    default: [{ code: "default", packagingSize: "10 Tablets" }],
  },
  prices: {
    salesPrice: {
      value: 100,
      formattedValue: "$100.00",
    },
    recommendedRetailPrice: {
      value: 120,
      formattedValue: "$120.00",
    },
    savings: {
      value: 20,
      formattedValue: "$20.00",
    },
    savingsPercentageFormatted: "16%",
  },
  images: [
    {
      id: 1,
      versionNumber: 1,
      meta: { tags: ["front"] },
      variants: {
        "100": {
          formats: {
            webp: {
              resolutions: {
                "1x": { url: "test-image-url-1x.webp" },
                "2x": { url: "test-image-url-2x.webp" },
              },
            },
            jpg: {
              resolutions: {
                "1x": { url: "test-image-url-1x.jpg" },
                "2x": { url: "test-image-url-2x.jpg" },
              },
            },
            avif: {
              resolutions: {
                "1x": { url: "test-image-url-1x.avif" },
                "2x": { url: "test-image-url-2x.avif" },
              },
            },
          },
          width: 100,
          height: 100,
        },
      },
    },
  ],
};
