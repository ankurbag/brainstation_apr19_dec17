import React from "react";

class Appointment extends React.Component {
  
    appointmentDetails = this.props.data;

    render() {
       // console.log(this.appointmentDetails);
        return <section id="my-appointment">Hello {this.appointmentDetails.fullname}, your appointment is at {this.appointmentDetails.appointmenttime} with {this.appointmentDetails.doctor}</section>;
    }
}

export default Appointment;
