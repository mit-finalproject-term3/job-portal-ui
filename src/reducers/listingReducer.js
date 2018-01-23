export default function listingReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_ALL_LISTINGS':
      return action.payload;
    default:
      return state;
  }
}
