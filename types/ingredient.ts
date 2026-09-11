export const UNITS = [
  "g",
  "kg",
  "ml",
  "l",
  "pcs",
  "tbsp",
  "tsp",
  "cup",
  "pinch",
  "to_taste",
] as const;

export type Unit = (typeof UNITS)[number];

export const UNIT_LABELS: Record<Unit, string> = {
  g: "г",
  kg: "кг",
  ml: "мл",
  l: "л",
  pcs: "шт.",
  tbsp: "ст. л.",
  tsp: "ч. л.",
  cup: "стакан",
  pinch: "щепотка",
  to_taste: "по вкусу",
};

export interface Ingredient {
  id?: string;
  name: string;
  amount?: number;
  unit?: Unit;
  note?: string;
}
