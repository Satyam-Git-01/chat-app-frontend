# Getting Started with Create React App

This project is Frontend code implementation of Full Stack Chat APP using React and Nest JS. It is totally written in TypeScript.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Details
There are 3 Components and 1 Service
1. ChatWindow Component -> This is the main component inside APP component which will contains all the other component. it will handle all the UI changes and messages.

2. MessageBubble Component -> This is primarly designed to show the message bubble depending on the the sender value.
3. Message Input Component -> This contains only a input element to send messages and method as a prop to set value.

Service->
1. socketio Service-> This is used to maintain the duplex communication with NEST server on port 3000.