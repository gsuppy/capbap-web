# Capitol Hill Baptist Church Web App

This is a progressive single page app bootstrapped using Create-React-App. The hope was to create an app for members of my church so they could better interact with one another, especially during this time of COVID-19. Obviously, creating an entire web app with multiple complex elements is not an easy feat and I was not able to complete everything, mainly the members only section (you can still explore the menu below without technically logging into it).

If you would like to run this code locally on your computer, please run `yarn start` from the root of the capbap-web directory.

Or if you would like to access via your browser, navigate to https://capbap-web.herokuapp.com/

# Explore the App

Many of the elements were incorporated with the help of styling from React Material UI.

## Login

Please login via email, Google, or Facebook account. This will technically give you access to the /members page, but that is still a WIP. You can manually navigate to /members to check if your login was successful. The profile button on the top right allows you to click on it and logout if you wish. Additional profile settings are WIP.

## Pages - Home, About, Listen, Pray, Calendar, Donate, Contact

The home, about, and contact pages are mainly static pages taken from details of the existing website for my church. Most of that will not be very interesting from a technical perspective, but all of the pages can be navigated to by clicking out the appbar menu on the bottom of the page.

Listen integrates with the Castbox FM iFrame that is available to stream sermons from our church.

Calendar is an integration of React Calendar. Unfortunately, no real church events have been imported yet, so that is a WIP.

Pray is a custom made bulletein board of sorts that dynamically takes the name of the user logged in (if you logged in via Firebase Auth) and allows you to post a prayer request for anyone else to read.

## WIP Pages - Members

In the source code, you can see that there is a pages/members directory with many WIP pages that I was planning for members only. Those are WIP and hopefully will be finished for a members only section after successful authentication.

# Available Scripts (Documentation available from Create-React-App)

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
