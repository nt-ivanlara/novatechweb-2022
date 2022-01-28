import Image from "next/image";
import LinkedIn from "@/assets/social-networks/LinkedIn.svg";
import Facebook from "@/assets/social-networks/FB.svg";
import Instagram from "@/assets/social-networks/IG.svg";
import YouTube from "@/assets/social-networks/YT.svg";

interface Props {
    name: string;
    src: string;
    link: string;
}

const links: Props[] = [
    {
        name: "LinkedIn",
        src: LinkedIn,
        link: "#!,",
    },
    {
        name: "Facebook",
        src: Facebook,
        link: "#!,",
    },
    {
        name: "Instagram",
        src: Instagram,
        link: "#!,",
    },
    {
        name: "YouTube",
        src: YouTube,
        link: "#!,",
    },
];

const SocialNetworks = () => {
    return (
        <ul className="flex items-center justify-start">
            {links.map(({ name, src, link }, index) => (
                <li key={index}>
                    <a
                        className="mr-4"
                        target="_blank"
                        href={link}
                        rel="noreferrer"
                    >
                        <Image
                            src={src}
                            width={40}
                            height={40}
                            alt={`NovaTech-${name}`}
                        />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialNetworks;
