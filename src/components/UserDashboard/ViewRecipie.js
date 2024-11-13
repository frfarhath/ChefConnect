import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown, FaComment, FaBookmark } from 'react-icons/fa';
import food1 from '../../assests/food1.jpg';


const ViewRecipe = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: 'User456',
      text: 'This recipe is amazing!',
      replies: [
        {
          id: 1,
          user: 'User789',
          text: 'I agree, I tried it last weekend!',
        },
      ],
    },
    {
      id: 2,
      user: 'User999',
      text: 'Can I substitute Ingredient 2 with something else?',
      replies: [
        {
          id: 1,
          user: 'User123',
          text: 'Yes, you can use Ingredient X as a substitute.',
        },
      ],
    },
  ]);
  const [newComment, setNewComment] = useState('');
  const [reply, setReply] = useState({ commentId: null, text: '' });

  const handleAddComment = () => {
    if (newComment.trim() === '') return;

    const newCommentObject = {
      id: comments.length + 1,
      user: 'CurrentUser', // Replace with dynamic user if available
      text: newComment,
      replies: [],
    };

    setComments([...comments, newCommentObject]);
    setNewComment('');
  };

  const handleReplyChange = (commentId, text) => {
    setReply({ commentId, text });
  };

  const handleAddReply = (commentId) => {
    if (reply.text.trim() === '' || reply.commentId !== commentId) return;

    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: comment.replies.length + 1,
              user: 'CurrentUser', // Replace with dynamic user if available
              text: reply.text,
            },
          ],
        };
      }
      return comment;
    });

    setComments(updatedComments);
    setReply({ commentId: null, text: '' });
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0">
      {/* Recipe Details */}
      <div className="w-full md:w-2/3">
        <div className="bg-white text-black shadow-lg rounded-lg">
          <div className="bg-[#cc133d] p-4 rounded-t-lg">
            <div className="flex justify-between items-center">
              <h5 className="text-lg font-bold text-white">Recipe Name</h5>
              <div className="flex space-x-3">
                <div className="flex items-center">
                  <FaThumbsUp className="text-white" size={20} />
                  <span className="ml-1 text-white">150</span>
                </div>
                <div className="flex items-center">
                  <FaThumbsDown className="text-white" size={20} />
                  <span className="ml-1 text-white">12</span>
                </div>
                <div className="flex items-center">
                  <FaComment className="text-white" size={20} />
                </div>
                <div className="flex items-center">
                  <FaBookmark className="text-white" size={20} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3">
              <img src={food1} className="rounded-l-lg w-full h-64 object-cover" alt="Recipe" />
            </div>
            <div className="p-4 w-full md:w-2/3">
            <a href="http://localhost:3000/userprofile" className="text-[#691a36] font-medium text-lg">User123</a>
              <p className="mt-2 text-lg">Description of the recipe goes here.</p>
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="p-4 bg-white rounded-lg mb-0">
            <h4 className="font-bold text-[#691a36]">Ingredients</h4>
            <ul className="list-disc pl-6 text-black">
              <li>1 cup of flour</li>
              <li>2 eggs</li>
              <li>1/2 cup of sugar</li>
              <li>1 cup of milk</li>
              <li>1 tsp of vanilla extract</li>
            </ul>
          </div>

          {/* Steps Section */}
          <div className="p-4 bg-white rounded-lg">
            <h4 className="font-bold text-[#691a36]">Steps</h4>
            <ol className="pl-6 mt-2 list-decimal text-black">
              <li>Preheat the oven to 350°F (175°C).</li>
              <li>In a large bowl, mix the flour and sugar.</li>
              <li>Add the eggs and milk, and whisk until smooth.</li>
              <li>Stir in the vanilla extract.</li>
              <li>Pour the mixture into a baking dish and bake for 25-30 minutes.</li>
              <li>Allow to cool before serving.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="w-full md:w-1/3">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h5 className="text-black mb-3">Comments</h5>
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white p-3 rounded-lg mb-3 border border-gray-300">
              <p><strong>{comment.user}:</strong> {comment.text}</p>
              {comment.replies.map((reply) => (
                <div key={reply.id} className="bg-white p-3 mt-2 rounded-lg border-l-4 border-gray-300">
                  <p><strong>{reply.user}:</strong> {reply.text}</p>
                </div>
              ))}
              <input
                type="text"
                className="w-full p-2 mt-2 bg-white rounded-lg text-black placeholder-gray-500"
                placeholder="Reply to this comment..."
                value={reply.commentId === comment.id ? reply.text : ''}
                onChange={(e) => handleReplyChange(comment.id, e.target.value)}
              />
              <button
                onClick={() => handleAddReply(comment.id)}
                className="mt-2 py-2 px-4 rounded-lg bg-gradient-to-r from-[#691a36] to-[#f6723e] text-white font-bold hover:from-[#691a36] hover:to-[#f6723e]"
              >
                Reply
              </button>
            </div>
          ))}

          <div className="mt-4">
            <input
              type="text"
              className="w-full p-3 bg-white rounded-lg text-black placeholder-gray-500"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              onClick={handleAddComment}
              className="w-full mt-2 py-3 rounded-lg bg-gradient-to-r from-[#691a36] to-[#f6723e] text-white font-bold hover:from-[#691a36] hover:to-[#f6723e]"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRecipe;
