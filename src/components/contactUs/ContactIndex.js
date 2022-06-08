import ContactForm from "./ContactForm"
import ProfileCover from "./ProfileCover";

const ContactIndex = () => {
    return (
        <div style={{ backgroundSize: "cover", backgroundImage: `url("./images/shape1.svg")` }}>
            <ProfileCover></ProfileCover>
            <ContactForm></ContactForm>
        </div>
    );
}

export default ContactIndex;