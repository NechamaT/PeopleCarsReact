import React from "react";
import axios from "axios";
import { produce } from "immer";

class AddPerson extends React.Component {
  state = {
    person: {
      firstName: "",
      lastName: "",
      age: "",
      id: "",
      cars: []
    },
  };
  onTextChange = (e) => {
    const nextState = produce(this.state, (draftState) => {
      draftState.person[e.target.name] = e.target.value;
    });
    this.setState(nextState);
  };

  onAddClick = async () => {
    await axios.post("/api/peoplecars/addPerson", this.state.person);
    this.props.history.push("/");
  };
  render() {
    const { firstName, lastName, age } = this.state.person;
    return (
      <div clasName="row">
        <div className="col-md-6 offset-md-3 card card-body bg-light">
          <input
            type="text"
            value={firstName}
            name="firstName"
            onChange={this.onTextChange}
            className="form-control"
            placeholder="First Name"
          />
          <br />
          <input
            type="text"
            value={lastName}
            name="lastName"
            onChange={this.onTextChange}
            className="form-control"
            placeholder="Last Name"
          />
          <br />
          <input
            type="text"
            value={age}
            name="age"
            onChange={this.onTextChange}
            className="form-control"
            placeholder="Age"
          />
          <br />
          <button
            onClick={this.onAddClick}
            className="btn btn-primary btn-block"
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default AddPerson;
