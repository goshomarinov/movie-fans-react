React Final Project
React Movie Fans is like discussion forum
Project Description

The Movie Fans app contains a collection of movies. Users can view movie details,write comments, like and unlike movie.

    Home: Any user can view the newest three posts,as well as the movie details.

    Pagination: Pagination of the movie collection is added and applied to the catalog page.

    Search: Search functionality is added to the app. Movies are filtered by title.

    Creating / Editing / Deleting Movies: Movies in the app are created by authenticated users only. Owner of the post can edit movie details, delete a movie from the collection. Each movie has a title, image url, year, a short description, and likes.

    Liking / Unliking Movie: To like / unlike a movie the user should login first. Anonymous users can't see any buttons on details page or functionality, only info for the movie and comments.

    Comment / Edit Comment / Delete Comment: To comment a movie the user should login first. Only the owner of the comment can edit or delete his comment.

    Registration / Login / Logout: Users can register providing email and password. Upon registration users are redirected to Home. Guests can see Login/Register buttons but for logged in users is other way around.

Public Part:

    The public part of the Book Store is visible by any user without authentication:

     Home Page listing newest three movies
     Login
     Register
     Search
     Catalog with details button for every movie and pagination
     Details Page listing all movie details (title, image url, year, description, number of likes and comments if any).

Private Part (Logged in users only)

    Home Page listing newest three movies
    Search
    Catalog with details button for every movie and pagination
    Add Movie
    Logout
    Details for Movie:
       Info:
          Title
          Image url
          Year
          Description
          Likes
          Comments
        Buttons:
          Comment:
              User can comment as much as he likes.
              Edit / Delete Comment:
                  Only owner of the comment can edit or delete it.
          Like:
              User can like movie.
          Dislike:
              Dislike button shows only if user already liked movie.
          Edit / Delete Movie:
              Only owner of the movie can edit or delete it.


How to run this project?

Front-end: React.js

npm install

npm run start

Back-end: SoftUni Practice Server

Clone Repository https://github.com/softuni-practice-server/softuni-practice-server
npm install

node server.js
          
