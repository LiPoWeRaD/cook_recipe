import { RecipeCard } from "@/components/recipe/RecipeCard";
import { chiliConCarne } from "@/constants/recipes/chili-con-carne";
import { HakhukaSMysnumFarhem } from "@/constants/recipes/HakhukaSMysnumFarhem";

export default function Home() {
  return (
  <main className="flex-1 bg-stone-50 px-2 py-6 sm:px-4 sm:py-10 dark:bg-stone-950">
    <div className="flex flex-wrap gap-16 justify-center">
      <RecipeCard recipe={chiliConCarne} />
      <RecipeCard recipe={HakhukaSMysnumFarhem} />
    </div>
  </main>
  );
}
