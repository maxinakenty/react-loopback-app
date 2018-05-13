import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AddMeetup.css";

class AddMeetup extends Component {
  addMeetup = newMeetup => {
    const { name, city, address } = newMeetup;
    axios
      .post("http://localhost:8080/api/meetups", {
        name,
        city,
        address
      })
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  handleSubmit = e => {
    const { name, city, address } = this.refs;
    const newMeetup = {
      name: name.value,
      city: city.value,
      address: address.value
    };
    this.addMeetup(newMeetup);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <button className="btn btn-defatult">
          <Link to="/">Back</Link>
        </button>
        <h1>Add Meetup</h1>
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
              ref="name"
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
              ref="city"
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
              ref="address"
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

export default AddMeetup;
