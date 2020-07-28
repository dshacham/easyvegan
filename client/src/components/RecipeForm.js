import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/RecipeForm.scss';
import axios from 'axios';

const RecipeForm = () => {
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [preparation, setPreparation] = useState('');
    const [cooking, setCooking] = useState('');
    const [amount, setAmount] = useState('');
    const [ings, setIngs] = useState([]);
    const [directions, setDirections] = useState([]);
    const [cookware, setCookware] = useState('');
    const [comments, setComments] = useState('');
    const [sourceURL, setSourceURL] = useState('');

    const [userIngs, setUserIngs] = useState('');
    const [userDirs, setUserDirs] = useState('');

    // route to recipes pages after recipe is added
    const [statusAdded, setStatusAdded] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleCreateRecipe = async (e) => {
        e.preventDefault();

        const formBody = new FormData();

        formBody.append('file', image);
        formBody.append('title', title);
        formBody.append('description', description);
        formBody.append('category', category);
        formBody.append('preparation', preparation);
        formBody.append('cooking', cooking);
        formBody.append('amount', amount);
        for (let i = 0; i < ings.length; i++) {
            formBody.append('ings[]', ings[i]);
        }
        for (let i = 0; i < directions.length; i++) {
            formBody.append('directions[]', directions[i]);
        }
        formBody.append('cookware', cookware);
        formBody.append('comments', comments);
        formBody.append('sourceURL', sourceURL);

        try {
            const res = await axios.post('/recipes', formBody, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (res.status) {
                localStorage.setItem('recipe-info', JSON.stringify(res.data.recipe));
                setStatusAdded(true)
            }

        } catch (err) {
            console.log(err)
        }
    }

    const handleIngsList = (e) => {
        e.preventDefault();

        setIngs([...ings, userIngs]);
        setUserIngs('');
    }

    const handleDirsList = (e) => {
        e.preventDefault();

        setDirections([...directions, userDirs]);
        setUserDirs('');
    }

    useEffect(() => {
        statusAdded && history.push("/recipe");
    })

    return (
        <div className="form-container">
            <form className="recipe-form" onSubmit={handleCreateRecipe}>
                <h2 className="h2-recipe">ADD A RECIPE</h2>
                <label className="recipe-label">Title *
                    <input
                        className="recipe-input"
                        type="text"
                        value={title}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label className="recipe-label">Description
                    <textarea cols="40" rows="5"
                        className="recipe-textarea"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <label className="recipe-label img-label">Image (png, jpeg/jpg)
                    <input
                        type="file"
                        placeholder="Only .png, .jpeg or .jpg"
                        className="recipe-input img-file"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </label>
                <label className="smaller-label">Category *
                    <select id={title} className="recipe-input" required onChange={(e) => setCategory(e.currentTarget.value)} >
                        <option className="recipe-opt" value="select one" selected>...</option>
                        <option className="recipe-opt" value="Sweet">Sweet</option>
                        <option className="recipe-opt" value="Savoury">Savoury</option>
                    </select>
                </label>
                <label className="smaller-label">Preparation Time *
                        <input
                        className="recipe-input"
                        type="preparation"
                        value={preparation}
                        required
                        onChange={(e) => setPreparation(e.target.value)}
                    />
                </label>
                <label className="smaller-label">Cooking Time
                    <input
                        className="recipe-input"
                        type="cooking"
                        value={cooking}
                        onChange={(e) => setCooking(e.target.value)}
                    />
                </label>
                <label className="smaller-label">Amount
                    <input
                        className="recipe-input"
                        type="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </label>
                <label className="list-label">Ingredients *
                <div className="inline-input">
                        <input
                            className="recipe-input"
                            type="ingredients"
                            value={userIngs}
                            onChange={(e) => setUserIngs(e.target.value)}
                        />
                        <input type="submit" className="add-list" value="ADD" onClick={handleIngsList} />
                    </div>
                </label>
                {ings &&
                    <ul className="form-list">
                        {ings.map((el, i) => <li key={i}>- {el} <span onClick={(e) => setIngs(ings.filter(ing => ing !== el))}>X</span></li>)}
                    </ul>
                }
                <label className="list-label">Directions *
                <div className="inline-input">
                        <input
                            className="recipe-input"
                            type="directions"
                            value={userDirs}
                            onChange={(e) => setUserDirs(e.target.value)}
                        />
                        <input type="submit" className="add-list" value="ADD" onClick={handleDirsList} />
                    </div>
                </label>
                {directions &&
                    <ul className="form-list">
                        {directions.map((el, i) => <li key={i}>- {el} <span onClick={(e) => setDirections(directions.filter(dir => dir !== el))}>X</span></li>)}
                    </ul>
                }
                <label className="recipe-label">Cookware
                    <input
                        className="recipe-input"
                        type="cookware"
                        value={cookware}
                        onChange={(e) => setCookware(e.target.value)}
                    />
                </label>
                <label className="recipe-label">Comments
                    <input
                        className="recipe-input"
                        type="comments"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    />
                </label>
                <label className="recipe-label">Source
                    <input
                        className="recipe-input"
                        type="sourceURL"
                        value={sourceURL}
                        onChange={(e) => setSourceURL(e.target.value)}
                    />
                </label>


                <h5 className="h5-recipe">* Required Fields</h5>
                <button className="recipe-btn" type="submit">ADD RECIPE</button>

            </form>

        </div>
    )
}

export default RecipeForm;
