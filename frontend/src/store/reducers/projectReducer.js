const initState = {
  data: null,
  realtime: null
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('create project', action.project);
      return state;
    case 'GET_DATA':
      return {
        ...state,
        data: action.data
      };
    case 'GET_REALTIME':
      return {
        ...state,
        realtime: action.realtime
      };
    default:
      return state;
  }
};

export default projectReducer;
