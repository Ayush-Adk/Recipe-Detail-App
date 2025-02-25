
import { create } from 'zustand';
import { Recipe } from '@/types/recipe';
import { mockRecipes } from './mockData';
import { searchRecipes } from '@/services/recipeApi';

interface RecipeStore {
  recipes: Recipe[];
  searchQuery: string;
  filteredRecipes: Recipe[];
  isLoading: boolean;
  error: string | null;
  setSearchQuery: (query: string) => Promise<void>;
  addRecipe: (recipe: Omit<Recipe, "id" | "createdAt">) => void;
  removeRecipe: (id: string) => void;
  getRecipeById: (id: string) => Recipe | undefined;
}

export const useRecipeStore = create<RecipeStore>((set, get) => ({
  recipes: mockRecipes,
  searchQuery: '',
  filteredRecipes: mockRecipes,
  isLoading: false,
  error: null,
  
  setSearchQuery: async (query: string) => {
    set({ searchQuery: query, isLoading: true, error: null });
    
    try {
      if (query.trim().length > 0) {
        const apiRecipes = await searchRecipes(query);
        set({ 
          filteredRecipes: apiRecipes,
          isLoading: false
        });
      } else {
        set({ 
          filteredRecipes: get().recipes,
          isLoading: false
        });
      }
    } catch (error) {
      set({ 
        error: "Failed to fetch recipes",
        isLoading: false,
        filteredRecipes: get().recipes
      });
    }
  },

  addRecipe: (recipeData) => {
    const newRecipe: Recipe = {
      ...recipeData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    set(state => ({
      recipes: [newRecipe, ...state.recipes],
      filteredRecipes: [newRecipe, ...state.recipes],
    }));
  },

  removeRecipe: (id: string) => {
    set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== id),
      filteredRecipes: state.filteredRecipes.filter(recipe => recipe.id !== id),
    }));
  },

  getRecipeById: (id: string) => {
    return get().recipes.find(recipe => recipe.id === id);
  },
}));
