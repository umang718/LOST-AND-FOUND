const NavButton = props => {
    let classes = "inline-block py-3 px-8 text-sm leading-normal font-medium rounded bg-blue-500 dark:text-gray-300 dark:hover:text-white bg-opacity-25 hover:bg-opacity-50 text-blue-500 transition duration-200 " + props.className;
    
    return (
        <a className = { classes } href = { props.link }> 
            { props.children }
        </a>
    );
}

NavButton.defaultProps = {
    link: "#",
    children: "Please send a link through `txt` property.",
}

export default NavButton;