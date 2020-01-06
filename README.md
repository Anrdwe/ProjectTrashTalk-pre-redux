# Trashtalk
Access the site [here](https://trashtalk-pre-redux.netlify.com/)

# TrashtalkAPI
https://github.com/Anrdwe/TrashTalkAPI

## Folder Structure
> <strong>/components/</strong>
> - files that only renders the user interface
> - <strong>files</strong>
>> - BoardComponent.js
>> - BoardingLoadingComponent.js
>> - LoadingComponent.js
>> - Logo.js
>> - Nav.js
>> - PostComponent.js
>> - SignupComponent.js <br>
> <strong>/styles/</strong>
> - css and image files <br>
> <strong>/util/</strong>
> - files that don't have state, nor render anything
> - <strong>files</strong>
>> - AuthRoute.js
>> - UnauthRoute.js
> <strong>/pages/</strong>
> - files that contain state and functions
> - <strong>files</strong>
>> - About.js
>> - Board.js
>> - Home.js
>> - Login.js
>> - Post.js
>> - Signup.js

## Challenges:
>### Login authentication. Keeping track and updating the authenticated state in App.js depending on the state of the authentication token which can expire.
>- Problem: The authenticated state is inside the App.js, but i can't find a way to update it when someone logs in.
>- Reason why i want to implement this?
>- - Only logged in Users are allowed to post on the board, if the User is not logged and authenticated = false, '/post' path should lead them to '/login'. If the User is logged in and authenticated = true, the '/login' path should lead them to '/board'.
>- Possible solutions:
>- - 1. React Redux
>- - 2. Passing a setAuthentication function into a custom <Route> component that will then pass the function to the Login.js component.
>- - 3. Remove the authenticated state and check if a token exists or expired in a custom <Route> component to redirect the user accordingly.
>- - 4. Redirect from a page depending on the token.
>- - 5. Remove the authenticated state completely and remove logins.

>### Keeping track of the Id of a Post to upload an image to.
>- Problem: the post request i made in the API to upload an image requires the Id of a Post in the path '/post/${postId}/image'.
>- Solution:
>- - 1. Have the handleSubmit function do 2 requests 1 after the other async. Change the '/post/' post request to return the postId in the response data object, then use that postId for the second post request, '/post/${postId}/image'.

## TODO:
>### Comments
>### Mobile sidebar nav
>### Scaling sizes to fit mobile 
>### Delete Post
>### Edit Post
>### Mark Post as Picked up or something to indicate its completed
>### Add more user information ex: website link, address of orgarnization, etc.
>### Limit number of posts shown on '/board', Add button to display more
>### Add more information to post, ex: pickup location
>### Sort Posts on '/board' by location and organization
