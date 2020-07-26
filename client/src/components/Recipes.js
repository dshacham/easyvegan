import React, { useState, useEffect, useContext, Fragment } from 'react';
import Context from './Context';
import { useHistory } from 'react-router-dom';
import '../style/Recipes.scss';
import RecipeCard from './RecipeCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// import ScrollToTop from "react-scroll-to-top"

const Recipes = () => {
    const history = useHistory();

    const { recipes } = useContext(Context);

    const [isRecipeClicked, setIsRecipeClicked] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    // clicking 'SEE MORE' will redirect to the recipe page
    useEffect(() => {
        isRecipeClicked && history.push('/recipe');
    });

    return (
        <div className="pool-recipe">
            {
                recipes ?
                    <Fragment>
                        {
                            recipes.map((el, i) => <RecipeCard key={i} el={el} setIsRecipeClicked={setIsRecipeClicked} />)
                        }
                    </Fragment>
                    :
                    <div className="loading-message">
                        <p><FontAwesomeIcon icon={faSpinner} spin style={{ color: "black" }} /> Loading...</p>
                    </div>
            }
        </div>
    );
}

export default Recipes;
