# React-Redux

A simple React + Redux project to retrieve, render data returned from an API.

App has one primary component "Chat" which pulls data from two different APIs (getMembers & getMessages) and displays Chat message. Mergeing of Members and Messages to create a "Chat item" can be done in the component itself, but that makes the "Chat" component a bit heavy. Data logic such as merging of data from differtent sources should be outside of the Component. One option is to use library like [Reselct](https://github.com/reduxjs/reselect) and abstract out merging logic into it.

This App shows another approach of merging the data via composition action, idea is to pull data from getMembers and getMessages and then dispatch an action to build the chat datasource. 

## Test

App also demonstrates numerous ways to test same things:

1) chat.test.js: Snapshot testing using renderer, this is can be classified as a proper unit test of the component rendering as we need to pass everything as props to the component
2) App.test.js: Test using mount, it's nearly an End-to-End test of the component, idea is we only mock out external API calls and nothing else
3) App-snapshot.test.js: Combination of above two!. Only mock out APIs call and verify the full HTML snapshot that is rendered by the component

## Commands

- **npm start**: Runs the web application in developer mode
- **npm test**: Executes Jest tests that have the `.test.js` extension

