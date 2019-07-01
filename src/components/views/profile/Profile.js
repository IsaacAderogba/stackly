import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import IsAuthUser from "../../hoc/IsAuthUser";
import { signOut } from "../../../store/actions/authActions";
import { ButtonTertiary } from "../../~reusables/atoms/Buttons";

const Profile = props => {
  const { signOut, auth } = props;
  console.log(auth);

  return (
    <ButtonTertiary onClick={signOut} isDark={true}>
      Log Out
    </ButtonTertiary>
  );
};

const mapStateToProps = state => {
  return {
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
  IsAuthUser
)(Profile);
