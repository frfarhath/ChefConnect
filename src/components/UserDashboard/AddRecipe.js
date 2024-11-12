import React, { useState } from 'react';
import { FaImage, FaVideo, FaUtensils, FaListUl, FaRegEdit,FaCross,FaPlus } from 'react-icons/fa'; // Importing icons
import PostPreview from './PostPreview'; // Adjust the path as needed

function AddRecipe() {
  const [recipeData, setRecipeData] = useState({
    image: '',
    name: '',
    category: '',
    ingredients: '',
    steps: '',
    description: '',
    video: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  return (
    <div className="flex gap-10 flex-wrap">
      {/* Form */}
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-center mb-3 text-2xl font-semibold">Add Recipe</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Image Input */}
            <div className="mb-2">
              <label htmlFor="recipeImage" className="block mb-1 flex items-center">
                <FaImage className="mr-2" /> Image of Final Output
              </label>
              <input
                type="file"
                id="recipeImage"
                name="image"
                className="block w-full text-gray-800 bg-gray-200 rounded-md"
                onChange={handleFileChange}
              />
            </div>

            {/* Recipe Name Input */}
            <div className="mb-4">
              <label htmlFor="recipeName" className="block mb-1 flex items-center">
                <FaRegEdit className="mr-2" /> Recipe Name
              </label>
              <input
                type="text"
                id="recipeName"
                name="name"
                placeholder="Enter recipe name"
                className="block w-full p-2 text-gray-800 bg-gray-200 rounded-md"
                value={recipeData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Category Dropdown */}
          <div className="mb-4">
            <label htmlFor="recipeCategory" className="block mb-1 flex items-center">
              <FaUtensils className="mr-2" /> Category
            </label>
            <select
              id="recipeCategory"
              name="category"
              className="block w-full p-2 text-gray-800 bg-gray-200 rounded-md"
              value={recipeData.category}
              onChange={handleChange}
            >
              <option value="" disabled>Select a category</option>
              <option value="appetizer">Appetizer</option>
              <option value="mainCourse">Main Course</option>
              <option value="dessert">Dessert</option>
              <option value="beverage">Beverage</option>
            </select>
          </div>

          {/* Ingredients Input */}
          <div className="mb-4">
            <label htmlFor="recipeIngredients" className="block mb-1 flex items-center">
              <FaListUl className="mr-2" /> Ingredients
            </label>
            <textarea
              id="recipeIngredients"
              name="ingredients"
              placeholder="List the ingredients"
              className="block w-full p-2 text-gray-800 bg-gray-200 rounded-md"
              value={recipeData.ingredients}
              onChange={handleChange}
            />
          </div>

          {/* Steps Input */}
          <div className="mb-4">
            <label htmlFor="recipeSteps" className="block mb-1 flex items-center">
              <FaRegEdit className="mr-2" /> Steps
            </label>
            <textarea
              id="recipeSteps"
              name="steps"
              placeholder="Describe the preparation steps"
              className="block w-full p-2 text-gray-800 bg-gray-200 rounded-md"
              value={recipeData.steps}
              onChange={handleChange}
            />
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label htmlFor="recipeDescription" className="block mb-1 flex items-center">
              <FaRegEdit className="mr-2" /> Description
            </label>
            <textarea
              id="recipeDescription"
              name="description"
              placeholder="Add a brief description"
              className="block w-full p-2 text-gray-800 bg-gray-200 rounded-md"
              value={recipeData.description}
              onChange={handleChange}
            />
          </div>

          {/* Video Input */}
          <div className="mb-4">
            <label htmlFor="recipeVideo" className="block mb-1 flex items-center">
              <FaVideo className="mr-2" /> Video of Making (Optional)
            </label>
            <input
              type="file"
              id="recipeVideo"
              name="video"
              className="block w-full text-gray-800 bg-gray-200 rounded-md"
              onChange={handleFileChange}
            />
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4">
  {/* Cancel Button */}
  <a
    href="/userDashboard"
    className="flex items-center justify-center py-2 px-4 bg-red-600 rounded-md text-white hover:bg-red-500 text-sm"
  >
    <FaCross className="mr-2" />Cancel
  </a>

  {/* Add Recipe Button */}
  <button
    type="submit"
    className="flex items-center justify-center py-2 px-4 bg-orange-500 rounded-md text-white hover:bg-orange-600 text-sm"
  >
    <FaPlus className="mr-2" /> Add Recipe
  </button>
</div>

        </form>
      </div>

      {/* Post Preview */}
      <PostPreview recipeData={recipeData} />
    </div>
  );
}

export default AddRecipe;
