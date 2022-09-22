function Student(props) {

    const student = props.student;

    return (
        <>
            <li>student : {student.name} | {student.grade}</li>
        </>

    );

}

export default Student;