function WelcomeComponent(props) {

    return(
        <>
            <h3>{props.person.firstName}</h3>
            <div>{props.person.lastName}</div>
            <div>{props.person.birthYear}</div>
        </>
    );
}

export default WelcomeComponent;