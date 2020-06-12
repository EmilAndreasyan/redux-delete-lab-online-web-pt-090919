export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {id: Math.random(), name: action.name}
      return { ...state, bands: [...state.bands, name] }
      
    case 'DELETE_BAND':
      return {bands: state.bands.filter(band => band.id !== action.payload)}
    default:
      return state;
  }
};
