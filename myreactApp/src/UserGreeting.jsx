// Conditional rendering = allows you to control what gets rendered
//                          in your application based on certain conditions
//                          (show, hide, or change components)
import propTypes from "prop-types";
function UserGreeting(props) {
  // using if statement N 1
  //   if (props.isLoggedIn) {
  //     return <h2>Welcome {props.userName}</h2>;
  //   } else {
  //     return <h2>Please log in to continue</h2>;
  //   }
  // using ternary operator N 2
  // by creating constant N 3
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.userName} </h2>
  );
  const loginPrompt = (
    <h2 className="login-prompt">Please log in to continue</h2>
  );
  //   return props.isLoggedIn ? (
  //     <h2 className="welcome-message">Welcome {props.userName} </h2>
  //   ) : (
  //     <h2 className="login-prompt">Please log in to continue</h2>
  //   );

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}
UserGreeting.propTypes = {
  isLoggedIn: propTypes.bool,
  userName: propTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  userName: "Guest",
};

export default UserGreeting;
