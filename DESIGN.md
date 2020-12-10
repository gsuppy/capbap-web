#Design Explanation
Deverloper: Kevin (Ji Seup) Kim done for a CS50 Final Project
gsuppy - Github

##Libraries and APIS used:
-React for Frontend framework (Create-React-App for bootstrapping)
-React Router for client side routing
-React Material UI for styling and some React components
-React Calendar
-Yarn/npm for package manager / dependencies
-Firebase (Auth, Firestore)
-Stripe
-Castbox FM Podcast Integration
-Heroku for deployment (https://capbap-web.herokuapp.com/)
-Github for code repo (https://github.com/gsuppy/capbap-web)

##Design philosophy
This was a difficult project to execute on. A lot of the tools I utilized for the first time in development. React had a lot of elements that took some time to pick up on. React-Router was a great way to implement client side routing for easy navigation between pages, but was difficult to use especially in conjunction with authnetication.

Firebase was probably the most difficult integration for this project. Authentication was a hairy monster to conquer and took many hours before successful integration into my web app. Firestore was the backend database that was hosted in the cloud. It held the data from the prayer app and hopefully will be used for the integration of the profile information in the future. The most difficult part here was the async elements of the requests that go out to the database and authentication APIs. I had a lot of difficulty rendering certain elements and figuring out how to resolve the promises returned from async requests (almost went down towards callback hell).

Stripe API integration was surprisingly well documented and easy to use, but still took some time to integrate successfully. You should be able to enter a real credit card and donate money. Castbox FM was an easy iFrame integration that was surprisingly performant for an iFrame. I had no issue integrating it into React.

Initially I was going to use Firebase to deploy and host the app, but I had some issues and ended up going down the Heroku route which turned out much simpler. The app is now publicly hosted on the URL listed above. There was so much more I wish I could have done, but this app turned out to be an ambitious undertaking especially with unfamiliar technology and I spent way too much time debugging async requests, routing/redirects, state management and rendering in React, and many other tall tales no other soul will truly understand.

This app was a result of my second pivot for the final project after spending hours on another idea involving machine learning, Tensor Flow, and create a mobile app in Swift. I hope you would understand that as a result it has some _ahem_ rough edge especially in terms of styling and design. Thanks so much for reading and an amazing semester in CS50!
