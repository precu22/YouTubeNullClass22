//updated by precious 09/07 22.26
// import axios from "axios";
const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_CURRENT_USER':
      return action.payload;
    case 'ALLOCATE_POINTS':
      return {
        ...state,
        result: {
          ...state.result,
          points: (state.result.points || 0) + action.payload.points,
        },
      };
    default:
      return state;
  }
};

export const allocatePoints = (userId, points) => ({
  type: 'ALLOCATE_POINTS',
  // payload: { points },
  payload: { userId, points },
});

export default currentUserReducer;

// initial working code ends here


//updated on 22.31 10/07 - to connect to mongodb
// import axios from "axios";

// const currentUserReducer = (state = null, action) => {
//   switch (action.type) {
//     case 'FETCH_CURRENT_USER':
//       return action.payload;
//     case 'ALLOCATE_POINTS':
//       return {
//         ...state,
//         result: {
//           ...state.result,
//           points: (state.result.points || 0) + action.payload.points,
//         },
//       };
//     default:
//       return state;
//   }
// };

// export const allocatePoints = (userId, points) => async (dispatch) => {
//   try {
//     await axios.patch(`http://localhost:5500/user/updatePoints/${userId}`, { points });
//     dispatch({
//       type: 'ALLOCATE_POINTS',
//       payload: { userId, points },
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// export default currentUserReducer;


//updated by precious on 12/07:
// src/reducers/currentUser.js
// const currentUserReducer = (state = null, action) => {
//   switch (action.type) {
//     case 'FETCH_USER':
//       return action.payload;
//     case 'UPDATE_USER_POINTS':
//       if (state && state.result._id === action.payload.userId) {
//         return {
//           ...state,
//           result: {
//             ...state.result,
//             points: (state.result.points || 0) + action.payload.points,
//           },
//         };
//       }
//       return state;
//     default:
//       return state;
//   }
// };

// export default currentUserReducer;


// //update to connect to mongodb
// const currentUserReducer = (state = {}, action) => {
//   switch (action.type) {
//     case 'ALLOCATE_POINTS':
//       return {
//         ...state,
//         points: state.points ? state.points + action.payload.points : action.payload.points,
//       };
//     case 'SET_CURRENT_USER':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export const allocatePoints = (userId, points) => ({
//   type: 'ALLOCATE_POINTS',
//   payload: { userId, points },
// });

// export default currentUserReducer;
