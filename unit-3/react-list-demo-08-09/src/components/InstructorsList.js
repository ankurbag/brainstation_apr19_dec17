import Instructor from "./Instructor";

function InstructorsList({instructors}) {
    return (
        // Create Multple student
        <div className="main__content">
            <h1>Instructors</h1>
            <ul>
                {instructors.map( (instructor) => (<Instructor instructorKey={instructor}/>) )}
            </ul>
        </div>
    )
}

export default InstructorsList; 