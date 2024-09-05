import { Product } from "../interfaces/product";
import { CartItem } from "../reducers/shoppingReducer";

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

export const mockCart: { items: CartItem[] } = {
  items: [
    {
      code: "123",
      name: "Test Product",
      supplier: "Sample Supplier",
      dosageForm: "Tablet",
      rating: 4.5,
      reviewCount: 100,
      packagingSize: "30 Tablets",
      defaultSaleCondition: "Retail",
      baseprice: "10.00",
      url: "http://example.com/product",
      available: true,
      stock: 5,
      categories: [
        { id: "1", name: "Category 1" },
        { id: "2", name: "Category 2" },
      ],
      saleConditions: {
        condition1: [{ code: "cond1", packagingSize: "30 Tablets" }],
        condition2: [{ code: "cond2", packagingSize: "60 Tablets" }],
      },
      prices: {
        salesPrice: {
          value: 10.0,
          formattedValue: "$10.00",
        },
        recommendedRetailPrice: {
          value: 15.0,
          formattedValue: "$15.00",
        },
        savings: {
          value: 5.0,
          formattedValue: "$5.00",
        },
        savingsPercentageFormatted: "33%",
      },
      images: [
        {
          id: 1,
          versionNumber: 1,
          meta: { tags: ["tag1", "tag2"] },
          variants: {
            "100": {
              formats: {
                avif: {
                  resolutions: {
                    "1x": { url: "http://example.com/image.avif" },
                    "2x": { url: "http://example.com/image@2x.avif" },
                  },
                },
                jpg: {
                  resolutions: {
                    "1x": { url: "http://example.com/image.jpg" },
                    "2x": { url: "http://example.com/image@2x.jpg" },
                  },
                },
                webp: {
                  resolutions: {
                    "1x": { url: "http://example.com/image.webp" },
                    "2x": { url: "http://example.com/image@2x.webp" },
                  },
                },
              },
              width: 100,
              height: 100,
            },
          },
        },
      ],
      quantity: 2,
    },
  ],
};
