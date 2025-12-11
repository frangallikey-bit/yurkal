
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  description: string;
}

export enum AspectRatio {
  LANDSCAPE = '16:9',
  PORTRAIT = '9:16'
}

export interface VideoOperationStatus {
  done: boolean;
  videoUrl?: string;
  error?: string;
  message: string;
}
