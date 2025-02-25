
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Utensils } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RecipeCardProps {
  title: string;
  description: string;
  time: string;
  difficulty: string;
  image: string;
}

const RecipeCard = ({ title, description, time, difficulty, image }: RecipeCardProps) => {
  return (
    <Card className="recipe-card overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <Badge variant="secondary" className="ml-2">
            {difficulty}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-1">
          <Utensils className="h-4 w-4" />
          <span>View Recipe</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
