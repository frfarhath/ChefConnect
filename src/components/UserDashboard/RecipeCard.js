import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faComment, faShare, faBookmark, faEye, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import food1 from '../../assests/food1.jpg';
import food2 from '../../assests/food2.jpg';
import food3 from '../../assests/food3.jpg';
import food4 from '../../assests/food4.jpg';

const RecipeCard = () => {
  const categories = [
    { id: 1, title: "Spaghetti Carbonara", category: "Pasta", ingredients: "Spaghetti, Eggs, Parmesan, Pancetta", steps: "Cook pasta, mix with eggs and cheese, add pancetta.", description: "A classic Italian pasta dish.", image: food1, username: "UserA" },
    { id: 2, title: "Grilled Cheese", category: "Snack", ingredients: "Bread, Cheese, Butter", steps: "Butter bread, add cheese, grill.", description: "A quick and tasty snack.", image: food2, username: "UserB" },
    { id: 3, title: "Chicken Curry", category: "Main Course", ingredients: "Chicken, Spices, Coconut milk", steps: "Cook chicken with spices and coconut milk.", description: "A flavorful curry.", image: food3, username: "UserC" },
    { id: 4, title: "Greek Salad", category: "Salad", ingredients: "Lettuce, Feta, Olives", steps: "Combine ingredients and serve.", description: "A fresh and healthy salad.", image: food4, username: "UserD" },
  ];

  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    { user: 'User456', text: 'This recipe is amazing!', replies: [{ user: 'User789', text: 'I agree, I tried it last weekend!' }] }
  ]);
  const [replyingToIndex, setReplyingToIndex] = useState(null);
  const [newReply, setNewReply] = useState('');

  const handleOpenComments = () => setIsCommentsOpen(true);
  const handleCloseComments = () => {
    setIsCommentsOpen(false);
    setReplyingToIndex(null);
    setNewReply('');
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { user: 'CurrentUser', text: newComment, replies: [] }]);
      setNewComment('');
    }
  };

  const handleReplyToComment = (index) => setReplyingToIndex(index);
  const handleAddReply = (index) => {
    if (newReply.trim()) {
      const updatedComments = [...comments];
      updatedComments[index].replies.push({ user: 'CurrentUser', text: newReply });
      setComments(updatedComments);
      setNewReply('');
      setReplyingToIndex(null);
    }
  };

  return (
    <div className="container mx-auto px-4 mt-0">
      {categories.map((category) => (
        <div key={category.id} className="bg-white text-black rounded-lg shadow-lg overflow-hidden mb-4">
          <div className="flex flex-col md:flex-row p-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={5000} className="rounded-lg">
                <div>
                  <img src={category.image} alt={`${category.title} image`} className="w-full object-cover rounded-lg h-52" />
                </div>
              
              </Carousel>
              <h5 className="w-full md:w-1/2 pl-0 md:pl-4 text-lg font-bold mt-2 text-black">{category.title}</h5>
              <p className="w-full md:w-1/2 pl-0 md:pl-4 text-sm text-gray-700">Shared by {category.username}</p>
            </div>

            <div className="w-full md:w-1/2 pl-0 md:pl-4">
              <p className="text-black"><strong>Category:</strong> {category.category}</p>
              <p className="text-black"><strong>Description:</strong> {category.description}</p>
              <p className="text-black"><strong>Ingredients:</strong> {category.ingredients}</p>
              <p className="text-black"><strong>Steps:</strong> {category.steps}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 p-4">
            <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faThumbsUp} className="mr-2" />
              Like
            </button>
            <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faThumbsDown} className="mr-2" />
              Dislike
            </button>
            <button className="flex items-center text-sm text-gray-500 hover:text-gray-700" onClick={handleOpenComments}>
              <FontAwesomeIcon icon={faComment} className="mr-2" />
              Comment
            </button>
            <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faShare} className="mr-2" />
              Share
            </button>
            <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faBookmark} className="mr-2" />
              Save
            </button>
          </div>
        </div>
      ))}

      {isCommentsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Comments</h2>
              <button onClick={handleCloseComments} className="text-gray-500 hover:text-gray-700">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="max-h-60 overflow-y-auto mb-4">
              {comments.length > 0 ? (
                comments.map((comment, index) => (
                  <div key={index} className="mb-4">
                    <p className="font-semibold">{comment.user}:</p>
                    <p className="pl-4 mb-2">{comment.text}</p>
                    {comment.replies.length > 0 && (
                      <div className="pl-4 border-l-2 border-gray-300 mt-2">
                        {comment.replies.map((reply, replyIndex) => (
                          <div key={replyIndex} className="mb-1">
                            <p className="font-semibold">{reply.user}:</p>
                            <p className="pl-2 text-gray-700">{reply.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <button onClick={() => handleReplyToComment(index)} className="mt-2 text-sm text-orange-500 hover:underline">
                      Reply to this comment...
                    </button>
                  </div>
                ))
              ) : (
                <p>No comments yet.</p>
              )}
            </div>
            <div className="flex">
              <input
                type="text"
                className="w-3/4 p-2 border rounded-md"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button onClick={handleAddComment} className="ml-2 py-2 px-4 rounded-lg bg-gradient-to-r from-[#691a36] to-[#f6723e] text-white">
                Comment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
