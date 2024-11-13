import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faComment, faShare, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden mb-4">
      <div className="flex flex-col p-4">
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={5000} className="rounded-lg">
          {recipe.media.map((item, index) =>
            item.endsWith('.mp4') ? (
              <div key={index}>
                <video controls className="w-full rounded-lg h-52">
                  <source src={item} type="video/mp4" />
                </video>
              </div>
            ) : (
              <div key={index}>
                <img src={item} alt={`${recipe.title} media`} className="w-full object-cover rounded-lg h-52" />
              </div>
            )
          )}
        </Carousel>

        <h5 className="text-lg font-bold mt-2">{recipe.title}</h5>
        <p className="text-sm text-gray-700">Shared by {recipe.sharedBy}</p>

        <div className="mt-2">
          <p><strong>Category:</strong> {recipe.category}</p>
          <p><strong>Description:</strong> {recipe.description}</p>
          <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
          <p><strong>Steps:</strong> {recipe.steps}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 p-4">
        <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 gap-1">
        <span className="hidden md:inline">50</span>
          <FontAwesomeIcon icon={faThumbsUp} className="mr-2" />
        </button>
        <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 gap-1">
        <span className="hidden md:inline">20</span>
          <FontAwesomeIcon icon={faThumbsDown} className="mr-2" />
         
        </button>
        <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 gap-1">
        <span className="hidden md:inline">10</span>
          <FontAwesomeIcon icon={faComment} className="mr-2" />
        </button>
        <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 gap-1">
          <FontAwesomeIcon icon={faShare} className="mr-2" />
        </button>
        <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 gap-1">
          <FontAwesomeIcon icon={faBookmark} className="mr-2" />
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
