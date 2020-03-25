This project was created using [Create React App](https://github.com/facebook/create-react-app) and [swapi starwars api](https://swapi.co/). For designing the layout
I have used [Photopea](https://www.photopea.com/), Icons credit goes to [FlatIcon](https://www.flaticon.com/), Fonts have been used from [Fonts2u.com](Fonts2u.com) & [google fonts](https://fonts.google.com/).

## libraries & fonts used
1. create-react-app
2. react-select
3. recharts
4. redux (state management)
5. axios

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

One app is started on port 3000, User will see a dropdown where all species list
is available. I am showing a loader until the page loads the species list. 'There are
no people yet.' text is showing when there are no people (until user select a specie).
Once user selects a specie, a graph is shown where blue dot indicates people. By hover
on the blue dot user could see Name & Gender. I am using Promise.all to call all people
apis and then displaying the graph. Meanwhile I am also showing a loader until people
data is loaded completely. If for any people Mass or Height is 'unknown' or undefined,
I am not showing that people's data in the graph. In this case I am showing 'There is only pokemon here' text.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
