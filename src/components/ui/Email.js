import Label from "./Label";

const Email = (props) =>{
    const classes = "outline-none focus:shadow-md border border-1 rounded w-full p-3 leading-tight border-gray-200 dark:border-gray-600 bg-gray-50 text-sm focus:outline-none focus:bg-white text-gray-700 duration-300 dark:bg-gray-700 dark:text-gray-300 " + props.className;

    return (
        <div className="mb-4">
            { props.showLabel && <Label label = {props.label}></Label> }
            <input name = { props.name } type = "email" placeholder = { props.label } className = { classes } id = { props.name } readOnly = { props.readOnly } />
        </div>
    );
};

Email.defaultProps = {
    showLabel: false,
    type: "email",
    label: "Please enter some description in placeholder property of the element.",
    readOnly: false,
};

export default Email;