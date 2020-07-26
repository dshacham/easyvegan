import React from 'react';
import '../style/Recommended.scss';
import '../style/RecipeCard.scss';
import { Link } from 'react-router-dom';


const Recommended = () => {

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
                            <Link to="/brownies" className="see-more">See more</Link>
                        </div>
                    </li>
                    <li>
                        <div className="recipe-card">
                            <h3 className="recipe-title to-back">CORN CASSEROLE</h3>
                            <img src="../../assets/img/recipes/corn-casserole.jpg" alt="corn casserole" />
                            <p className="recipe-category">Category: savoury</p>
                            <Link to="/corncasserole" className="see-more">See more</Link>
                        </div>
                    </li>
                    <li>
                        <div className="recipe-card">
                            <h3 className="recipe-title to-back">CHOCOLATE BALLS</h3>
                            <img src="../../assets/img/recipes/chocolate-balls.jpg" alt="chocolate balls" />
                            <p className="recipe-category">Category: sweet</p>
                            <Link to="/chocballs" className="see-more">See more</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Recommended;