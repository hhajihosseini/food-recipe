# food-recipe
This is a React-based food recipe app that allows users to search for recipes, view detailed recipes, and change the app's theme. The app uses a simple mock backend created with json-server to fetch recipe data.

#Features

Search Recipes: Allows users to search for recipes by name.

View Recipe Details: Displays detailed instructions for each recipe.

Create Recipes: Users can create and submit new recipes.

Theme Selector: Users can change the app's theme using color options.

Responsive Design: The app is responsive and works well on both desktop and mobile devices.

#Technologies Used

React: JavaScript library for building user interfaces.

React Router: For client-side routing between pages.

JSON Server: A simple mock backend to provide data for the app.

CSS: For styling the components.

Custom Hooks: For theme management and data fetching.

Installation Instructions

Clone the repository:

git clone https://github.com/your-username/food-recipe-app.git
cd food-recipe-app

#Install dependencies:

Install the required packages with npm:

npm install

#Run the app:

#Start the development server with:

npm start

The app will now be available in your browser at http://localhost:3000.

#Start the mock backend:

The app relies on json-server to serve mock data. In a separate terminal window, start json-server:

npx json-server --watch data/db.json --port 3001

This will run the mock backend server on http://localhost:3001.

#Usage

Search for Recipes: Use the search bar to search for recipes by name.

View Recipe Details: Click on any recipe card to view the recipe details, including ingredients, method, and cooking time.

Create a Recipe: Click on the "Create Recipe" button to add a new recipe to the app.

Change Theme: Use the color theme selector at the top right to change the app's theme.

#Folder Structure

The app has the following folder structure:

/src
  /assets
    - sun.svg
  /components
    - Navbar.js
    - RecipeList.js
    - SearchBar.js
    - ThemeSelector.js
  /context
    - ThemeContext.js
  /hooks
    - useFetch.js
    - useTheme.js
  /pages
    - Home.js
    - Create.js
    - Search.js
    - Recipe.js
  /data
    - db.json  # Mock data for the recipes
  App.js
  App.css
  index.js
  index.css

/components: Contains reusable components like Navbar, RecipeList, and ThemeSelector.

/context: Provides theme management using context.

/hooks: Custom hooks for fetching data and changing the theme.

/pages: Contains page components for different routes (Home, Create, Search, Recipe).

Screenshots


Home Page

Contributing

Feel free to fork the project and submit pull requests. Contributions are always welcome!

License

This project is licensed under the MIT License - see the LICENSE
 file for details.
