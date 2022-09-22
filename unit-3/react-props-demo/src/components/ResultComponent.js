function ResultComponent(props) {
    console.log(props);
    return(
        <div>
            I am from Parent {props.personName} !
        </div>
    );
}

export default ResultComponent;