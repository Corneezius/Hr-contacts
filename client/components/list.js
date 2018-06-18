import React, {Component} from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Employees} from "../../imports/collections/employees";
import Detail from "./detail";

const PER_PAGE = 20;

class List extends Component {
  componentWillMount() {
    this.page = 1;
  }

handleButtonClick () {
  Meteor.subscribe("employees", PER_PAGE * (this.page + 1));
  this.page += 1;
}

render() {
    return (
      <div>
        <div className="employee-list">
          {this.props.employees.map(employee => <Detail key={employee._id} employee={employee} />)}
        </div>
        <button onClick={this.handleButtonClick.bind(this)} className="btn btn-primary">Load More...</button>
      </div>
    );
  };
}

export default withTracker(() => {
 // Setup subscription
 Meteor.subscribe('employees', PER_PAGE);
 return { employees: Employees.find({}).fetch() };
 // return an object, return is sent to EmployeeList as props
}) (List);
