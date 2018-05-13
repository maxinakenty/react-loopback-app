import React, { Component } from "react";
import MeetupItem from "./MeetupItem";
import axios from "axios";

class Meetups extends Component {
  state = {
    meetups: []
  };

  componentWillMount() {
    this.getMeetups();
  }

  getMeetups = () => {
    axios
      .get("http://localhost:8080/api/meetups")
      .then(res => {
        this.setState({
          meetups: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const meetupItems = this.state.meetups.map(meetup => (
      <MeetupItem key={meetup.id} {...meetup} />
    ));
    return (
      <div>
        <h2>Meetups</h2>
        <ul className="collection">{meetupItems}</ul>
      </div>
    );
  }
}

export default Meetups;
