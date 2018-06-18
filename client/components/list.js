import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Employees} from "../../imports/collections/employees";
import Detail from "./detail";

const PER_PAGE = 20;

const List = (props) => {

  return (
    <div>
      <div className="employee-list">
        {props.employees.map(employee => <Detail key={employee._id} employee={employee} />)}
      </div>
      <button onClick={() => Meteor.subscribe("employees", 40)} className="btn btn-primary">Load More...</button>
    </div>
  );
};


export default withTracker(() => {
 // Setup subscription
 Meteor.subscribe('employees', PER_PAGE);
 return { employees: Employees.find({}).fetch() };
 // return an object, return is sent to EmployeeList as props
}) (List);
