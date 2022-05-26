const SubmitButton = (prop) => {
    const design = "" + props.className
    return (
        <button type = "submit" className = { design }></button>
    );
}

export default SubmitButton