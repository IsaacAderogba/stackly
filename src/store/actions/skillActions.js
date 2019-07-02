export const CREATE_SKILL = "CREATE_SKILL";
export const UPDATE_SKILL = "UPDATE_SKILL";

export const createSkill = (skill) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('skills').add({
            userId: skill.userId,
            projects: [],
            name: skill.name
        }).then(() => {
            dispatch({ type: CREATE_SKILL})
            console.log('skill added');
        }).catch((err) => {
            console.log(err);
        })
    }
} 

