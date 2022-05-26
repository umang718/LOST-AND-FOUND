import LightMode from "./LightMode";
import NavButton from "./NavButton";
import NavItem from "./NavItem";

const Navigation = () => {

    return (
        <div className = "border  relative  shadow-md rounded duration-300 ease-in-out py-2 dark:bg-gray-800 theme text-gray-600 dark:text-gray-300 dark:border-gray-700" style={{ "zIndex": "26", "width": "98%", "marginLeft": "1%", "marginTop": "10px" }}>
            <nav className = "flex justify-between items-center px-4 xl:px-10">
                <a className = "filter brightness-0 invert text-2xl leading-none" href="#">
                    <img className = "filter brightness-0 invert" src="" alt="" width="auto" style= {{"height": "3rem"}} />
                </a>

                <ul className = "lg:ml-auto lg:mr-6 lg:items-center lg:space-x-2 flex justify-center items-center">
                    <li className = "hidden lg:block">
                        <ul className = "lg:ml-auto lg:items-center lg:space-x-12 flex justify-center items-center">
                            <NavItem>Home</NavItem>
                            <NavItem>Lost & Found</NavItem>
                        </ul>
                    </li>

                    <li className = "flex px-4 h-10 justify-center items-center">
                        <LightMode></LightMode>
                    </li>
                    <li className = "lg:hidden px-4 h-10 flex justify-center items-center">
                        <button className = "navbar-burger duration-75 ease-in-out flex items-center rounded focus:outline-none relative top-px">
                            <svg className = "block h-4 w-4  dark:text-gray-200" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </li>
                </ul>
                <div className = "hidden lg:block" x-data="{isProfileMenuOpen: false}">
                    <NavButton className = "mr-1">LogIn</NavButton>
                    <NavButton className = "ml-1">SignUp</NavButton>
                </div>
            </nav>

            <div className = "hidden navbar-menu relative z-50">
                <div className = "navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className = "fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white dark:bg-gray-800 border-r dark:border-gray-700 overflow-y-auto">
                    <div className = "flex items-center mb-8">
                        <a className = "mr-auto text-lg font-semibold leading-none" href="https://phpstack-442692-2074255.cloudwaysapps.com">
                            <img className = "h-7" src="" alt="" width="auto" />
                        </a>
                        <button className = "navbar-close">
                            <svg className = "h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className = "lg:flex mb-1">
                                <a className = "block p-4 text-sm font-medium   text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-indigo-100 hover:bg-gray-50 hover:text-indigo-500 rounded" href="https://phpstack-442692-2074255.cloudwaysapps.com/blog">Blog
                                </a>
                            </li>
                            <li className = "lg:flex mb-1">
                                    <a className = "block p-4 text-sm font-medium   text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-indigo-100 hover:bg-gray-50 hover:text-indigo-500 rounded" href="https://phpstack-442692-2074255.cloudwaysapps.com/faq">Help</a>
                            </li>                                        
                        </ul>
                    </div>
                    <div className = "mt-auto">
                        <div className = "pt-6">
                            <a className = "block py-3 text-center text-sm leading-normal rounded bg-indigo-50 hover:bg-indigo-200 text-indigo-500 font-semibold transition duration-200" href="https://phpstack-442692-2074255.cloudwaysapps.com/user/login">
                                Login To User
                            </a>
                        </div>
                        <div className = "pt-6">
                            <a className = "block py-3 text-center text-sm leading-normal rounded bg-indigo-50 hover:bg-indigo-200 text-indigo-500 font-semibold transition duration-200" href="https://phpstack-442692-2074255.cloudwaysapps.com/provider/login">
                                Login To Provider
                            </a>
                        </div>                
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;