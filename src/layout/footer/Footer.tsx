import { useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import clsx from "clsx";
import NtWhiteLogo from "../../components/general/logos/NtWhiteLogo";
import FooterTitle from "./FooterTitle";
import { navBarItems as items } from "../../mock-data/navBarItems";
import MarkIcon from "@/assets/images/mark.svg";
import PhoneIcon from "@/assets/images/phone.svg";
import EnvelopIcon from "@/assets/images/envelop.svg";
import SocialNetworks from "./SocialNetworks";

const Footer = () => {
    const { pathname, push } = useRouter();
    const listStyleRef = useRef(
        "text-white font-raleway font-medium text-base pb-4 flex items-start justify-between md:justify-start"
    );

    return (
        <footer className="py-9 px-14 bg-[#1F2234]">
            <div className="grid grid-cols-1 md:grid-cols-3 py-8">
                <div className="flex items-start justify-start flex-col mb-10 md:mb-0">
                    <NtWhiteLogo />
                    <SocialNetworks />
                </div>

                <div className="mb-10 md:mb-0">
                    <FooterTitle label="Site map" upper />
                    <div className="grid grid-cols-3 pt-5">
                        {items.map(({ label, route }) => {
                            const styles = clsx({
                                ["text-nt-orange"]: pathname === route,
                                ["text-white"]: pathname !== route,
                            });

                            return (
                                <div
                                    key={label}
                                    onClick={() => push(route as string)}
                                    className={`${styles} pb-4 cursor-pointer font-raleway font-medium text-base hover:text-nt-orange transition-colors`}
                                >
                                    {label}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="mb-10 md:mb-0">
                    <FooterTitle label="Contact us" upper />
                    <ul className="pt-5">
                        <li className={`${listStyleRef.current}`}>
                            <div className="w-[50px] md:w-[24px]">
                                <Image
                                    src={MarkIcon}
                                    width={24}
                                    height={24}
                                    alt="Novatech"
                                />
                            </div>
                            <span className="ml-8">
                                Edificio Insigne, Av. Las Magnolias, Nivel
                                11-09, San Salvador
                            </span>
                        </li>
                        <li className={listStyleRef.current}>
                            <div className="w-[50px] md:w-[24px]">
                                <Image
                                    src={PhoneIcon}
                                    width={24}
                                    height={24}
                                    alt="Novatech"
                                />
                            </div>
                            <span className="ml-8">
                                (503) 2130-0865 <br /> (503) 7780-6782
                            </span>
                        </li>
                        <li className={listStyleRef.current}>
                            <div className="w-[50px] md:w-[24px]">
                                <Image
                                    src={EnvelopIcon}
                                    width={24}
                                    height={24}
                                    alt="Novatech"
                                />
                            </div>
                            <a
                                href="mailto:contacto@novatechdev.com"
                                className="ml-8"
                            >
                                contacto@novatechdev.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full border-t border-white text-white text-center pt-8">
                © Novatech. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
