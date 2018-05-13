import React from "react";
import { Link } from "react-router-dom";

const MeetupItem = ({ id, name }) => (
  <li className="collection-item">
    <Link to={`/meetups/${id}`}>{name}</Link>
  </li>
);

export default MeetupItem;
