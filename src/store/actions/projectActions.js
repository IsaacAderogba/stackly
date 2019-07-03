export const CREATE_PROJECT = "CREATE_PROJECT";
export const UPDATE_PROJECT = "UPDATE_PROJECT";

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
          firestore
            .collection("skills")
            .doc(skill.value)
            .update({
              projects: [...skill.oldArray, res.id]
            })
            .then(() => {})
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

export const deleteProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .doc(project.id)
      .delete()
      .then(() => {
        // Iterate over each skill we have and see if it has THIS project's id in its projects array
        project.allSkills.forEach(offlineSkill => {
          let foundProject = offlineSkill.projects.find(
            offlineProject => offlineProject === project.id
          );
          // if it does have the id, it means that this skill no longer has the project.
          if (foundProject) {
            firestore
              .collection("skills")
              .doc(offlineSkill.id)
              .update({
                projects: offlineSkill.projects.filter(p => p !== project.id)
              });
          }
        });
      })
      .catch(() => {
        console.log("delete failed");
      });
  };
};

export const updateProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .doc(project.id)
      .update({
        name: project.name,
        url: project.url,
        skills: project.skills,
        color: project.color
      })
      .then(() => {
        dispatch({ type: UPDATE_PROJECT });
        project.skills.forEach(skill => {
          firestore
            .collection("skills")
            .doc(skill.value)
            .update({
              projects: Array.from(new Set([...skill.oldArray, project.id]))
            })
            .then(() => {
              // my new project and its related skills is the source of truth for its bindings
              // Iterate over each skill we have and see if it has THIS project's id in its projects array
              project.allSkills.forEach(offlineSkill => {
                let foundProject = offlineSkill.projects.find(
                  offlineProject => offlineProject === project.id
                );
                // if it does have the id, it means that this skill may have potentially been changed.
                if (foundProject) {
                  // for this given skill, I want to check projects new related skills and see if it is still there
                  let foundSkill;
                  for (let i = 0; i < project.skills.length; i++) {
                    foundSkill = project.skills[i].value === offlineSkill.id;
                    if (foundSkill) {
                      break; // if found the skill, then break as it means the skill has not changed
                    }
                  }

                  // if it isn't, then update that skill, removing THIS project's id from it
                  if (!foundSkill) {
                    firestore
                      .collection("skills")
                      .doc(offlineSkill.id)
                      .update({
                        projects: offlineSkill.projects.filter(
                          p => p !== project.id
                        )
                      });
                  }
                }
              });
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
