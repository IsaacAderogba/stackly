import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";
import { ButtonTertiary } from "../../~reusables/atoms/Buttons";

const Profile = props => {
  const { signOut } = props;
  
  return (
    <ButtonTertiary onClick={signOut} isDark={true}>
      Log Out
    </ButtonTertiary>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Profile);
