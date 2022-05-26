const Label = (props) => {
    return (
        <label className = "block text-gray-700 text-sm font-bold mb-2" for = {props.label}>
            {props.label}
        </label>
    );
}

export default Label