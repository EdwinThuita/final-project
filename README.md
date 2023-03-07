Introduction:
Movie Finder App:
This is an app that allows the user to register and login and add a new movie among other functionalities such as:
User can view all the added movies.
User can view all the available movies.
A user can search a movie through title or year.
A user can be able to update details of the movie they have added.
A user can be able to remove details of the movie they have added.
A user can not update or delete movies they have not added.
A user has to be logged in to use the application.
Created Using:
This is an app that has been created using:
React: For Front end and User Interface (UI)
Ruby- Sinatra- Gem- For backend and server interaction
Steps followed to complete the application:
Designed the UI: Before starting the development, I first planned out the user interface (UI) of my application. I Sketched out a few designs to get an idea of how I wanted the app to look and function.
Set up the backend: I then Began setting up the backend server using Sinatra. This is a lightweight web framework written in Ruby. I used a tool called Bundler to manage my application's dependencies.
Create APIs: The backend of my application needed to expose a few endpoints (APIs) that can be used by the frontend. For example, I needed to create an API that allowed the user to search for movies based on a user's query. I used a Ruby libraries known JSON to make HTTP requests to external movie databases (e.g. IMDb) and parse the JSON response.
Set up the frontend: Next, I set up my React project using create-react-app. This gave me a basic React application with a development server and a few other useful tools.
Create components: In React, I created reusable UI components that can be used throughout my application. For example, I created a MovieCard component that displayed information about a single movie (e.g. title, poster image, rating, etc.).
Connect to the backend: Using the fetch API or a library like axios, I made requests to my backend API endpoints and retrieved data. I then updated my React components with the retrieved data.
Build the search functionality: Finally, I implemented the search functionality in my application. When a user enters a search query, he/she can make a request to my backend API and retrieve a list of movies that match the query. The results are displayed in the search results to the user in a list or grid view.
Running the application:
The best way to use the application is on a web browser, by following these simple steps:
Click on the deployed link: https://movie-finder-six-delta.vercel.app/
Testing the functionalities of the application:
Try out each of the following functions:
User can view all the added movies.
User can view all the available movies.
A user can search a movie through title or year.
A user can be able to update details of the movie they have added.
A user can be able to remove details of the movie they have added.
A user can not update or delete movies they have not added.
A user has to be logged in to use the application.
Congratulations, you have successfully tested out the application.
Conclusion:
I have successfully made an application that involves the front end and the backend and is able to perform CRUD operations. For more information about how the backend operates, please visit this link:

License:
Apache 2.0
movie-finder-six-delta.vercel.appmovie-finder-six-delta.vercel.app
React App
Web site created using create-react-app
1:11
Above readme for my front end
1:11
Introduction
my-sinatra-app
In the app above, we require the sinatra and json libraries. We also define a function search_movies that takes a query and returns an array of movie data.
Function
We define two routes: a root route that just displays a welcome message, and a /movies/search route that takes a query parameter and returns JSON data of movies that match the query.
Running the app:
To run the app, we simply run ruby app.rb in the terminal, and then visit http://localhost:4567 in our browser to see the welcome message.
To search for movies, visit http://localhost:4567/movies/search/ in your browser, replacing with your actual search query.
Conclusion:

License
Apache 2.0
1:12
Above the readme for my sinatra back end app