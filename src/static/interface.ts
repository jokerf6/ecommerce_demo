export interface RESPONSE {
  data: unknown;
  status: number;
}

export interface CategoryType {
  id: number;
  nameAr: string;
  nameEn: string;
  image: string;
  isActive: boolean;
  isFeatured: boolean;
  parentId: number;
  name: string; // Assuming this is a required field
  Children?: CategoryType[]; // Optional property for nested categories
}
