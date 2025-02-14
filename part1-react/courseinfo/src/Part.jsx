const Part = (props) => {
    console.log(props);
    
return(
    <>
    <h2>{props.name}</h2>
    <p>Ejercicios: {props.exercises}</p>
    </>
);
}

export default Part;