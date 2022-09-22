import Child2 from "./Child2";

function Child(props) {

    console.log(props);
    
    return (<>
        Hi <span>{props.name}</span>

        <Child2 newName={props.name}/>
        

    </>);

}

export default Child;