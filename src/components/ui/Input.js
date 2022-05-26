// import Label from './Label'

const Input = props => {
    return (
        <div className="mb-4">
            {/* <Label label = {props.label}></Label> */}
            <input type = "text" placeholder = { props.label } className = "outline-none focus:shadow-md border-2 rounded w-full py-2 px-2 leading-tight border-gray-300 dark:border-gray-600 bg-gray-100 focus:outline-none focus:bg-white text-gray-700 duration-300 dark:bg-gray-700 dark:text-gray-300" id = { props.label } />
        </div>
    );
}

export default Input