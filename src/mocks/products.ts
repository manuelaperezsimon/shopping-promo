import { Product } from "@/interfaces/product";

export const mockProducts: Product[] = [
  {
    code: "12345",
    name: "Test Product 1",
    supplier: "Test Supplier 1",
    dosageForm: "Tablet",
    rating: 4.5,
    reviewCount: 10,
    packagingSize: "10 Tablets",
    defaultSaleCondition: "In Stock",
    baseprice: "$10.00 per tablet",
    url: "test-product-url-1",
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
  },
  {
    code: "12346",
    name: "Test Product 2",
    supplier: "Test Supplier 2",
    dosageForm: "Capsule",
    rating: 3.8,
    reviewCount: 5,
    packagingSize: "20 Capsules",
    defaultSaleCondition: "Out of Stock",
    baseprice: "$8.00 per capsule",
    url: "test-product-url-2",
    available: false,
    stock: 0,
    categories: [{ id: "2", name: "Category 2" }],
    saleConditions: {
      default: [{ code: "default", packagingSize: "20 Capsules" }],
    },
    prices: {
      salesPrice: {
        value: 160,
        formattedValue: "$160.00",
      },
      recommendedRetailPrice: {
        value: 200,
        formattedValue: "$200.00",
      },
      savings: {
        value: 40,
        formattedValue: "$40.00",
      },
      savingsPercentageFormatted: "20%",
    },
    images: [
      {
        id: 2,
        versionNumber: 1,
        meta: { tags: ["side"] },
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
  },
];
