import { UNIT_LABELS, type Ingredient } from "@/types";

export function formatIngredient(ingredient: Ingredient): string {
  const parts: string[] = [];

  if (ingredient.amount !== undefined) {
    const unit = ingredient.unit ? UNIT_LABELS[ingredient.unit] : "";
    parts.push(`${ingredient.amount}${unit ? ` ${unit}` : ""}`);
  } else if (ingredient.unit) {
    parts.push(UNIT_LABELS[ingredient.unit]);
  }

  if (ingredient.note) {
    parts.push(`(${ingredient.note})`);
  }

  return parts.join(" ");
}
