import Student from "./Student";
import React from 'react';

class StudentsList extends React.Component {

    
    render() {
        return (
            // Create Multple student
            <div className="main__content">
                <h1>Students</h1>
                <ul>
                {this.props.students.map( (student) => (<Student student={student}/>) )}
                </ul>
            </div>
        );
    }
    
}
 

export default StudentsList;