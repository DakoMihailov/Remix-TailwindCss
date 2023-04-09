import { FaTwitter, FaGithub, FaTwitch, FaLinkedin } from "react-icons/fa";
import { SocialLinkCardProps } from "~/components/social-link-card";

type Social = Pick<SocialLinkCardProps, "href" | "social" | "icon" | "title">;

export const socials: Array<Social> = [
  {
    title: "Twitter",
    social: "twitter",
    href: "https://twitter.com",
    icon: FaTwitter,
  },
  {
    title: "Github",
    social: "github",
    href: "https://github.com",
    icon: FaGithub,
  },
  {
    title: "Twitch",
    social: "twitch",
    href: "https://twitch.com",
    icon: FaTwitch,
  },
  {
    title: "Linkedin",
    social: "linkedin",
    href: "https://www.linkedin.com",
    icon: FaLinkedin,
  },
];
