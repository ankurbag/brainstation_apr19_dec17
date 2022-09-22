import './../styles.css';
import React from "react";
import Appointment from './Appointment';

class Card extends React.Component {
    state = {
    }

    handleChange = (e) => {
        this.setState({appointment: {
            
        }});
    }

    createAppointment = (e) => {
        e.preventDefault();
        
        this.setState({appointment: {
            
        }});
        
    }

    render() {
        return (
            <main>
            <section class="card">
                <form id="appt-form" onSubmit={this.createAppointment}>
                    <legend>Personal Information</legend>
                    <fieldset>
                        Name:
                        <input type="text" name="fullname" value={this.state.appointment.fullname} onChange={this.handleChange} />
                        Phone num:
                        <input type="tel" name="phonenum" value={this.state.appointment.phonenum} onChange={this.handleChange} />
                        Email:
                        <input type="email" name="emailaddress" value={this.state.appointment.emailaddress} onChange={this.handleChange}/>
                    </fieldset>

                    <legend>Appointment Information</legend>
                    <fieldset>
                        Select a Doctor:
                        <select name="doctor" value={this.state.appointment.doctor} onChange={this.handleChange}>
                            <option value="Dr Chan">Dr Chan</option>
                            <option value="Dr Srivastav">Dr Srivastav</option>
                            <option value="Dr John">Dr John</option>
                        </select>
                        Time:
                        <input type="datetime-local" name="appointmenttime" value={this.state.appointment.appointmenttime} onChange={this.handleChange} />
                        
                    </fieldset>
                    <input type="submit"  value="Book Appointment" />
                </form>
            </section>
            <Appointment data={this.state.appointment} />
            </main>
            );
    }
}

export default Card;