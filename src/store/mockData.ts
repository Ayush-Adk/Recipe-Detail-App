
import { Recipe } from '@/types/recipe';

export const mockRecipes: Recipe[] = [
  {
    id: "1",
    title: "Classic Margherita Pizza",
    description: "A traditional Italian pizza with fresh basil, mozzarella, and tomato sauce",
    ingredients: ["Pizza dough", "San Marzano tomatoes", "Fresh mozzarella", "Fresh basil", "Extra virgin olive oil", "Salt"],
    instructions: ["Preheat oven to 500°F", "Roll out the pizza dough", "Spread tomato sauce", "Add torn mozzarella pieces", "Bake for 12-15 minutes", "Add fresh basil and olive oil"],
    time: "45 mins",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop&q=60",
    author: "Chef Mario",
    createdAt: "2024-01-01T12:00:00Z",
    category: "Italian",
    tags: ["pizza", "vegetarian", "italian"]
  },
  {
    id: "2",
    title: "Spaghetti Carbonara",
    description: "Creamy Italian pasta dish with pancetta and egg",
    ingredients: ["Spaghetti", "Eggs", "Pecorino Romano", "Pancetta", "Black pepper", "Salt"],
    instructions: ["Cook pasta", "Fry pancetta", "Mix eggs and cheese", "Combine all ingredients", "Add pasta water if needed", "Serve immediately"],
    time: "30 mins",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format&fit=crop&q=60",
    author: "Chef Laura",
    createdAt: "2024-01-02T12:00:00Z",
    category: "Italian",
    tags: ["pasta", "italian", "quick"]
  },
  {
    id: "3",
    title: "Chicken Tikka Masala",
    description: "Creamy and spicy Indian curry with tender chicken pieces",
    ingredients: ["Chicken breast", "Yogurt", "Tomato sauce", "Heavy cream", "Garam masala", "Various spices"],
    instructions: ["Marinate chicken", "Grill chicken pieces", "Prepare sauce", "Combine chicken and sauce", "Simmer", "Serve with rice"],
    time: "1 hour",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=60",
    author: "Chef Raj",
    createdAt: "2024-01-03T12:00:00Z",
    category: "Indian",
    tags: ["curry", "indian", "spicy"]
  },
  {
    id: "4",
    title: "Beef Burger",
    description: "Classic American burger with all the trimmings",
    ingredients: ["Ground beef", "Burger buns", "Lettuce", "Tomato", "Onion", "Cheese"],
    instructions: ["Form patties", "Season well", "Grill to preference", "Toast buns", "Assemble burger", "Serve hot"],
    time: "25 mins",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60",
    author: "Chef John",
    createdAt: "2024-01-04T12:00:00Z",
    category: "American",
    tags: ["burger", "american", "beef"]
  },
  {
    id: "5",
    title: "Vegetable Stir Fry",
    description: "Quick and healthy Asian-style vegetable medley",
    ingredients: ["Mixed vegetables", "Soy sauce", "Ginger", "Garlic", "Sesame oil", "Rice"],
    instructions: ["Prep vegetables", "Heat wok", "Stir fry vegetables", "Add sauce", "Cook rice", "Serve hot"],
    time: "20 mins",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60",
    author: "Chef Lee",
    createdAt: "2024-01-05T12:00:00Z",
    category: "Asian",
    tags: ["vegetarian", "asian", "quick"]
  },
  {
    id: "6",
    title: "French Onion Soup",
    description: "Classic French soup with caramelized onions and melted cheese",
    ingredients: ["Onions", "Beef broth", "White wine", "Gruyere cheese", "Bread", "Butter"],
    instructions: ["Caramelize onions", "Add wine and broth", "Simmer", "Add bread and cheese", "Broil", "Serve hot"],
    time: "1.5 hours",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop&q=60",
    author: "Chef Pierre",
    createdAt: "2024-01-06T12:00:00Z",
    category: "French",
    tags: ["soup", "french", "winter"]
  },
  {
    id: "7",
    title: "Sushi Rolls",
    description: "Fresh and delicious California rolls",
    ingredients: ["Sushi rice", "Nori", "Crab meat", "Avocado", "Cucumber", "Rice vinegar"],
    instructions: ["Prepare rice", "Layer nori and rice", "Add fillings", "Roll tightly", "Cut rolls", "Serve with soy sauce"],
    time: "45 mins",
    servings: 4,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60",
    author: "Chef Tanaka",
    createdAt: "2024-01-07T12:00:00Z",
    category: "Japanese",
    tags: ["sushi", "japanese", "seafood"]
  },
  {
    id: "8",
    title: "Greek Salad",
    description: "Fresh and healthy Mediterranean salad",
    ingredients: ["Cucumber", "Tomatoes", "Red onion", "Feta cheese", "Olives", "Olive oil"],
    instructions: ["Chop vegetables", "Mix ingredients", "Add feta and olives", "Dress with olive oil", "Season", "Serve fresh"],
    time: "15 mins",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop&q=60",
    author: "Chef Maria",
    createdAt: "2024-01-08T12:00:00Z",
    category: "Mediterranean",
    tags: ["salad", "greek", "healthy"]
  },
  {
    id: "9",
    title: "Chocolate Cake",
    description: "Rich and moist chocolate cake with ganache",
    ingredients: ["Flour", "Cocoa powder", "Sugar", "Eggs", "Butter", "Dark chocolate"],
    instructions: ["Mix dry ingredients", "Add wet ingredients", "Bake", "Make ganache", "Frost cake", "Serve"],
    time: "1 hour",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=60",
    author: "Chef Sarah",
    createdAt: "2024-01-09T12:00:00Z",
    category: "Desserts",
    tags: ["cake", "dessert", "chocolate"]
  },
  {
    id: "10",
    title: "Pad Thai",
    description: "Classic Thai stir-fried rice noodles",
    ingredients: ["Rice noodles", "Shrimp", "Tofu", "Bean sprouts", "Peanuts", "Tamarind sauce"],
    instructions: ["Soak noodles", "Stir fry proteins", "Add noodles", "Add sauce", "Add vegetables", "Garnish and serve"],
    time: "30 mins",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&auto=format&fit=crop&q=60",
    author: "Chef Supaporn",
    createdAt: "2024-01-10T12:00:00Z",
    category: "Thai",
    tags: ["thai", "noodles", "seafood"]
  }
];
