# Flashcards Starter Challange Codecademy

## About

Project developed dring the Full-Stack Engineer Path from the codecademy curriculum.

## Goals

Test the React-Redux and Redux Tool Kit material learned.

- configure individual slices modules using <b>createSlice()</b>; ('@reduxjs/toolkit')
- configure a store module wth <b>configureStore()</b> and the individual slice modules. ('@reduxjs/toolkit')
- use <b>useSelector()</b> in conjunction with the defined selectors in each individual state slices to access the <b>Store</b>; ('react-redux)
- create <b>selector</b>'s to access the states for manipulation; ('react-redux')
- with <b>useDispatch()</b> dispatch actions to the store to update rendering; ('react-redux')
- understand the view => middleware => Action (dispatch) => view Redux workflow

## To Run

Run `npm start` in the project root and the app will be available on port 3000.

## State

The app's state is totally normalized, with slices for topics, quizzes, and cards.

## Routes

- `/new-topic` – form to create a new topic
- `/topics` – index of all topics
- `/topics/:topicId` – page for an individual topic
- `/new-quiz` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz

## To Test

1. Create topics
2. Create quizzes
3. Visit the page for an individual quiz and flip the cards over
