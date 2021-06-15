### Heroku url
https://we-transfer-progress.herokuapp.com/demo

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Install the dependencies


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.



## Other details
- The intention while development was to make is modular as possible
- keeping a good 'Separation of concerns'
- Breaking in multiple re-usable layers with loosely coupled data for easier management.
- I have used a boiler-plate of my own
- i18n support added, need improvement though
- Radial progress component was created to show progress
- For internationalization, i18next plugin has been used


## Code details in `SRC` directory


### `BasicComponents`
Contains the reusable basic-components (e.g. Loader, progress, card) that can be used across the app. The basic components are single components that can be used in combination to achieve some UX. e.g progress-bar, loader, buttons, input etc...
Each component directory has its own
- index
- style
- mobile-style if mobile optimisation is needed


### `Components(Widgets)`
Contains the reusable components built by combination of basic-components. The components are loosely coupled entities and doesn't manage any state of their own. They just use the state of the app passed to demonstrate their behaviour.
Each component directory has its own
- index
- style
- mobile-style if mobile optimisation is needed



### `Pages`
Contains the pages that are loaded with different URL. A Page is logical combination of Components(Widgets) and BasicComponents managed with app state (react-state/redux/mobx) as per the state-management used.
Each Page directory has its own
- index
- style
- mobile-style if mobile optimisation is needed
- actionCreators
- actionDispatchers
- reducers
Kept it this way as it makes easy to navigate to the file and debug.



### `Router`
Routing logic of app. At present only search page is available, other path will lead to 404.


### `Store`
Global store configuration of the app


### `Style`
Global styles applicable on entire app


### `Utilities`
Contains various files used commonly across the app

    - `Utils`: Library of utility functions used across app


### `App.js`
    - Contains the App header and content area where different pages are rendered.


### `i18n.js`
    - Configuration for i18n settings as per i18next library.


### `index.js`
    - Entry point for the app wrapped around the provider.

### `__tests__`
    - contains the unit-test cases for code following the exact same directory structure as followed by code in src directory
    - basic test cases are written with line coverage of 80% approx
    - complicated teste cases for stae-updates and other logic is not added yet.
    - mostly modules are tested in isolation.
