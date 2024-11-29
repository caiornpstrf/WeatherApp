# WeatherApp

This is a React Native app that fetches forecast data from an API and renders it in a single screen.

# Building the app

## Step 1: Installing dependencies

Run `yarn` to install all the necessary dependencies, then, to correctly install pods, run the following command:

It might be necessary to install to install `ios-deploy` to avoid using XCode to build the app for a Simulator. Just run the following command:

```bash
brew install ios-deploy
```

Finally, you must make sure all the pods are installed. So make sure to run the following command:

```bash
cd ios
pod install
cd ..
```

## Step 2: Start the Metro Server

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

## Step 3: Start your Application

Run the appropriate command for the platform

```bash
yarn android
yarn ios
```

# Development notes

- Only one endpoint is implemented: `/forecast.json`;

- The app doesn't include any implementation for `react-navigation` as it is not necessary.

- A `.env` file was provided as an example, the app it totally based on the [weatherapi](https://www.weatherapi.com/docs/). To use the app it is necessary to setup an `API_URL` and `API_KEY`;

- The enviroment config is handled by `react-native-config`;

- `@testing-library/react-native` was chosen for overall JS tests. I find it to be cleaner than `test-renderer`;

- `lodash` was added solely to handle strings. Didn't want to setup any localization library to save time. Instead I implemented my own solution, which is `useStringHandler`;

- `styled-components` and `styled-system` were picked to save time, since I am more used to developing with it;

- __Total project time is between 6 to 7 hours__
