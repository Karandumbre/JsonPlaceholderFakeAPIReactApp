import React, { Component } from "react";

export class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
    };
  }

  componentDidMount() {
    if (this.props.match && this.props.match.params.id) {
      fetch(
        `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.setState({ userData: data });
        });
    } else {
      console.log(this.props.history);
    }
  }

  render() {
    return (
      <>
        {this.state.userData && (
          <div style={{ width: "80%", margin: "auto" }}>
            <p>User ID : {this.state.userData.userId}</p>
            <p>ID : {this.state.userData.id}</p>
            <p>Title : {this.state.userData.title}</p>
            <p>Body : {this.state.userData.body}</p>
          </div>
        )}
      </>
    );
  }
}

export default Details;
