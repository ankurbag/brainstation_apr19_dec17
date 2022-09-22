import Instructor from "./Instructor";

function InstructorsList(props) {
    return (
        // Create Multple student
        <div className="main__content">
            <h1>Instructors</h1>
            <ul>
                {props.instructors.map( (instructor) => (<Instructor instructorKey={instructor}/>) )}
            </ul>
        </div>
    )
}

export default InstructorsList; 