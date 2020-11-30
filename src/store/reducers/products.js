import data from '../../_mocks/data.json';

export default function products(state = data, action) {
  switch (action.type) {
    case 'SEARCH_TEXT':
      return Object.assign({}, state, {
        search: action.term,
      });
    default:
      return state;
  }
}

