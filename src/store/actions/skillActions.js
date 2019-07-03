export const CREATE_SKILL = "CREATE_SKILL";
export const UPDATE_SKILL = "UPDATE_SKILL";
export const FILTER_SKILLS = "FILTER_SKILLS";
export const DESELECT_FILTER = "DESELECT_FILTER";

export const createSkill = skill => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("skills")
      .add({
        userId: skill.userId,
        projects: [],
        name: skill.name
      })
      .then(() => {
        dispatch({ type: CREATE_SKILL });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const updateSkill = skill => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("skills")
      .doc(skill.id)
      .update({
        name: skill.name
      })
      .then(() => {
        dispatch({ type: UPDATE_SKILL });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const filterSkills = skills => {
  return dispatch => {
    let filteredSkills = [...skills];
    filteredSkills.sort((a, b) =>
      a.projects.length < b.projects.length ? 1 : -1
    );

    dispatch({ type: FILTER_SKILLS, payload: filteredSkills });
  };
};

export const deselectFilter = () => {
  return dispatch => {
    dispatch({ type: DESELECT_FILTER });
  };
};
