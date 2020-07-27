import React, { useState, useEffect, useContext, Fragment } from 'react';
import Context from './Context';
import { useHistory } from 'react-router-dom';
import '../style/Recipes.scss';
import RecipeCard from './RecipeCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// import ScrollToTop from "react-scroll-to-top"

const Savourys = () => {
    const history = useHistory();

    const { savourys, setNavClass } = useContext(Context);

    const [isRecipeClicked, setIsRecipeClicked] = useState(false);

    useEffect(() => {
        setNavClass(window.location.pathname);
    }, [])

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
                savourys ?
                    <Fragment>
                        {
                            savourys.map((el, i) => <RecipeCard key={i} el={el} setIsRecipeClicked={setIsRecipeClicked} />)
                        }
                    </Fragment>
                    :
                    <div className="loading-message">
                        <p><FontAwesomeIcon icon={faSpinner} spin style={{ color: "rgb(37, 110, 172)" }} /> Loading...</p>
                    </div>
            }
        </div>
    );
}

export default Savourys;
