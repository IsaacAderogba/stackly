import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import IsAuthUser from "../../hoc/IsAuthUser";
import { signOut } from "../../../store/actions/authActions";
import { ButtonTertiary } from "../../~reusables/atoms/Buttons";
import Sidebar from "../../~reusables/organisms/Sidebar"

const Skills = props => {
  const { signOut, auth, user } = props;
  console.log(user);

  return (
    <>
    <Sidebar user={user} />
    {/* <ButtonTertiary onClick={signOut} isDark={true}>
      Log Out
    </ButtonTertiary> */}
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.firestore.ordered.user,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => {
    return [
      {
        collection: "users",
        where: ["email", "==", `${props.auth.email}`],
        storeAs: "user"
      }
    ];
  }),
  IsAuthUser
)(Skills);
