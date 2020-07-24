import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../App.css";
export class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      search: "",
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => a.title.localeCompare(b.title));
        this.setState({ data: data });
      });
  };

  onSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data &&
              this.state.data.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>
                      <Link to={`/details/${item.id}`}> More Details</Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
