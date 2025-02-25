
export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  time: string;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  image: string;
  additionalImages?: string[];
  author: string;
  createdAt: string;
  category: string;
  tags: string[];
  url?: string;
  calories?: number;
  dietLabels?: string[];
  healthLabels?: string[];
  isSaved?: boolean;
  notes?: string;
  reviews?: {
    id: string;
    userId: string;
    rating: number;
    comment: string;
    createdAt: string;
  }[];
}

export type RecipeFormData = Omit<Recipe, "id" | "createdAt" | "author">;
