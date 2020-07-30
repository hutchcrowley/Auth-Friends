import React, { useState } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";

import { useHistory } from "react-router-dom";

const initialFriend = {
  id: Date.now(),
  name: "",
  age: "",
  email: ""
};

const FriendForm = props => {
  let history = useHistory();

  const [newFriend, setNewFriend] = useState(initialFriend);

  const handleChanges = e => {
    e.persist();
    let value = e.target.value;
    console.log(value);
    setNewFriend({
      ...newFriend,
      [e.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
      .post(`/api/friends`, newFriend)
      .then(res => {
        props.setFriends(res.data);
        history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="update-form">
      <h2>Add New Friend!</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="update-input"
          type="text"
          name="name"
          onChange={handleChanges}
          placeholder="name"
          value={newFriend.name}
        />

        <input
          className="update-input"
          name="age"
          type="text"
          onChange={handleChanges}
          placeholder="age"
          value={newFriend.age}
        />
        <input
          className="update-input"
          name="email"
          type="text"
          onChange={handleChanges}
          placeholder="email"
          value={newFriend.email}
        />
        <button className="md-button" onClick={handleSubmit}>
          Add Friend
        </button>
      </form>
    </div>
  );
};

export default FriendForm;
