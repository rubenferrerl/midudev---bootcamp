import Part from "./Part";

const Content = (props) => { 
    return (
        <>
            <Part name={props.part[0].name} exercises={props.part[0].exercises} />
            <Part name={props.part[1].name} exercises={props.part[1].exercises} />
            <Part name={props.part[2].name} exercises={props.part[2].exercises} />
        </>
    );
}

export default Content;