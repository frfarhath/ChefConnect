import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown, FaComment, FaShare, FaBookmark } from 'react-icons/fa'; // Import Font Awesome Icons

function PostPreview({ recipeData }) {
  const [isImageVisible, setIsImageVisible] = useState(true); // State to toggle image/video visibility

  const toggleImageVideo = () => {
    setIsImageVisible(!isImageVisible);
  };

  return (
    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md w-full max-w-lg mt-6 md:mt-0">
      <h2 className="text-center mb-6 text-2xl font-semibold">Post Preview</h2>
      <div>
        {/* Display Image if Available */}
        {recipeData.image && isImageVisible && (
          <div className="my-4">
            <h4 className="font-semibold">Image Preview</h4>
            <img
              src={URL.createObjectURL(recipeData.image)}
              alt="Recipe"
              className="w-full h-52 object-cover rounded-md"
            />
            <button
              onClick={toggleImageVideo}
              className="mt-2 text-red-500"
            >
              View Video
            </button>
          </div>
        )}

        {/* Display Video if Available */}
        {recipeData.video && !isImageVisible && (
          <div className="my-4">
            <h4 className="font-semibold">Making Video</h4>
            <video
              controls
              className="w-full h-52 object-cover rounded-md"
              src={URL.createObjectURL(recipeData.video)}
              alt="Making Video"
            />
            <button
              onClick={toggleImageVideo}
              className="mt-2 text-red-500"
            >
              View Image
            </button>
          </div>
        )}

        <h3 className="text-xl font-bold">{recipeData.name || 'Recipe Name'}</h3>
        <p className="italic text-sm text-gray-600">{recipeData.category || 'Category'}</p>
        <div className="my-4">
          <h4 className="font-semibold">Ingredients</h4>
          <p>{recipeData.ingredients || 'Ingredients list'}</p>
        </div>
        <div className="my-4">
          <h4 className="font-semibold">Steps</h4>
          <p>{recipeData.steps || 'Steps to prepare the dish'}</p>
        </div>
        <div className="my-4">
          <h4 className="font-semibold">Description</h4>
          <p>{recipeData.description || 'Description of the dish'}</p>
        </div>
        
        {/* Action Buttons with Font Awesome Icons */}
        <div className="mt-6 flex justify-around">
          <button className="flex items-center text-gray-500 hover:text-gray-700">
            <FaThumbsUp className="mr-2" />
            <span className="hidden sm:inline">Like</span> {/* Hide text on small screens */}
          </button>
          <button className="flex items-center text-gray-500 hover:text-gray-700">
            <FaThumbsDown className="mr-2" />
            <span className="hidden sm:inline">Dislike</span> {/* Hide text on small screens */}
          </button>
          <button className="flex items-center text-gray-500 hover:text-gray-700">
            <FaComment className="mr-2" />
            <span className="hidden sm:inline">Comment</span> {/* Hide text on small screens */}
          </button>
          <button className="flex items-center text-gray-500 hover:text-gray-700">
            <FaShare className="mr-2" />
            <span className="hidden sm:inline">Share</span> {/* Hide text on small screens */}
          </button>
          <button className="flex items-center text-gray-500 hover:text-gray-700">
            <FaBookmark className="mr-2" />
            <span className="hidden sm:inline">Save</span> {/* Hide text on small screens */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostPreview;
