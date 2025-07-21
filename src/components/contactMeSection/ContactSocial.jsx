import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/vivek-shukla-802130330" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/vivekshukla7374/" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/shuklavivek_7374/" Icon={FaInstagram} />
      <SingleContactSocial link="https://www.youtube.com/@VivekShukla-f5b/" Icon={FaYoutube} />
    </div>
  );
};

export default ContactSocial;
