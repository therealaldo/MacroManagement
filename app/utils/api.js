'use strict';

import Config from 'react-native-config';

let api = {

  searchRecipe(query, offset) {
    let bareUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?';
    let queryOpt = `limitLicense=false&number=10&offset=${ offset }&query=${ query }`;
    let url = `${ bareUrl }${ queryOpt }`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'X-Mashape-Key': '1tlN4L9Dhrmsh9PGTeJ5czyf7Xvzp1LiGx6jsnG3p7NCNfYl6P',
      }
    })
    .then((response) => response.json())
    .catch((err) => {
      return err;
    })
  },
  getRecipeInfo(mealId) {
    let url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${ mealId }/information?includeNutrition=true`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'X-Mashape-Key': '1tlN4L9Dhrmsh9PGTeJ5czyf7Xvzp1LiGx6jsnG3p7NCNfYl6P'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((err) => {
      return err;
    })
  },
  analyzeRecipeInfo(mealId) {
    let url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${ mealId }/analyzedInstructions?stepBreakdown=true`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'X-Mashape-Key': '1tlN4L9Dhrmsh9PGTeJ5czyf7Xvzp1LiGx6jsnG3p7NCNfYl6P'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson[0].steps;
    })
    .catch((err) => {
      return err;
    })
  },
  searchNutrients(recipeId) {
    let url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${recipeId}/summary`;
    return fetch (url, {
      method: 'GET',
      headers: {
        'X-Mashape-Key': '1tlN4L9Dhrmsh9PGTeJ5czyf7Xvzp1LiGx6jsnG3p7NCNfYl6P'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((err) => {
      return err;
    })
  },



  getRssFeed() {
    const GOOGLE_FEED_API_URL = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=-1&q=";
    let rssUrl = 'http://www.huffingtonpost.com/feeds/verticals/health-fitness/index.xml';
    let url = GOOGLE_FEED_API_URL + encodeURIComponent(rssUrl);
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((err) => {
      return err;
    })
  }

};

module.exports = api;
