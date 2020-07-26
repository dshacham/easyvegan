import React, { useContext } from 'react';
import '../style/RecipeCard.scss';
import Context from './Context';

const RecipeCard = ({ el, setIsRecipeClicked }) => {
    const { setRecipeInfo } = useContext(Context);

    return (
        <div className="recipe-card scale-in-center">
            <h3 className="recipe-title to-back">{el.title.toUpperCase()}</h3>
            <img className="recipe-image" src={`http://localhost:4000${el.imgUrl}`} alt={el.title} />
            <p className="recipe-category">Category: {el.category}</p>
            <p className="recipe-desc">{el.description}</p>
            <button onClick={() => {
                setRecipeInfo(el);
                localStorage.setItem('recipe-info', JSON.stringify(el));
                setIsRecipeClicked(true);
            }} className="button see-more">See more</button>
        </div>
    )
}

export default RecipeCard;
