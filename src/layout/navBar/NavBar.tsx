import { useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import clsx from "clsx";
import { navBarItems as items } from "../../mock-data/navBarItems";

const NavBar = () => {
    const { pathname, push } = useRouter();
    const hrRef = useRef(
        `${process.env.NEXT_CMS_URI}/uploads/Novatech_logo_orange_86fed35a20.svg`
    );

    return (
        <div className="flex items-center justify-between px-10 py-7">
            <div
                className="brand cursor-pointer"
                onClick={() => push("/" as string)}
            >
                <div className="relative h-14 w-52">
                    <Image
                        src={hrRef.current}
                        layout="fill"
                        objectFit="contain"
                        alt="Novatech, Logo"
                        priority
                    />
                </div>
            </div>
            <div className="items">
                <ul className="flex">
                    {items.map(({ label, route }) => {
                        const styles = clsx({
                            ["text-nt-orange"]: pathname === route,
                            ["text-black"]: pathname !== route,
                        });

                        return (
                            <li
                                key={label}
                                onClick={() => push(route as string)}
                                className={`${styles} font-raleway cursor-pointer px-3 text-[16px] text-center font-medium hover:text-[#FF4C41] transition-colors`}
                            >
                                {label}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
