import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import IsAuthUser from "../../hoc/IsAuthUser";
import { signOut } from "../../../store/actions/authActions";
import { ButtonTertiary } from "../../~reusables/atoms/Buttons";
import Sidebar from "../../~reusables/organisms/Sidebar";
import { background, alt_background } from "../../~reusables/variables/colors";
import ProfileHeader from "./ProfileHeader";
import MobileNavbar from "../../~reusables/organisms/MobileNavbar";

const Profile = props => {
  const { signOut, auth, user } = props;
  let isDark = null;
  if (user) {
    isDark = user.length > 0 ? user[0].isDark : null;
  }

  return (
    <StyledProfile isDark={isDark}>
      <Sidebar user={user} />
      <MobileNavbar user={user}  />
      <div>

      <ProfileHeader user={user} />
      </div>
    </StyledProfile>
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
)(Profile);

const StyledProfile = styled.section`
  display: flex;

  > div {
    min-height: 100vh;
    background-color: ${props => (props.isDark ? background : alt_background)};
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
