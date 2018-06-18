import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Employees} from "../../imports/collections/employees";

const List = (props) => {

  console.log(props.employees);
  return (
    <div>
      <div className="employee-list">
        Employee List
      </div>
    </div>
  );
};


export default withTracker(() => {
 // Setup subscription
 Meteor.subscribe('employees');
 return { employees: Employees.find({}).fetch() };
 // return an object, return is sent to EmployeeList as props
}) (List);
