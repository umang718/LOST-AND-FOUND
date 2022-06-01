import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import { useState } from 'react';
import Input from '../ui/Input'
import Password from '../ui/Password'
import Form from '../ui/Form'

const ProfileIndex = () => {
    const [tabName, switchTab] = useState('#home')

    const tabHandler = (val) => {
        let prev = document.getElementById(tabName);
        let next = document.getElementById(val);
        prev.classList.remove("text-white", "bg-blue-500");
        prev.classList.add("text-blue-500", "bg-white", "dark:text-gray-300", "dark:bg-gray-800");
        
        next.classList.remove("text-blue-500", "bg-white", "dark:text-gray-300", "dark:bg-gray-800");
        next.classList.add("text-white", "bg-blue-500");
        switchTab(val);
    }

    return (
        <div className = "container px-6 mx-auto flex flex-wrap mb-6" id="tabs">
            <div className = "w-full flex">
                <ul className = "tab-head flex mb-0 list-none pb-4 flex-col my-4">
                    <li className = "mr-2 mb-2 last:mr-0 text-center">
                        <a className = "text-xs font-bold uppercase cursor-pointer px-5 py-3 shadow-lg rounded block leading-normal text-white bg-blue-500" onClick = { () => { tabHandler("#home") } } id="#home">
                            <i className = "fa fa-space-shuttle text-base mr-1"></i> Change Profile
                        </a>
                    </li>
                    <li className = "mr-2 mb-2 last:mr-0 text-center">
                        <a className = "text-xs font-bold uppercase cursor-pointer px-5 py-3 shadow-lg rounded block leading-normal text-blue-500 bg-white dark:text-gray-300 dark:bg-gray-800" onClick = { () => { tabHandler("#password") } } id="#password">
                            <i className = "fa fa-cog text-base mr-1"></i> Change Password
                        </a>
                    </li>
                </ul>
                <div className = "relative flex flex-col min-w-0 break-word w-full mb-6">
                    <div className = "flex-auto">
                        <div className = "tab-content tab-space">
                            { tabName == "#home" && 
                                <div className = "block" id="tab-general">
                                    {/* <Form>Hello this is a form</Form> */}
                                    <Form method = "post" action="route('user.updateProfile')" file = "true">
                                        <div className = "flex flex-wrap -mx-4 -mb-4 md:mb-0">
                                            <div className = "w-full px-4 mb-4 md:mb-0 md:w-1/2">
                                                <div className = "h-full flex items-center justify-center relative" x-data="avatarComponentData()">
                                                    <img className = "rounded-full object-cover" src="./images/avatar.png" style = {{ "width": "150px", "height": "150px" }} alt = "Image Not Found" />
                                                    <label htmlFor="avatar" title="Select New Avatar" className = "relative">
                                                        <FontAwesomeIcon className = "rounded-full text-white bg-blue-600 absolute fa-pencil cursor-pointer" style = {{"fontSize": "12px", "padding": "8px", "right": "-1px", "bottom": "25px"}} icon = { faPen }></FontAwesomeIcon>
                                                    </label>
                                                    <input type="file" className = "hidden" name="avatar" id="avatar" />
                                                </div>
                                            </div>
                                            <div className = "w-full px-4 mb-4 md:mb-0 md:w-1/2">
                                                <div className = "mb-6">
                                                    <Input name = "first_name" label = "First Name"></Input>
                                                    <Input name = "last_name" label = "Last Name"></Input>
                                                </div>
                                            </div>
                                            <div className = "w-full px-4 mb-4 md:mb-0 md:w-1/2">
                                                <Input type = "email" className = "" readOnly = { true }  name = "email" label = "Email"></Input>
                                            </div>
                                            <div className = "w-full px-4 mb-4 md:mb-0 md:w-1/2">
                                                <Input type = "number" className = "" name = "phoneNo" label = "Phone Number"></Input>
                                            </div>
                                        </div>
                                        <div className = "flex justify-end">
                                            <button type="submit" className = "right-0 inline-block py-1 px-4 leading-loose bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-200 text-sm" type="submit">Buttons</button>
                                        </div>
                                    </Form>
                                </div>
                            }
                            { tabName == "#password" && 
                                <div id="tab-changePassword">
                                    <Form method="post" action="route('user.changePassword')">
                                        <div className = "flex flex-wrap -mx-4 -mb-4 md:mb-0">
                                            <Password name = "old_pass" label = "Enter Old Password"></Password>
                                            <Password className1 = "w-full pr-1 md:w-1/2" name = "new_pass" label = "Enter New Password"></Password>
                                            <Password className1 = "w-full pl-1 md:w-1/2" name = "confirm_new_pass" label = "Confirm New Password"></Password>
                                        </div>
                                        <div className = "flex justify-end">
                                            <button type="submit" className = "right-0 inline-block py-1 px-4 leading-loose bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-200 text-sm" type="submit">Hello There</button>
                                        </div>
                                    </Form>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileIndex;