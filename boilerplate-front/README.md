# Concat List Mockup

## Pre-requisites

To get started, you'll need to have the following requirements installed

- Node.js<sup>1</sup>
- npm

<sup>1</sup>See https://nodejs.org/

## Start webpack en dev mode
`npm run webpack`

## Start Node on dev mode using nodemon
(To run the system in dev mode you need to run webpack in parallel in another console, see previous command)
`npm run start:dev`

## Build App for deployment
`npm run build`

## Start application after build
`npm start`


## Definitions

    The front its separated in 3 parts: Server, Client and Shared, and almost all the code will be in the latest one.
    
    The Shared folder have:
        - flux All the logic of Redux: Actions, Reducers
        - repositories: from here you will call create the calls to the API's to retrieve the information
        - routes: The react-router routes of the app
        - views: All the files related with the visual part. (Styles, Layouts, React Components)
        
## Notes

    - You can find some React components with a static method called `getActions` 
      this method if defined need to return an array of actions that will be called
      on the server before rendering the page (To fully complete the isomorphic
      code with server side rendering)
    - We already integrate a middleware to handle promises inside the actions,
      if the action dispatched have a payload attribute and this attribute its
      promise, the reducer will get the result of the promime fullfiled.
    - The dispatch method of the redux store now return a promise that will be
      when the action promises are resolved, You can also catch the error here
      
If you have any question be free to email me: john.benavides@digitaldimension.es