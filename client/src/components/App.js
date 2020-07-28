
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../style/App.scss";
import Context from "./Context";
import Home from "./Home";
import NavBar from "./NavBar";
import DropDownNav from "./DropDownNav";
import Footer from "./Footer";
import RecipeForm from "./RecipeForm";
import RecipeInfo from "./RecipeInfo";
import Recipes from "./Recipes";
import Sweets from "./Sweets";
import Savourys from "./Savourys";
import About from "./About";
import axios from "axios";

const App = () => {
  const [sweets, setSweets] = useState('');
  const [savourys, setSavourys] = useState('');
  const [recipes, setRecipes] = useState('');

  const [newRecipe, setNewRecipe] = useState(null);
  const [recipeInfo, setRecipeInfo] = useState(null);

  const [navClass, setNavClass] = useState('/');

  const [winWidth, setWinWidth] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    window.innerWidth > 768 ?
      setWinWidth('desktop')
      :
      setWinWidth('mobile')
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
    const allSweets = [];
    const allSavourys = [];

    try {

      const response1 = await axios.get('/recipes', options);
      response1.data.recipes.map(recipe => {
        allRecipes.push({
          title: recipe.title,
          description: recipe.description,
          imgUrl: recipe.imgUrl,
          category: recipe.category,
          preparation: recipe.preparation,
          cooking: recipe.cooking,
          amount: recipe.amount,
          ings: recipe.ings,
          directions: recipe.directions,
          cookware: recipe.cookware,
          comments: recipe.comments,
          sourceURL: recipe.sourceURL
        });
      });

      setRecipes(allRecipes);

      const response2 = await axios.get('/recipes', options);
      response2.data.recipes.map(recipe => {
        if (recipe.category === "Sweet") {
          allSweets.push({
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
        } else {
          allSavourys.push({
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
        }
      });

      setSweets(allSweets);
      setSavourys(allSavourys);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {
    fetchRecipes();
  }, [recipeInfo]);

  return (
    <div className="App">
      <Context.Provider value={{ sweets, setSweets, savourys, setSavourys, recipes, setRecipes, recipeInfo, setRecipeInfo, newRecipe, setNewRecipe, fetchRecipes, navClass, setNavClass }}>
        <Router>
          {winWidth === 'desktop' ?
            <NavBar />
            :
            <DropDownNav />
          }
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipes" exact component={Recipes} />
            <Route path="/addrecipe" exact component={RecipeForm} />
            <Route path="/recipe" exact component={RecipeInfo} />
            <Route path="/sweets" exact component={Sweets} />
            <Route path="/savourys" exact component={Savourys} />
            <Route path="/about" exact component={About} />
            <Route path="/addrecipes" exact component={RecipeForm} />
          </Switch>
          <Footer />
        </Router>

      </Context.Provider>
    </div>
  );
}


export default App;