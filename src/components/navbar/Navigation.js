import Hamburger from "./Hamburger";
import LightMode from "./LightMode";
import NavButton from "./NavButton";
import NavItem from "./NavItem";

const Navigation = () => {
    return (
        <div>
            <nav className = "flex border relative  shadow-md rounded duration-300 ease-in-out py-2 dark:bg-midnight-200 theme text-gray-600 dark:text-gray-300 dark:border-gray-700 justify-between items-center px-4 xl:px-10" style={{ "zIndex": "26", "width": "98%", "marginLeft": "1%", "marginTop": "10px" }}>
                <a className = "text-2xl leading-none" href="#">
                    <img className = "dark:hidden" src="./light.png" alt="" width="auto" style= {{"height": "3rem"}} />
                    <img className = "hidden dark:inline" src="./dark.png" alt="" width="auto" style= {{"height": "3rem"}} />
                </a>

                <ul className = "lg:ml-auto lg:mr-6 lg:items-center lg:space-x-2 flex justify-center items-center">
                    <li className = "hidden lg:block">
                        <ul className = "lg:ml-auto lg:items-center lg:space-x-12 flex justify-center items-center">
                            <NavItem>Home</NavItem>
                            <NavItem>About Us</NavItem>
                            <NavItem>Support</NavItem>
                        </ul>
                    </li>

                    <li className = "flex px-4 h-10 justify-center items-center">
                        <LightMode></LightMode>
                    </li>
                    <li className = "lg:hidden px-4 h-10 flex justify-center items-center">
                        <Hamburger></Hamburger>
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
                            <NavItem>Home</NavItem>
                            <NavItem>Lost & Found</NavItem>
                        </ul>
                    </div>
                    <div className = "mt-auto">
                        <div className = "pt-6">
                            <a className = "block py-3 text-center text-sm leading-normal rounded bg-indigo-50 hover:bg-indigo-200 text-indigo-500 font-semibold transition duration-200" href="#">
                                LogIn
                            </a>
                        </div>
                        <div className = "pt-6">
                            <a className = "block py-3 text-center text-sm leading-normal rounded bg-indigo-50 hover:bg-indigo-200 text-indigo-500 font-semibold transition duration-200" href="#">
                                SignUp
                            </a>
                        </div>                
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;