
import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "../style/App.scss";
import Context from "./Context";
import Home from "./Home";
import NavBar from "./NavBar";
// import logo from "../assets/img/sprinklesVer.png"

const App = () => {
  const [sweets, setSweets] = useState('');
  const [savourys, setSavourys] = useState('');
  const [recipes, setRecipes] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const fetchRecipes = async () => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };

    const allRecipes = [];

    const request1 = await fetch("/recipes", options);
    const response1 = await request1.json();
    response1.recipes.map(recipe => {
      allRecipes.push({
        title: recipe.title,
        description: recipe.description,
        imgUrl: recipe.imgUrl,
        category: recipe.category,
        preparation: recipe.preparation,
        cooking: recipe.cooking,
        yield: recipe.yield,
        ings: recipe.ings,
        directions: recipe.directions,
        cookware: recipe.cookware,
        comments: recipe.comments,
        sourceURL: recipe.sourceURL
      });
    });

    setRecipes(allRecipes);

    const allSweets = [];

    const request2 = await fetch("/sweets", options);
    const response2 = await request2.json();
    response2.sweets.map(sweet => {
      allSweets.push({
        title: sweet.title,
        description: sweet.description,
        imgUrl: sweet.imgUrl,
        category: sweet.category,
        preparation: sweet.preparation,
        cooking: sweet.cooking,
        yield: sweet.yield,
        ings: sweet.ings,
        directions: sweet.directions,
        cookware: sweet.cookware,
        comments: sweet.comments,
        sourceURL: sweet.sourceURL
      });
    });

    setSweets(allSweets);

    const allSavourys = [];

    const request3 = await fetch("/savourys", options);
    const response3 = await request3.json();
    response3.savourys.map(savoury => {
      allSavourys.push({
        title: savoury.title,
        description: savoury.description,
        imgUrl: savoury.imgUrl,
        category: savoury.category,
        preparation: savoury.preparation,
        cooking: savoury.cooking,
        yield: savoury.yield,
        ings: savoury.ings,
        directions: savoury.directions,
        cookware: savoury.cookware,
        comments: savoury.comments,
        sourceURL: savoury.sourceURL
      });
    });

    setSavourys(allSavourys);
  }

  return (
    <div className="App">
      {/* <img src={sprinkle} id="left-sprinkles" alt="Sprinkles" /> */}
      <Context.Provider value={{ sweets, setSweets, savourys, setSavourys, recipes, setRecipes }}>
        <HashRouter>
          <NavBar />
          <Home />
        </HashRouter>

      </Context.Provider>
    </div>
  );
}


export default App;