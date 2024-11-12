import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons'; // Import icons
import food1 from '../../assests/food1.jpg'; // Import the image
import food2 from '../../assests/food2.jpg'; // Import the image
import food3 from '../../assests/food3.jpg'; // Import the image
import food4 from '../../assests/food4.jpg'; // Import the image

function SavedRecipes() {
  const categories = [
    { id: 1, title: "Category 1", description: "Description of Category 1", image: food1 },
    { id: 2, title: "Category 2", description: "Description of Category 2", image: food2 },
    { id: 3, title: "Category 3", description: "Description of Category 3", image: food3 },
    { id: 4, title: "Category 3", description: "Description of Category 3", image: food4 },

  
  ];

  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate('/viewrecipie'); // Navigate to the view recipe page
  };

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#cc133d]">Saved Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white text-black rounded-lg shadow-lg transform transition-transform hover:-translate-y-2 overflow-hidden">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-52 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h5 className="text-lg font-bold">{category.title}</h5>
              <p className="text-sm mb-4">{category.description}</p>
              <div className="flex justify-between items-center">
                {/* View Recipe Button */}
                <button
                  className="bg-[#f6723e] hover:bg-yellow-600 text-white py-2 px-4 rounded flex items-center"
                  onClick={handleViewClick}
                >
                  <FontAwesomeIcon icon={faEye} className="mr-2" /> View
                </button>
                {/* Unsave Button */}
                <button className="bg-[#cc133d] hover:bg-red-600 text-white py-2 px-4 rounded flex items-center">
                  <FontAwesomeIcon icon={faTrash} className="mr-2" /> Unsave
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedRecipes;
