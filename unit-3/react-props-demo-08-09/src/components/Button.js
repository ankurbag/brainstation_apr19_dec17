function Button(props) {

    console.log(props);

    return (
        <>
            <button onClick={props.handleClick}>Text</button>
        </>
    );

}

export default Button;