import {
  DIFFICULTY_LABELS,
  DISH_TYPE_LABELS,
  type Recipe,
} from "@/types";
import { formatIngredient } from "@/lib/format-ingredient";

interface RecipeCardProps {
  recipe: Recipe;
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-stone-100 px-3 py-2 dark:bg-stone-800">
      <p className="text-xs text-stone-500 dark:text-stone-400">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const totalTime =
    (recipe.prepTimeMinutes ?? 0) + (recipe.cookTimeMinutes ?? 0);

  return (
    <article className="w-full max-w-3xl overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-stone-700 dark:bg-stone-900">
      <header className="border-b border-stone-200 bg-gradient-to-br from-orange-50 to-amber-50 px-4 py-6 sm:px-6 sm:py-8 dark:border-stone-700 dark:from-stone-800 dark:to-stone-900">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800 dark:bg-orange-950 dark:text-orange-200">
            {DISH_TYPE_LABELS[recipe.dishType]}
          </span>
          {recipe.difficulty && (
            <span className="rounded-full bg-stone-200 px-3 py-1 text-xs font-medium text-stone-700 dark:bg-stone-700 dark:text-stone-200">
              {DIFFICULTY_LABELS[recipe.difficulty]}
            </span>
          )}
          {recipe.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600 dark:bg-stone-800 dark:text-stone-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl dark:text-stone-50">
            {recipe.title}
          </h1>
            {recipe.imageUrl && (
              <div className="w-full sm:w-1/3 h-48 object-fill rounded-xl shadow-md border border-stone-200 dark:border-stone-700">
                <img
                  src={`${process.env.__NEXT_ROUTER_BASE_PATH || ''}${recipe.imageUrl}`}
                  alt={recipe.title}
                  className="w-full h-48 object-fill rounded-xl shadow-md border border-stone-200 dark:border-stone-700"
                />
              </div>
            )}
        </div>

        {recipe.description && (
          <p className="mt-3 text-stone-600 dark:text-stone-300">
            {recipe.description}
          </p>
        )}

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {recipe.servings && (
            <MetaItem label="Порций" value={String(recipe.servings)} />
          )}
          {recipe.prepTimeMinutes !== undefined && (
            <MetaItem
              label="Подготовка"
              value={`${recipe.prepTimeMinutes} мин`}
            />
          )}
          {recipe.cookTimeMinutes !== undefined && (
            <MetaItem
              label="Готовка"
              value={`${recipe.cookTimeMinutes} мин`}
            />
          )}
          {totalTime > 0 && (
            <MetaItem label="Всего" value={`${totalTime} мин`} />
          )}
        </div>
      </header>

      <div className="space-y-8 px-4 py-6 sm:px-6 sm:py-8">
        <section className="min-h-[700px]">
          <h2 className="mb-4 text-xl font-semibold text-stone-900 dark:text-stone-50">
            Ингредиенты
            {recipe.servings && (
              <span className="mt-1 block text-base font-normal text-stone-500 sm:ml-2 sm:mt-0 sm:inline">
                на {recipe.servings} порции
              </span>
            )}
          </h2>
          <ul className="divide-y divide-stone-100 rounded-xl border border-stone-200 dark:divide-stone-800 dark:border-stone-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={`${ingredient.name}-${index}`}
                className="flex flex-col gap-0.5 px-3 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 sm:px-4"
              >
                <span className="min-w-0 text-stone-800 dark:text-stone-200">
                  {ingredient.name}
                </span>
                <span className="text-sm text-stone-500 sm:shrink-0 sm:text-right dark:text-stone-400">
                  {formatIngredient(ingredient)}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-stone-900 dark:text-stone-50">
            Приготовление
          </h2>
          <ol className="space-y-4">
            {recipe.steps.map((step) => (
              <li key={step.order} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                  {step.order}
                </span>
                <div className="pt-0.5">
                  <p className="text-stone-700 dark:text-stone-300">
                    {step.text}
                  </p>
                  {step.durationMinutes !== undefined && (
                    <p className="mt-1 text-xs text-stone-400">
                      ~{step.durationMinutes} мин
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {recipe.tips && recipe.tips.length > 0 && (
          <section className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-4 sm:px-5 dark:border-amber-900 dark:bg-amber-950/40">
            <h2 className="mb-3 text-lg font-semibold text-amber-900 dark:text-amber-200">
              Советы
            </h2>
            <ul className="space-y-2">
              {recipe.tips.map((tip, index) => (
                <li
                  key={index}
                  className="flex gap-2 text-sm text-amber-800 dark:text-amber-100"
                >
                  <span aria-hidden="true">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
