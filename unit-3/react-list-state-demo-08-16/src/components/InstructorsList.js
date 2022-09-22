import Instructor from "./Instructor";

function InstructorsList(props) {
    return (
        // Create Multple student
        <div className="main__content">
            <h2>Instructors</h2>
            <ul>
                {props.instructors.map( (instructor) => (<Instructor instructorKey={instructor}/>) )}
            </ul>
        </div>
    )
}

export default InstructorsList; 