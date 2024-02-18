// using class component
import React from "react";
import { Link } from "react-router-dom";

class AddContact extends React.Component {
  state = {
    name: "",
    email: ""
  }

  // use appendContactHandler as a prop --> data from the parent function 
  add = (e) => {
    e.preventDefault();
    // This is done to avoid refresh of page since button is present.
    if(this.state.email === "" || this.state.name === ""){
      alert("All fields are mandatory");
      return;
    }
    this.props.appendContactHandler(this.state);
    this.setState({name:"", email: ""})
  }
  render() {
    return (
      <div className="ui main extra-padding">
        <h1>Add contact</h1>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label> <input type="text" name="name" placeholder="Name" value ={this.state.name} onChange={(e)=>{this.setState({name: e.target.value})}}/>
          </div>

          <div className="field">
            <label>Email</label> <input type="text" name="email" placeholder="Email" value ={this.state.email} onChange={(e)=>{this.setState({email: e.target.value})}}/>
          </div>

          <button className="ui button blue"> Add Contact</button>
          <Link to="/">
          <button className="ui button blue">View Contacts</button>
        </Link>
        </form> 
         
      </div>
    );
  }
}

export default AddContact;
