In this project i used yarn for installs of libraries but you can use npm, for this kind of project it is ok to mix them.

## Available Scripts

In the project directory, you can run:

### `npm install or yarn`

This is a must step, without this step you wont't be able to start the project, it installs all the necessary libraries so the project can work normally.Aftar this step u can start the apllication with npm start or yarn start

### `npm start or yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test or yarn test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `About my work and the project`

Because this is a assigment prject I wanted to shop my work, so I didn't use any libraries except the ones for routing and state management, because of that it took me a little longer than usually.
I started with desktop first so I used media queries with max-width, I used scss because I like the reusable features of it, so you will need node-sass.
I didn't use any libraries for UI like modal libraries I wanted to make everything myself.

### `Scss and styling`

As you can see there is a global folder with scss mixins, viriables and colors I tried raplicate a normal workflow.
In a real project u would put all colors in colors.scss and then it would be easy when u need to change a color, I didn't put all the colors in it for this project .

### `Modal`

I made the modal reusabel so that u can wrap your content with it and it will show like a modal.
Because the modal is different on mobile and tablet/desktop I made it on mobile look like a page so to close the modal on mobile you will need to go in menu and go back to home page.

### `Reusable components`

You will see that I tried to reuse as much as posible, because of that u have shared folder where u can see that i have userModal component in that component is register,login,profile all together so i just used one component to display them, the same with forms I made a reusable Input and, a function.

### `Error handling`

You can try this one on registration and login where you will get listed errors. I didn't put a error if the server fails or there is no internet when u fetch the flowers, i just stop the spinner on error, u would ussually use something like, a toast to display it.

### `Problems with the project`

I had 2 problems with this project the first was the user data, when u get the user data with auth_token u just get back first name and last name, but in design I should display these two and email,date of birth so I need do a little hack so display the email, but i couldn't display the date of birth.
The second problem is with your delete method on fav flower it has cors problem so i could't implement delete fav flower.

Regards,
Bakir Cicvara.
