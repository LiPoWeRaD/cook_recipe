export const DISH_TYPES = [
  "soup",
  "main",
  "appetizer",
  "salad",
  "side",
  "sauce",
  "dessert",
  "breakfast",
  "snack",
  "drink",
  "baking",
] as const;

export type DishType = (typeof DISH_TYPES)[number];

export const DISH_TYPE_LABELS: Record<DishType, string> = {
  soup: "Суп",
  main: "Второе",
  appetizer: "Закуска",
  salad: "Салат",
  side: "Гарнир",
  sauce: "Соус",
  dessert: "Десерт",
  breakfast: "Завтрак",
  snack: "Перекус",
  drink: "Напиток",
  baking: "Выпечка",
};
