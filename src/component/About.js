import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent component did mount");
    return (
      <div>
        <h1>About</h1>
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
