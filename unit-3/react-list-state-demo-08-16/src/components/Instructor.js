function Instructor(props) {

    const instructor = props.instructorKey;

    return (
        <>
            <li>Name : {instructor.name} | Course : {instructor.course}</li>
        </>

    );

}

export default Instructor;