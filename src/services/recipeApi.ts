
export const searchRecipes = async (query: string) => {
  if (!query.trim()) {
    return [];
  }

  const APP_ID = "a499d80e"; 
  const APP_KEY = "74927461d876e00465c6a4f763def285";

  try {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2/search?q=${encodeURIComponent(query)}&app_id=${APP_ID}&app_key=${APP_KEY}&type=public&from=0&to=24`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch recipes. Please try again later.');
    }

    const data = await response.json();
    return data.hits.map((hit: any) => ({
      id: hit.recipe.uri.split('#recipe_')[1],
      title: hit.recipe.label,
      description: hit.recipe.cuisineType?.join(', ') || 'International Cuisine',
      ingredients: hit.recipe.ingredientLines,
      instructions: ["Visit the original recipe for detailed instructions"],
      time: hit.recipe.totalTime ? `${hit.recipe.totalTime} mins` : "45 mins",
      servings: hit.recipe.yield || 4,
      difficulty: "Medium",
      image: hit.recipe.image,
      additionalImages: hit.recipe.images ? [
        hit.recipe.images.SMALL?.url,
        hit.recipe.images.REGULAR?.url,
        hit.recipe.images.LARGE?.url
      ].filter(Boolean) : [],
      author: hit.recipe.source,
      createdAt: new Date().toISOString(),
      category: hit.recipe.cuisineType?.[0] || 'International',
      tags: [
        ...(hit.recipe.cuisineType || []),
        ...(hit.recipe.dishType || []),
        ...(hit.recipe.mealType || [])
      ].slice(0, 5),
      url: hit.recipe.url,
      calories: Math.round(hit.recipe.calories),
      dietLabels: hit.recipe.dietLabels || [],
      healthLabels: hit.recipe.healthLabels || []
    }));
  } catch (error) {
    console.error('Recipe API Error:', error);
    throw new Error('Unable to fetch recipes. Please check your connection and try again.');
  }
};
