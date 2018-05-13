import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class EditMeetup extends Component {
  state = {
    id: "",
    name: "",
    city: "",
    address: ""
  };

  componentWillMount() {
    this.getMeetupDetails();
  }

  getMeetupDetails = () => {
    const { id: meetupID } = this.props.match.params;

    axios
      .get(`http://localhost:8080/api/meetups/${meetupID}`)
      .then(res => {
        const { id, name, city, address } = res.data;
        this.setState({
          id,
          name,
          city,
          address
        });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value
    });
  };

  handleEditMeetup = newMeetup => {
    axios
      .request({
        url: `http://localhost:8080/api/meetups/${this.state.id}`,
        method: "put",
        data: newMeetup
      })
      .then(res => {
        this.props.history.push("/");
      })
      .then(err => console.log(err));
  };

  handleSubmit = e => {
    e.preventDefault();

    this.handleEditMeetup(this.state);
  };

  render() {
    const { name, city, address } = this.state;

    return (
      <div>
        <button className="btn btn-defatult">
          <Link to="/">Back</Link>
        </button>
        <h1>Edit Meetup</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-field">
            <label htmlFor="name" className="form-filed-title">
              Name
            </label>
            <input
              id="name"
              className="form-input"
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="city" className="form-filed-title">
              City
            </label>
            <input
              id="city"
              className="form-input"
              type="text"
              name="city"
              value={city}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="address" className="form-filed-title">
              Addrress
            </label>
            <input
              id="address"
              className="form-input"
              type="text"
              name="address"
              value={address}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default EditMeetup;
