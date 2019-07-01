export const IS_DARK = 'IS_DARK';
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const UPDATE_FAILED = "UPDATE_FAILED";

export const getTheme = () => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {

    }
}

export const updateProfile = (profile) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firestore = getFirestore();
      firestore.collection('users').doc(profile.id).update({
          firstName: profile.firstName,
          lastName: profile.lastName,
      }).then(() => {
          dispatch({ type: UPDATE_PROFILE })
      }).catch(() => {
          dispatch({ type: UPDATE_FAILED })
      })
    }
}
