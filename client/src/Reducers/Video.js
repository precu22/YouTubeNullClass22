//on 02/08
const initialState = {
  data: null,
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_VIDEOS':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default videoReducer;

