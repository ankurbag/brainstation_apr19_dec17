# React With Axios Lab

To run this lab, do the following:

```
npm install
npm run start
```

The app has already included axios and sass inside package.json.

## Fetching Comments

- The starter contains `Comment` and `CommentList` components ready for use
- Make your GET request to https://project-1-api.herokuapp.com/comments?api_key=labKey

## Exercises

1. Identify the component that should make the `axios` request for comments from the API.
2. In its constructor, initialize the state to contain an empty array of comments.
3. Make sure the comments state is passed to the `CommentsList` as a prop
   - Use the appropriate lifecycle method to initiate the Axios request.
4. Once you have your data from the Axios response, use `setState` to update the state of your parent component.
5. Test your work by checking that the website renders the comments fetched from the API.

## Diving Deeper

1. Go to this [API Documentation Page](https://project-1-api.herokuapp.com/) and check the available methods.
2. In the `Comment` component output comment likes in JSX and add click event handler on a root element that will trigger an event handler function passed by a parent (you will want to add a new prop to the `Comment` component).
3. Make a `PUT` request to update number of likes for that comment and make sure that the app re-renders the new data.

**Please note that the correct method for using a `PUT` request for likes is as follows: `/comments/:commentId/like`**
