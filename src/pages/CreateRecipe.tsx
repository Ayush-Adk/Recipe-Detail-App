import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "@/store/recipeStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Trash2 } from "lucide-react";
import { toast } from "sonner";
import type { RecipeFormData } from "@/types/recipe";
import "./CreateRecipe.css"; // Import the new CSS file

const CreateRecipe = () => {
  const navigate = useNavigate();
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [formData, setFormData] = useState<RecipeFormData>({
    title: "",
    description: "",
    ingredients: [""],
    instructions: [""],
    time: "",
    servings: 1,
    difficulty: "Easy",
    image: "",
    category: "",
    tags: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      toast.error("Please fill in all required fields");
      return;
    }
    addRecipe({ ...formData, author: "Guest User" });
    toast.success("Recipe created successfully!");
    navigate("/");
  };

  const handleIngredientsChange = (index: number, value: string) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index] = value;
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const handleInstructionsChange = (index: number, value: string) => {
    const newInstructions = [...formData.instructions];
    newInstructions[index] = value;
    setFormData({ ...formData, instructions: newInstructions });
  };

  const removeIngredient = (index: number) => {
    if (formData.ingredients.length > 1) {
      setFormData({
        ...formData,
        ingredients: formData.ingredients.filter((_, i) => i !== index),
      });
    }
  };

  const removeInstruction = (index: number) => {
    if (formData.instructions.length > 1) {
      setFormData({
        ...formData,
        instructions: formData.instructions.filter((_, i) => i !== index),
      });
    }
  };

  return (
    <div className="create-recipe min-h-screen pb-12">
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="back-btn m-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <div className="form-container max-w-2xl mx-auto px-4">
        <h1 className="form-title text-3xl font-bold mb-8">Create New Recipe</h1>

        <form onSubmit={handleSubmit} className="form-content space-y-6">
          <div className="form-group space-y-2 animate-zoom-in">
            <label className="form-label text-sm font-medium">Title</label>
            <Input
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="form-input"
            />
          </div>

          <div className="form-group space-y-2 animate-zoom-in" style={{ animationDelay: "0.1s" }}>
            <label className="form-label text-sm font-medium">Description</label>
            <Textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="form-textarea"
            />
          </div>

          <div className="form-group space-y-2 animate-zoom-in" style={{ animationDelay: "0.2s" }}>
            <label className="form-label text-sm font-medium">Image URL</label>
            <Input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://example.com/image.jpg"
              className="form-input"
            />
          </div>

          <div className="form-grid grid grid-cols-1 md:grid-cols-3 gap-4 animate-zoom-in" style={{ animationDelay: "0.3s" }}>
            <div className="form-group space-y-2">
              <label className="form-label text-sm font-medium">Cooking Time</label>
              <Input
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                placeholder="e.g., 30 mins"
                className="form-input"
              />
            </div>
            <div className="form-group space-y-2">
              <label className="form-label text-sm font-medium">Servings</label>
              <Input
                type="number"
                required
                min="1"
                value={formData.servings}
                onChange={(e) => setFormData({ ...formData, servings: parseInt(e.target.value) })}
                className="form-input"
              />
            </div>
            <div className="form-group space-y-2">
              <label className="form-label text-sm font-medium">Difficulty</label>
              <select
                className="form-select w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                value={formData.difficulty}
                onChange={(e) => setFormData({ ...formData, difficulty: e.target.value as "Easy" | "Medium" | "Hard" })}
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
          </div>

          <div className="form-group space-y-4 animate-zoom-in" style={{ animationDelay: "0.4s" }}>
            <label className="form-label text-sm font-medium">Ingredients</label>
            {formData.ingredients.map((ingredient, index) => (
              <div key={index} className="input-group flex gap-2 items-center">
                <Input
                  value={ingredient}
                  onChange={(e) => handleIngredientsChange(index, e.target.value)}
                  placeholder={`Ingredient ${index + 1}`}
                  className="form-input"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeIngredient(index)}
                  disabled={formData.ingredients.length === 1}
                  className="btn-delete"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                {index === formData.ingredients.length - 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setFormData({ ...formData, ingredients: [...formData.ingredients, ""] })}
                    className="btn-add"
                  >
                    +
                  </Button>
                )}
              </div>
            ))}
          </div>

          <div className="form-group space-y-4 animate-zoom-in" style={{ animationDelay: "0.5s" }}>
            <label className="form-label text-sm font-medium">Instructions</label>
            {formData.instructions.map((instruction, index) => (
              <div key={index} className="input-group flex gap-2 items-center">
                <Textarea
                  value={instruction}
                  onChange={(e) => handleInstructionsChange(index, e.target.value)}
                  placeholder={`Step ${index + 1}`}
                  className="form-textarea"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeInstruction(index)}
                  disabled={formData.instructions.length === 1}
                  className="btn-delete"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                {index === formData.instructions.length - 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setFormData({ ...formData, instructions: [...formData.instructions, ""] })}
                    className="btn-add"
                  >
                    +
                  </Button>
                )}
              </div>
            ))}
          </div>

          <div className="form-group space-y-2 animate-zoom-in" style={{ animationDelay: "0.6s" }}>
            <label className="form-label text-sm font-medium">Tags (comma-separated)</label>
            <Input
              value={formData.tags.join(", ")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  tags: e.target.value.split(",").map((tag) => tag.trim()).filter(Boolean),
                })
              }
              placeholder="e.g., vegetarian, italian, quick"
              className="form-input"
            />
          </div>

          <Button type="submit" className="btn-submit w-full">Create Recipe</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipe;