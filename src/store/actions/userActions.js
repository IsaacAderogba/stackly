import { storage } from "../../config/fbConfig";
export const IS_DARK = "IS_DARK";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const UPDATE_FAILED = "UPDATE_FAILED";

export const setDarkTheme = darkTheme => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .doc(darkTheme.userId)
      .update({
        isDark: darkTheme.value
      })
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("failure");
      });
  };
};

export const updateProfile = profile => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const imagesPath = `profile/${profile.id}`;

    if (profile.image) {
      firebase
        .uploadFile(imagesPath, profile.image)
        .then(uploadTaskSnapshot => {
          uploadTaskSnapshot.uploadTaskSnapshot.ref
            .getDownloadURL()
            .then(res => {
              firestore
                .collection("users")
                .doc(profile.id)
                .update({
                  firstName: profile.firstName,
                  lastName: profile.lastName,
                  image: res
                })
                .then(() => {
                  dispatch({ type: UPDATE_PROFILE });
                })
                .catch(() => {
                  dispatch({ type: UPDATE_FAILED });
                });
            });
        });
    } else {
      firestore
        .collection("users")
        .doc(profile.id)
        .update({
          firstName: profile.firstName,
          lastName: profile.lastName
        })
        .then(() => {
          dispatch({ type: UPDATE_PROFILE });
        })
        .catch(() => {
          dispatch({ type: UPDATE_FAILED });
        });
    }
  };
};
