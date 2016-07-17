{
  // Users
  user: {
    id: 'facebook|1020620286942176',
    email: 'aldog212@gmail.com',
    token: 'ksjdfasdhfiushefuihefisihfishdf'
  },

// Meals
  selectedDate: 'Mon, Jul 11, 2016',
  mealPlans: ['Sun, Jul 10, 2016', 'Sun, Jul 11, 2016'],
  mealPlansByDate: {
    'Sun, Jul 10, 2016': {
      date: 'Sun, Jul 10, 2016',
      breakfast: [534937, 524647],
      lunch: [534937],
      dinner: [534937],
      snacks: [534937, 524647],
      totalCalories: 2400,
    },
    'Mon, Jul 11, 2016': {
      date: 'Mon, Jul 11, 2016',
      breakfast: [534937, 524647],
      lunch: [534937],
      dinner: [534937, 524647],
      snacks: [534937],
      totalCalories: 1900,
    }
  },
  mealsById: {
    534937: {
      id: 534937,
      name: 'Garden Fresh Caprese Turkey Burger',
      image: "https://spoonacular.com/recipeImages/garden-fresh-caprese-turkey-burger-534937.jpg",
    },
    524647: {
      id: 524647,
      title: "Bacon Pineapple Burgers with Candied Jalepenos and Sweet Chili Mayo",
      image: "https://spoonacular.com/recipeImages/Bacon-Pineapple-Burgers-with-Candied-Jalepenos-and-Sweet-Chili-Mayo-524647.jpg",
    }
  },
  mealResults: [
    {
      id: 534937,
      title: "Garden Fresh Caprese Turkey Burger",
      image: "https://spoonacular.com/recipeImages/garden-fresh-caprese-turkey-burger-534937.jpg",
      imageType: "jpg"
    },
    {
      id: 524647,
      title: "Bacon Pineapple Burgers with Candied Jalepenos and Sweet Chili Mayo",
      image: "https://spoonacular.com/recipeImages/Bacon-Pineapple-Burgers-with-Candied-Jalepenos-and-Sweet-Chili-Mayo-524647.jpg",
      imageType: "jpg"
    }
  ],
  isFetching: false,
  error: null,
  pagination: 0,
  totalResults: 2,
  processingTimeMs: 136,

  // Grocery Lists
  groceryLists: [1, 2],
  groceryListsById: {
    1: {
      id: 1,
      ingredients: [1, 2]
    },
    2: {
      id: 2,
      ingredients: [1, 2]
    }
  },
  ingredientsById: {
    1: {
      id: 1,
      name: '1 pound of meat',
      completed: false
    },
    2: {
      id: 2,
      name: '5 bananas',
      completed: false
    }
  },
  isFetching: false,
  error: null,

  // Intolerances
  intolerances: [1],
  intolerancesById: {
    1: {
      id: 1,
      name: 'peanuts'
    }
  }
  isFetching: false,
  error: null,

  // Settings
  settings: {
    nutritionFacts: false,
    notifications: false,
    recommendations: false
  }
  isFetching: false,
  error: null,

  // Trends
  analysisFilter: 'FILTER_DAY',
  imageUri: 'kzbcksdbfj',
  userMealData: [],
  isFetching: false,
  error: null,
}
