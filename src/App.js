import Input from "./components/ui/Input"
import Password from "./components/ui/Password";
import Form from './components/ui/Form'
import Textarea from "./components/ui/Textarea";
import FeedCard from "./components/feed/FeedCard";
import Button from "./components/ui/Button";
// import NavItem from "./components/navbar/NavItem";
import Navigation from "./components/navbar/Navigation";
import Modal from "./components/Modals/Modal";
import React, { useState } from "react";


const App = () =>  {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
           
            
            {/* <NavItem></NavItem> */}
            <Navigation></Navigation>
            <Form>
                <Input label = "Input Field" />
                <Password />
                <Textarea placeholder = "Description" row = "2" />
                <button className = "openModalBtn mx-auto" onClick={() => {
                 setModalOpen(true);}} >Log In</button>
             {modalOpen && <Modal setOpenModal={setModalOpen} />}
            </Form>
            
            <div className = "m-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <FeedCard></FeedCard>
                <FeedCard></FeedCard>
                <FeedCard></FeedCard>
            </div>
           
           
        </> 
    );
}

export default App; 