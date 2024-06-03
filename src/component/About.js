import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent component did mount");
  }

  render() {
    // console.log("Parent component did mount");
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInuser }) => (
              <h1 className="text-xl font-bold">{loggedInuser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>Hello World!!</h2>
        {/* <User name={"Jay (Function)"} location={"Kadi"} email={"jay@mail.com"} /> */}
        <UserClass
          name={"Jay class"}
          location={"Kadi"}
          email={"jay@mail.com"}
        />
      </div>
    );
  }
}

export default About;
