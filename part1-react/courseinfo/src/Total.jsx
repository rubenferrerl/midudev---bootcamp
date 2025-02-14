const Total = (props) => {

    return (
        <strong>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</strong>
    )
}

export default Total;