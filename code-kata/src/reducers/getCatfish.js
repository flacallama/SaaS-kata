let initialState = []


export default (state = initialState, action) => {
  switch (action.type) {

    case "GET_CATFISH_PENDING":
      return state;
    case "GET_CATFISH_FULFILLED":
    console.log('GET_CATFISH_FULFILLED', action.payload.data);
      return [
      ...state, action.payload.data
      ]

    default:
      return state;
  }
}
