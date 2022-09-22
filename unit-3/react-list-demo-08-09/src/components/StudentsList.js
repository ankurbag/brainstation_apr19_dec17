import Student from "./Student";

function StudentsList(props) {

    console.log('StudentsList', props);
    return (
        // Create Multple student
        <div className="main__content">
            <h1>Students</h1>
            <ul>
            {props.students.map( (student) => (<Student student={student}/>) )}
            </ul>
        </div>
    )
}
 

export default StudentsList;