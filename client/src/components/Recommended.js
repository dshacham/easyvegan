import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/RecipeCard.scss';
import '../style/Recommended.scss';
import axios from 'axios';

const Recommended = () => {
    const history = useHistory();
    const [isRecClicked, setIsRecClicked] = useState(false);

    const handleToRecipe = async (id) => {
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        // };

        try {
            const response = await axios.get('http://localhost:4000/recipes/' + id);
            if (response.data.recipe._id === id && response.status) {
                localStorage.setItem('recipe-info', JSON.stringify(response.data.recipe));
                setIsRecClicked(true);
            };

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        isRecClicked && history.push("/recipe");
    });

    return (
        <div className="recommended">
            <h2>TOP RECOMMENDED RECIPES</h2>
            <div className="rec-container">
                <ul>
                    <li>
                        <div className="recipe-card">
                            <h3 className="recipe-title to-back">BROWNIES</h3>
                            <img src="../../assets/img/recipes/brownies.jpg" alt="brownies" />
                            <p className="recipe-category">Category: sweet</p>
                            <button className="to-recipe" onClick={() => handleToRecipe("5f1c455ccd56e834c621a04c")}>TO RECIPE</button>
                        </div>
                    </li>
                    <li>
                        <div className="recipe-card">
                            <h3 className="recipe-title to-back">CORN CASSEROLE</h3>
                            <img src="../../assets/img/recipes/corn-casserole.jpg" alt="corn casserole" />
                            <p className="recipe-category">Category: savoury</p>
                            <button className="to-recipe" onClick={() => handleToRecipe("5f1d5e9fbacda1473f417c5a")}>TO RECIPE</button>
                        </div>
                    </li>
                    <li>
                        <div className="recipe-card">
                            <h3 className="recipe-title to-back">CHOCOLATE BALLS</h3>
                            <img src="../../assets/img/recipes/chocolate-balls.jpg" alt="chocolate balls" />
                            <p className="recipe-category">Category: sweet</p>
                            <button className="to-recipe" onClick={() => handleToRecipe("5f1c4b04a54b8c35a75825dc")}>TO RECIPE</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Recommended;