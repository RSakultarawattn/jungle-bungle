import { GET_STORY } from '../actions/choiceActions';
import { JungleHer } from '../components/stories/JungleHer';
import { JungleHim } from '../components/stories/JungleHim';
import { JungleThey } from '../components/stories/JungleThey';


export const initialState = {
  story: {}
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_STORY: {
      const story = { ...state.story };
      story[JungleHer, JungleHim, JungleThey] = action.payload;

      return {
        ...state, 
        story
      };
    }
    default:
      return state;
  }
};

export default reducer;
