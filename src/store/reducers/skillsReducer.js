import * as types from "../actions/skillActions";
import * as projectTypes from "../actions/projectActions";

const initState = {
  filteredSkills: [],
  filterState: false
};

const skillsReducer = (state = initState, action) => {
  switch (action.type) {
    case types.FILTER_SKILLS:
      // update filter skills and filter state
      return {
        ...state,
        filteredSkills: action.payload,
        filterState: true
      };
    case types.DESELECT_FILTER:
      return {
        ...state,
        filterState: false,
        filteredSkills: []
      };
    case types.CREATE_SKILL:
      return {
        ...state,
        filterState: false,
        filteredSkills: []
      };
    case types.UPDATE_SKILL:
      return {
        ...state,
        filterState: false,
        filteredSkills: []
      };
    case projectTypes.CREATE_PROJECT:
      return {
        ...state,
        filterState: false,
        filteredSkills: []
      };
    case projectTypes.UPDATE_PROJECT:
      return {
        ...state,
        filterState: false,
        filteredSkills: []
      };
    default:
      return state;
  }
};

export default skillsReducer;
