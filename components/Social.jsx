import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/HMSagar2701" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/h-m-sagar/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@hmsagar604" },
  { icon: <FaTwitter />, path: "https://x.com/HMSagar27" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={`flex items-center justify-center w-12 h-12 rounded-full ${iconStyles}`} // Ensure rounded-full is applied
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // For security
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
