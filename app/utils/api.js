'use strict';

import Config from 'react-native-config';

let api = {

  searchRecipe(query, queryOffset) {
    let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?&query=';
    let queryOpt = '&limitLicense=false&number=10';
    let offset = `&offset=${queryOffset}`;
    return fetch(url + query + queryOpt + offset, {
      method: 'GET',
      headers: {
        'X-Mashape-Key': Config.FOOD_API_KEY
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
  getRecipeInfo(mealId) {
    let url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${mealId}/information?includeNutrition=true`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'X-Mashape-Key': Config.FOOD_API_KEY
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
  searchNutrients(recipeId) {
    let url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${recipeId}/summary`;
    return fetch (url, {
      method: 'GET',
      headers: {
        'X-Mashape-Key': Config.FOOD_API_KEY
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
    let rssUrl = 'http://www.medicinenet.com/rss/general/exercise_and_fitness.xml';
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
