import Card from "./Card";

const Form = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
    };

    const classes = "shadow-md rounded border bg-white p-8 mb-4 dark:text-gray-400 dark:bg-gray-800 " + props.className;
 
    return (
        <Card className = { classes }>
            <form onSubmit = { submitHandler } encType={props.encType}> { props.children } </form>
        </Card>
    );
}

Card.defaultProps = {
    containsFiles : false,
    encType : "multipart/form-data"
}

export default Form