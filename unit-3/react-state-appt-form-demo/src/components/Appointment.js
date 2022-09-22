import React from "react";

class Appointment extends React.Component {
  
    appointmentDetails = this.props.data;

    render() {
       // console.log(this.appointmentDetails);
        if(this.appointmentDetails)
            return <section id="my-appointment">Hello {this.appointmentDetails.fullname}, your appointment is at {this.appointmentDetails.appointmenttime} with {this.appointmentDetails.doctor}</section>;
        return <section id="my-appointment">--No Appointments--</section>;
    }
}

export default Appointment;
