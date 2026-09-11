import type { DishType } from "./dish-type";
import type { Ingredient } from "./ingredient";

export const DIFFICULTIES = ["easy", "medium", "hard"] as const;

export type Difficulty = (typeof DIFFICULTIES)[number];

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  easy: "Легко",
  medium: "Средне",
  hard: "Сложно",
};

export interface CookingStep {
  order: number;
  text: string;
  durationMinutes?: string;
  imageUrl?: string;
}

export interface Recipe {
  id: string;
  title: string;
  description?: string;
  dishType: DishType;
  difficulty?: Difficulty;
  prepTimeMinutes?: number;
  cookTimeMinutes?: number;
  servings?: number;
  ingredients: Ingredient[];
  steps: CookingStep[];
  imageUrl?: string;
  tags?: string[];
  tips?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export type RecipeSummary = Pick<
  Recipe,
  | "id"
  | "title"
  | "dishType"
  | "difficulty"
  | "prepTimeMinutes"
  | "cookTimeMinutes"
  | "servings"
  | "imageUrl"
>;

export type RecipeInput = Omit<Recipe, "id" | "createdAt" | "updatedAt">;

export type RecipeUpdate = Partial<RecipeInput> & Pick<Recipe, "id">;
