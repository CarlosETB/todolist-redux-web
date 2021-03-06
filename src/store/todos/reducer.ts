export default function todos(state = [], action: any) {
    switch (action.type) {
      case 'ADD_TODO':
        return [ ...state, {
          id: Math.random(),
          text: action.text,
        }]
      default:
        return state;
    }
  }