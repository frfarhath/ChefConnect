import React from 'react';
import RecipeCard from './RecipeCard';
import food1 from '../../assests/food1.jpg';
import food2 from '../../assests/food2.jpg';
import food3 from '../../assests/food3.jpg';
import food4 from '../../assests/food4.jpg';
import video1 from '../../assests/video1.mp4';
import video2 from '../../assests/video2.mp4';
import video3 from '../../assests/video3.mp4';

// Recipe data
const recipes = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    sharedBy: 'UserA',
    category: 'Pasta',
    ingredients: 'Spaghetti, Eggs, Parmesan, Pancetta',
    steps: 'Cook pasta, mix with eggs and cheese, add pancetta.',
    description: 'A classic Italian pasta dish.',
    media: [food1, video1],
  },
  {
    id: 2,
    title: 'Chicken Alfredo',
    sharedBy: 'UserB',
    category: 'Pasta',
    ingredients: 'Fettuccine, Chicken, Cream, Parmesan',
    steps: 'Cook pasta, sauté chicken, mix with sauce.',
    description: 'Creamy and delicious pasta dish.',
    media: [food2, video2],
  },
  {
    id: 3,
    title: 'Vegetable Stir Fry',
    sharedBy: 'UserC',
    category: 'Main Course',
    ingredients: 'Bell Peppers, Broccoli, Soy Sauce, Garlic',
    steps: 'Stir-fry vegetables with soy sauce and garlic.',
    description: 'A healthy and quick meal.',
    media: [food3, video3],
  },
  {
    id: 4,
    title: 'Beef Stew',
    sharedBy: 'UserD',
    category: 'Main Course',
    ingredients: 'Beef, Potatoes, Carrots, Onions',
    steps: 'Slow-cook beef with vegetables.',
    description: 'Hearty and comforting stew.',
    media: [food4, video1],
  },
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    sharedBy: 'UserA',
    category: 'Pasta',
    ingredients: 'Spaghetti, Eggs, Parmesan, Pancetta',
    steps: 'Cook pasta, mix with eggs and cheese, add pancetta.',
    description: 'A classic Italian pasta dish.',
    media: [food1, video1],
  },
  {
    id: 2,
    title: 'Chicken Alfredo',
    sharedBy: 'UserB',
    category: 'Pasta',
    ingredients: 'Fettuccine, Chicken, Cream, Parmesan',
    steps: 'Cook pasta, sauté chicken, mix with sauce.',
    description: 'Creamy and delicious pasta dish.',
    media: [food2, video2],
  },
  {
    id: 3,
    title: 'Vegetable Stir Fry',
    sharedBy: 'UserC',
    category: 'Main Course',
    ingredients: 'Bell Peppers, Broccoli, Soy Sauce, Garlic',
    steps: 'Stir-fry vegetables with soy sauce and garlic.',
    description: 'A healthy and quick meal.',
    media: [food3, video3],
  },
  {
    id: 4,
    title: 'Beef Stew',
    sharedBy: 'UserD',
    category: 'Main Course',
    ingredients: 'Beef, Potatoes, Carrots, Onions',
    steps: 'Slow-cook beef with vegetables.',
    description: 'Hearty and comforting stew.',
    media: [food4, video1],

  },
];

const RecipesList = ({ searchQuery }) => {
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <p className="text-center col-span-2">No recipes found.</p>
      )}
    </div>
  );
};

export default RecipesList;
