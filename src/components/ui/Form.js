import Card from "./Card";

const Form = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
    };

    const classes = "shadow-md rounded border bg-white px-8 pt-6 pb-8 mb-4 dark:text-gray-400 dark:bg-gray-800" + props.className;

    return (
        <Card className = { classes }>
            <form onSubmit = { submitHandler }> { props.children } </form>
        </Card>
    );
}

export default Form