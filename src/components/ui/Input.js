import Label from './Label'

const Input = props => {
    const classes = "outline-none focus:shadow-md border-2 rounded w-full py-2 px-2 leading-tight border-gray-300 dark:border-gray-600 bg-gray-100 focus:outline-none focus:bg-white text-gray-700 duration-300 dark:bg-gray-700 dark:text-gray-300" + props.className;

    return (
        <div className="mb-4">
            <Label label = {props.label}></Label>
            <input name = { props.name } type = { props.type } placeholder = { props.label } className = { classes } id = { props.name } readOnly = { props.readOnly } />
        </div>
    );
}

Input.defaultProps = {
    type: "text",
    placeholder: "Please enter some description in placeholder property of the element.",
    readOnly: false,
};

export default Input;