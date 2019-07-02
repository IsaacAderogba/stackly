export const CREATE_PROJECT = "CREATE_PROJECT";

export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        userId: project.userId,
        name: project.name,
        url: project.url,
        skills: project.skills,
        color: project.color
      })
      .then(res => {
        dispatch({ type: CREATE_PROJECT });
        project.skills.forEach(skill => {
            console.log(skill);
          firestore
            .collection("skills")
            .doc(skill.value)
            .update({
              projects: [...skill.oldArray, res.id]
            })
            .then(() => {
              console.log("skill updated");
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
