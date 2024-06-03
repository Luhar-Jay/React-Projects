import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("child Constructor");
    // State varible
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    // console.log("child component did mount");
    const data = await fetch("https://api.github.com/users/Luhar-Jay");

    const json = await data.json();
    // console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // console.log("Component did update");
  }

  render() {
    // console.log("child Render");
    const { name, location, id, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card m-4 p-4 bg-gray-100 rounded-lg">
        <img src={avatar_url} />
        <h2 className="font-bold p-4">Name: {name} </h2>
        <h3 className="font-medium">Location: {location}</h3>
        <h4 className="font-medium">Id: {id}</h4>
      </div>
    );
  }
}

export default UserClass;
