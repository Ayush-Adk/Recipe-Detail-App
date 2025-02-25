// Index.jsx
import { Button } from "@/components/ui/button";
import RecipeCard from "@/components/RecipeCard";
import SearchBar from "@/components/SearchBar";
import { ChefHat, PlusCircle, Settings, Heart } from "lucide-react";
import { useRecipeStore } from "@/store/recipeStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Index.css";

const Index = () => {
  const { filteredRecipes } = useRecipeStore();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState("grid"); // Added view toggle feature

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <ChefHat className="hero-icon" />
            <h1 className="hero-title">Flavor Fusion</h1>
            <p className="hero-subtitle">
              Mix, Create, and Savor Recipes Worldwide
            </p>
            <div className="hero-actions">
              <Button
                className="action-btn primary"
                onClick={() => navigate("/create")}
              >
                <PlusCircle className="btn-icon" /> Create Recipe
              </Button>
              <Button
                className="action-btn secondary"
                onClick={() => navigate("/explore")}
              >
                Discover
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <SearchBar placeholder="Search recipes, ingredients..." />
        <div className="action-buttons">
          <Button
            variant="outline"
            onClick={() => navigate("/favorites")}
            className="quick-btn"
          >
            <Heart className="btn-icon" /> Favorites
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("/settings")}
            className="quick-btn"
          >
            <Settings className="btn-icon" /> Settings
          </Button>
          <Button
            variant="outline"
            onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
            className="quick-btn"
          >
            {viewMode === "grid" ? "List View" : "Grid View"}
          </Button>
        </div>
      </section>

      {/* Recipe Showcase */}
      <section className="recipe-showcase">
        <div className="showcase-header">
          <h2 className="showcase-title">Recipe Spotlight</h2>
          <Button
            variant="link"
            onClick={() => navigate("/explore")}
            className="see-all"
          >
            See All
          </Button>
        </div>
        <div className={`recipe-display ${viewMode}`}>
          {filteredRecipes.slice(0, 6).map((recipe) => (
            <div
              key={recipe.id}
              className="recipe-item"
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            >
              <RecipeCard
                title={recipe.title}
                description={recipe.description}
                time={recipe.time}
                difficulty={recipe.difficulty}
                image={recipe.image}
                className="recipe-card"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;