export interface Product {
  code: string;
  name: string;
  supplier: string;
  dosageForm: string;
  rating: number;
  reviewCount: number;
  packagingSize: string;
  defaultSaleCondition: string;
  baseprice: string;
  url: string;
  available: boolean;
  stock: number;
  categories: Category[];
  saleConditions: SaleConditions;
  prices: Prices;
  images: Image[];
}

interface Category {
  id: string;
  name: string;
}

interface SaleConditions {
  [key: string]: SaleCondition[];
}

interface SaleCondition {
  code: string;
  packagingSize: string;
}

interface Prices {
  salesPrice: PriceDetail;
  recommendedRetailPrice: PriceDetail;
  savings: PriceDetail;
  savingsPercentageFormatted: string;
}

interface PriceDetail {
  value: number;
  formattedValue: string;
}

interface Image {
  id: number;
  versionNumber: number;
  meta: ImageMeta;
  variants: ImageVariants;
}

interface ImageMeta {
  tags: string[];
}

interface ImageVariants {
  [key: string]: ImageVariantFormats;
}

interface ImageVariantFormats {
  formats: ImageFormats;
  width: number;
  height: number;
}

interface ImageFormats {
  avif?: ImageResolution;
  jpg?: ImageResolution;
  webp?: ImageResolution;
}

interface ImageResolution {
  resolutions: {
    [key: string]: {
      url: string;
    };
  };
}
