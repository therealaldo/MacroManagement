'use strict';

import Config from 'react-native-config';
let parseString = require('xml2js').parseString;

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
  };



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
  };



  getRssFeed() {
    let url = 'http://www.medicinenet.com/rss/general/exercise_and_fitness.xml';
    return fetch(url)
    .then((responseXml) => {
      parseString(responseXml, (err, result) => {
        return result;
      })
    })
    .catch((err) => {
      return err;
    })
  };

};
