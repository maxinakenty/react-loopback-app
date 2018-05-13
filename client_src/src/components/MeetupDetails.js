import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class MeetupDetails extends Component {
  state = {
    details: ""
  };
  componentWillMount() {
    this.getMeetup();
  }

  getMeetup = () => {
    const meetupID = this.props.match.params.id;
    axios
      .get(`http://localhost:8080/api/meetups/${meetupID}`)
      .then(res =>
        this.setState({
          details: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleDeleteMeetup = () => {
    const { id: meetupID } = this.state.details;
    axios
      .delete(`http://localhost:8080/api/meetups/${meetupID}`)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    const { id, name, city, address } = this.state.details;
    return (
      <div>
        <Link to="/" className="btn btn-defatult">
          Back
        </Link>
        <h1>{name}</h1>
        <ul className="collection">
          <li className="collection-item">City: {city}</li>
          <li className="collection-item">Address: {address}</li>
        </ul>
        <div className="btn-group">
          <Link to={`/meetups/edit/${id}`} className="btn btn-success">
            Edit
          </Link>
          <button
            className="btn btn-warning left"
            onClick={this.handleDeleteMeetup}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default MeetupDetails;
