Redux and Hooks

Redux itself just deals with JavaScript objects, so it provides the store, deals with actions and action creators, and handles reducers.
React Redux provides connectors in order to connect Redux to our React components.
Redux Thunk is a middleware that allows us to deal with asynchronous requests in Redux.

Steps in developing a Redux application:
1) Define the state
2) Define the actions that are going to change the state
3) Define the reducer functions which carry out the state modification

Action Creators
Synchronous action creators: These simply return an action object
Asynchronous action creators: These return an async function, which will later dispatch an action

redux-thunk
This middleware checks if an action creator returned a function, rather than a plain object, and if that is the case, it executes that function, while passing the dispatch function to it as an argument.
Using the redux-thunk middleware, we can now dispatch functions that will later dispatch actions, which means that our asynchronous action creator is going to work fine now.

Redux reducers differ from Reducer Hooks in that they have certain conventions:
1) Each reducer needs to set its initial state by defining a default value in the function definition
2) Each reducer needs to return the current state for unhandled actions

Container components use a connector to connect Redux to a presentational component. This connector accepts two functions:

Container components use a connector to connect Redux to a presentational component. This connector accepts two functions:
1) mapStateToProps(state): Takes the current Redux state, and returns an object of props to be passed to the component; used to pass state to the component
2) mapDispatchToProps(dispatch): Takes the dispatch function from the Redux store, and returns an object of props to be passed to the component; used to pass action creators to the component


Redux Hooks

useDispatch
The useDispatch Hook returns a reference to the dispatch function that is provided by the Redux store. It can be used to dispatch actions that are returned from action creators.

useSelector
The Selector Hook. It allows us to get data from the Redux store state, by defining a selector function.

const result = useSelector(selectorFn, equalityFn)

selectorFn is a function that works similarly to the mapStateToProps function. It will get the full state object as its only argument. The selector function gets executed whenever the component renders, and whenever an action is dispatched (and the state is different than the previous state).