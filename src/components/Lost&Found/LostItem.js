import React, { useState } from "react";
import Form from "../ui/Form";
import Button from '../ui/Button';
import Textarea from '../ui/Textarea';
import Label from "../ui/Label";
import Input from "../ui/Input";
import Password from "../ui/Password";
import Modal from "../Modals/Modal";

function LostItem() {
  const [file, setFile] = useState()
  const [modalOpen, setModalOpen] = useState(false);

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  return (
    <div>
      <Form>
               <hr/>
                Item Name: <Input label = "Item Name" placeholder="Enter Item" />
                Description: <Textarea placeholder = "Description" row = "2" />
                Suspected Lost Location: <Input label="Location" placeholder="Location" />
                Enter a question based on item (For identification purpose): <Textarea placeholder = "Say, What is the color of the item lost?" row = "1" />
                Any other relevant details:<Textarea placeholder = "Any other points" row = "1" />
                Attachments, if any:<input type="file" onChange={handleChange}/>
                <hr/>
                <br/>
                <Button className = "mx-auto">Post Item</Button>           
               
                
      </Form>
      
    </div>
  )
}

export default LostItem
