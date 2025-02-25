import { useState } from "react";
import { useRecipeStore } from "@/store/recipeStore";
import { Button } from "@/components/ui/button";
import RecipeCard from "@/components/RecipeCard";
import SearchBar from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import "./ExploreRecipes.css"; // Already imported

const ExploreRecipes = () => {
  const navigate = useNavigate();
  const { filteredRecipes, isLoading, error } = useRecipeStore();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(filteredRecipes.flatMap((recipe) => recipe.tags))
  );

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredByDifficultyAndTags = filteredRecipes.filter((recipe) => {
    const matchesDifficulty = !selectedDifficulty || recipe.difficulty === selectedDifficulty;
    const matchesTags =
      selectedTags.length === 0 || selectedTags.every((tag) => recipe.tags.includes(tag));
    return matchesDifficulty && matchesTags;
  });

  return (
    <div className="explore-page min-h-screen pb-12">
      <div className="hero-section bg-accent/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="hero-title text-4xl font-bold mb-6">Explore Recipes</h1>
          <SearchBar />
        </div>
      </div>

      <div className="content-section max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          {/* Filters */}
          <div className="filters space-y-4">
            <div className="filter-group animate-slide-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="filter-title text-lg font-medium mb-2">Difficulty</h3>
              <div className="filter-buttons flex gap-2">
                {["Easy", "Medium", "Hard"].map((difficulty) => (
                  <Button
                    key={difficulty}
                    variant={selectedDifficulty === difficulty ? "default" : "outline"}
                    onClick={() =>
                      setSelectedDifficulty(
                        selectedDifficulty === difficulty ? null : difficulty
                      )
                    }
                    className={`difficulty-btn ${
                      selectedDifficulty === difficulty ? "active" : ""
                    }`}
                  >
                    {difficulty}
                  </Button>
                ))}
              </div>
            </div>

            <div className="filter-group animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="filter-title text-lg font-medium mb-2">Tags</h3>
              <div className="tag-cloud flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className={`tag-item cursor-pointer ${
                      selectedTags.includes(tag) ? "active" : ""
                    }`}
                    onClick={() =>
                      setSelectedTags(
                        selectedTags.includes(tag)
                          ? selectedTags.filter((t) => t !== tag)
                          : [...selectedTags, tag]
                      )
                    }
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="results animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {isLoading ? (
              <div className="loader-container flex items-center justify-center min-h-[200px]">
                <Loader2 className="loader-icon h-8 w-8 animate-spin" />
              </div>
            ) : error ? (
              <div className="error-message text-center text-red-500">{error}</div>
            ) : (
              <>
                <h2 className="results-title text-2xl font-semibold mb-6">
                  {filteredByDifficultyAndTags.length} Recipes Found
                </h2>
                <div className="recipe-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredByDifficultyAndTags.map((recipe) => (
                    <div
                      key={recipe.id}
                      onClick={() => navigate(`/recipe/${recipe.id}`)}
                      className="recipe-card-wrapper cursor-pointer animate-pop-in"
                    >
                      <RecipeCard
                        title={recipe.title}
                        description={recipe.description}
                        time={recipe.time}
                        difficulty={recipe.difficulty}
                        image={recipe.image}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreRecipes;