# Board game
This is my version of simple board game. Hope you gonna enjoy!

## Game rules
Before game starts player paws is not visible, because it's outside the boaard.
In every turn you click in `DICE ROLL` button. After you do that, the game draws a number from 1-6. The number is presented as animated dice. Then player pawn moves forward acording to result on dice.
The board contains special field.
When player reach `field 12` he looses the game and special sound effect is played. This is only one rule that allows to lose the game.
Another special field is `field 19`. When player reach this field his paws is moved into `field 11`.
Player wins the game when he reaches `field 20` called `finish`. Then player is close to this field and he's result on dice is greater than board size. Target position of his paws is calculated as fallows: distance to reach `field 20` is subtracted from dice roll and difference between this two parameters is added into current position of player's pawn.
Of course when player wins special effect is played also.


After win or lose the game, player can hit `PLAY AGAIN` button and game starts again. But before he do that, he can read special message from popup window.
Content of this message depends on game result. If you lose, you can read some encouragement but of you win aditional iformations are displayer to you. Like number of dice rolls and avarage dice result.

## How to play

You have 2 ways to play:
1. Visit [this page](https://mariuszszlachta.github.io/board-game/)
2. Use development mode (instructions bellow)

## How to develop

After cloning this repo from github and unziping downloaded file:

1. You need to open terminal inside unziped directory.
2. Then you need to run `npm install` command and wait until it completes.
3. Then commands listed below are available for you, and project is ready to develop.

**Because this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) you can use propably common scripts to you.**

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
