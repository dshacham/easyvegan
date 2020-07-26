import React, { useContext, Fragment, useEffect } from 'react';
import Context from './Context';
import '../style/RecipeInfo.scss';

const RecipeInfo = () => {

    const { recipeInfo, setRecipeInfo } = useContext(Context);

    useEffect(() => {
        window.scrollTo(0, 0);

        const recipe = localStorage.getItem('recipe-info');
        if (recipe) {
            setRecipeInfo(JSON.parse(recipe));
        }
    }, []);
    return (
        <div className="recipe-info-container">
            {
                recipeInfo ?
                    <Fragment>
                        <div className="recipe-title-img">
                            <h2 className="recipe-info-title">{recipeInfo.title.toUpperCase()}</h2>
                            {
                                recipeInfo.imgUrl &&
                                <a target="_blank" href={`http://localhost:4000${recipeInfo.imgUrl}`}>
                                    <img className="recipe-info-image" src={`http://localhost:4000${recipeInfo.imgUrl}`} alt={recipeInfo.title} />
                                </a>
                            }
                            {
                                recipeInfo.sourceURL ?
                                    <a href={recipeInfo.sourceURL} target='_blank' className="link-to-source" >RECIPE SOURCE</a>
                                    : null
                            }
                        </div>

                        <div className="recipe-details">
                            <ul className="recipe-details-left">
                                <li>DESCRIPTION: <p>{recipeInfo.description}</p></li>
                                <li>COOKING TIME: <p>{recipeInfo.cooking}</p></li>
                                <li>YIELD: <p>{recipeInfo.amount}</p></li>
                                <li>INGREDIENTS: {recipeInfo.ings.map((el, i) => <li key={i}>{i + 1}. {el}</li>)}</li>

                            </ul>
                            <ul className="recipe-details-right">
                                <li>PREPARATION TIME: <p>{recipeInfo.preparation}</p></li>
                                <li>COOKWARE: <p>{recipeInfo.cookware}</p></li>
                                <li>COMMENTS: <p>{recipeInfo.comments}</p></li>
                                <li>DIRECTIONS: {recipeInfo.directions.map((el, i) => <li key={i}>{i + 1}. {el}</li>)}</li>
                            </ul>
                        </div>

                    </Fragment>
                    :
                    null
            }
        </div>
    );
}

export default RecipeInfo;
