import { CREATE_STORY } from '../actions/choiceActions';


export const initialState = {
  name: '',
  tool: '',
  adjective: '',
  animal: ''
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_STORY: {
     
      return {
        ...state, 
        ...action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;




