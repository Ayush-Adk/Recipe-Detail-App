import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "@/store/recipeStore";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Clock,
  Users,
  ChefHat,
  Heart,
  Share2,
  Bookmark,
  MessageSquare,
  Star,
  PencilLine,
  Utensils,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import "./RecipeDetail.css"; // Import the new CSS file

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) => state.getRecipeById(id!));
  const [selectedImage, setSelectedImage] = useState(0);
  const [note, setNote] = useState(recipe?.notes || "");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-2xl font-bold">Recipe not found</h1>
          <Button onClick={() => navigate("/")} className="btn-primary">
            Go back home
          </Button>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    toast.success("Recipe saved to your collection!");
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.title,
          text: recipe.description,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const handleSaveNote = () => {
    toast.success("Note saved successfully!");
  };

  const handleSubmitReview = () => {
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }
    toast.success("Review submitted successfully!");
    setRating(0);
    setReview("");
  };

  const images = [recipe.image, ...(recipe.additionalImages || [])].filter(Boolean);

  return (
    <div className="recipe-detail min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="back-btn mt-8 mb-4 animate-slide-in"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <div className="recipe-hero grid md:grid-cols-2 gap-8 mb-12">
          <div className="image-section space-y-4">
            <div className="main-image aspect-video rounded-2xl overflow-hidden shadow-2xl animate-pop-in">
              <img
                src={images[selectedImage]}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            </div>
            {images.length > 1 && (
              <div className="thumbnail-gallery flex gap-2 overflow-x-auto pb-2">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${recipe.title} view ${index + 1}`}
                    className={`thumbnail h-20 w-20 object-cover rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedImage === index ? "ring-4 ring-primary" : "opacity-70 hover:opacity-100"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="info-section space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="header flex justify-between items-start">
              <h1 className="recipe-title text-4xl font-bold mb-2">{recipe.title}</h1>
              <div className="action-buttons flex gap-2">
                <Button variant="outline" size="icon" onClick={handleSave} className="btn-icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleShare} className="btn-icon">
                  <Share2 className="h-5 w-5" />
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="icon" className="btn-icon">
                      <PencilLine className="h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="dialog-content">
                    <DialogHeader>
                      <DialogTitle>Add Notes</DialogTitle>
                      <DialogDescription>
                        Add personal notes about this recipe
                      </DialogDescription>
                    </DialogHeader>
                    <Textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Add your personal notes here..."
                      className="min-h-[200px]"
                    />
                    <Button onClick={handleSaveNote} className="btn-primary">Save Notes</Button>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <p className="recipe-desc text-lg text-muted-foreground">{recipe.description}</p>

            <div className="tags flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="tag capitalize animate-pop-in">
                  {tag}
                </Badge>
              ))}
            </div>

            <Card className="stats-card grid grid-cols-4 p-4 bg-accent/5">
              <div className="stat-item flex flex-col items-center gap-2 p-4">
                <Clock className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium">{recipe.time}</span>
                <span className="text-xs text-muted-foreground">Cook Time</span>
              </div>
              <div className="stat-item flex flex-col items-center gap-2 p-4 border-x">
                <Utensils className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium">15 mins</span> {/* Placeholder */}
                <span className="text-xs text-muted-foreground">Prep Time</span>
              </div>
              <div className="stat-item flex flex-col items-center gap-2 p-4 border-x">
                <Users className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium">{recipe.servings} servings</span>
                <span className="text-xs text-muted-foreground">Yield</span>
              </div>
              <div className="stat-item flex flex-col items-center gap-2 p-4">
                <ChefHat className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium">{recipe.difficulty}</span>
                <span className="text-xs text-muted-foreground">Difficulty</span>
              </div>
            </Card>

            <Card className="nutrition-card p-4 bg-accent/5">
              <h3 className="text-lg font-semibold mb-2">Nutrition (per serving)</h3>
              <p className="text-sm text-muted-foreground">
                Calories: 320kcal | Protein: 12g | Carbs: 45g | Fat: 10g {/* Placeholder */}
              </p>
            </Card>
          </div>
        </div>

        <div className="recipe-content grid md:grid-cols-2 gap-12 mb-12">
          <div className="ingredients-section space-y-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <h2 className="section-title text-2xl font-semibold mb-4 flex items-center gap-2">
              <span>Ingredients</span>
              <Badge variant="outline">{recipe.ingredients.length}</Badge>
            </h2>
            <ul className="ingredients-list space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item flex items-start gap-3 animate-fade-in">
                  <span className="bullet w-2 h-2 rounded-full bg-accent mt-2" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="instructions-section space-y-6 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <h2 className="section-title text-2xl font-semibold mb-4">Instructions</h2>
            <ol className="instructions-list space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="instruction-item flex gap-4 animate-fade-in">
                  <span className="step-number flex-none w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <p className="flex-1">{instruction}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <Card className="reviews-section mt-8 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
            <div className="space-y-4">
              <div className="rating-stars flex gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <Button
                    key={value}
                    variant="ghost"
                    size="icon"
                    onClick={() => setRating(value)}
                    className="star-btn"
                  >
                    <Star
                      className={`h-6 w-6 ${
                        value <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                      }`}
                    />
                  </Button>
                ))}
              </div>
              <Textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Share your experience with this recipe..."
                className="review-input min-h-[100px]"
              />
              <Button onClick={handleSubmitReview} className="btn-primary">Submit Review</Button>
            </div>
          </div>
        </Card>

        <div className="footer mt-12 pt-6 border-t animate-fade-in">
          <p className="text-sm text-muted-foreground">
            Recipe by <span className="font-medium">{recipe.author}</span> • Published on{" "}
            {new Date(recipe.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;