import React from "react";
import { Route } from "react-router-dom";
import styled from 'styled-components';
import Login from "./components/views/login/Login";
import Signup from "./components/views/signup/Signup";
import Skills from "./components/views/skills/Skills";
import Profile from "./components/views/profile/Profile";

function App() {
  return (
    <StyledApp>
      <Route exact path="/" render={routeProps => <Signup {...routeProps} />} />
      <Route
        exact
        path="/login"
        render={routeProps => <Login {...routeProps} />}
      />
      <Route
        exact
        path="/skills"
        render={routeProps => <Skills {...routeProps} />}
      />
      <Route
        exact
        path="/profile"
        render={routeProps => <Profile {...routeProps} />}
      />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
-webkit-animation: fadein 1.25s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1.25s; /* Firefox < 16 */
  -ms-animation: fadein 1.25s; /* Internet Explorer */
  -o-animation: fadein 1.25s; /* Opera < 12.1 */
  animation: fadein 1.25s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
