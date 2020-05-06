const initState = {
  user: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS': {
      return {
        ...state,
        user: {
          ...action.payload.data,
        },
      };
    }

    case 'GET_USER': {
      return {
        ...state,
        user: {
          ...action.payload.data,
        },
      };
    }

    case 'SIGN_OUT': {
      return {
        ...state,
        user: null,
      };
    }

    default:
      return state;
  }
};
