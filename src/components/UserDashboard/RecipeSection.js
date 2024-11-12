import React from 'react';
import '../../pages/UserDashboard/Styles/UserDashboard.css';

function RecipeSection() {
    return (
        <div className="userSection card recipe-section shadow">
            <h3 className="card-header bg-dark text-light">Dashboard</h3>
            <div className="card-body d-flex justify-content-between">
                <button type="button" className="btn btn-warning flex-grow-1 mx-1">Add Recipe</button>
                <button type="button" className="btn btn-warning flex-grow-1 mx-1">Uploaded Recipes</button>
                <button type="button" className="btn btn-warning flex-grow-1 mx-1">Saved Recipes</button>
            </div>
            <div className="mt-3">
                <div className="input-group">
                    <select className="form-select">
                        <option>All Categories</option>
                        <option>Appetizers</option>
                        <option>Main Course</option>
                    </select>
                    <input type="text" className="form-control" placeholder="Search Recipes..." />
                </div>
            </div>
        </div>
    );
}

export default RecipeSection;
