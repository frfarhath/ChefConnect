import React from 'react';
import RecipeCard from './RecipeCard';
import food1 from '../../assests/food1.jpg'; // Import the image
import food2 from '../../assests/food2.jpg'; // Import the image
import food3 from '../../assests/food3.jpg'; // Import the image
import food4 from '../../assests/food4.jpg'; // Import the image

const RecipesList = ({ searchQuery }) => {
  // Example recipes data - replace it with actual data from API or state
  const recipes = [
    { id: 1, title: 'Spaghetti Carbonara', sharedBy: 'UserA', imageUrl: food1, videoUrl: 'https://www.example.com/spaghetti-video.mp4' },
    { id: 2, title: 'Chicken Alfredo', sharedBy: 'UserB', imageUrl: food2, videoUrl: 'https://www.example.com/chicken-alfredo-video.mp4' },
    { id: 3, title: 'Vegetable Stir Fry', sharedBy: 'UserC', imageUrl: food3, videoUrl: 'https://www.example.com/stir-fry-video.mp4' },
    { id: 4, title: 'Beef Stew', sharedBy: 'UserD', imageUrl: food4, videoUrl: 'https://www.example.com/beef-stew-video.mp4' },
    { id: 5, title: 'Salmon Sushi', sharedBy: 'UserE', imageUrl: food4, videoUrl: 'https://www.example.com/sushi-video.mp4' },
  ];

  // Filter recipes based on the search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center p-4">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="mb-6 w-full">
            <RecipeCard recipe={recipe} />
          </div>
        ))
      ) : (
        <p className="text-center w-full">No recipes found.</p>
      )}
    </div>
  );
};

export default RecipesList;
