import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import styled from "styled-components";
import { GenericAttrs } from "@/interfaces/generic";
import { AccordionBoxProps, AccordionProps } from "./interfaces";
import { getHeroUri } from "./helpers";
import AccordionInfo from "./info/AccordionInfo";

const AccordionBox = styled.div``;

const Accordion = ({ title, subtitle, info_cards }: AccordionBoxProps) => {
    const { data } = info_cards;
    const [active, setActive] = useState({ ...data[0].attributes });

    return (
        <div className="flex items-center justify-center flex-col py-8 px-4 md:py-20 md:px-40 w-full">
            <h1 className="uppercase font-istok font-bold text-2xl text-center tracking-wider mb-14">
                {title}
            </h1>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                <div className="order-2 md:order-1">
                    <div
                        className={`relative flex items-center justify-center w-[550-px] h-[550px]`}
                    >
                        <Image
                            src={getHeroUri(active.hero)}
                            width={550}
                            height={550}
                            className="transition-all"
                            alt={active.title}
                            draggable={false}
                            priority
                        />
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    {data.map(
                        ({
                            attributes: { title, subtitle, icon, hero },
                        }: GenericAttrs<AccordionProps>) => {
                            const activeClassName = clsx({
                                ["bg-nt-bg-blue text-white"]:
                                    active.title === title,
                                ["bg-gray-200"]: active.title !== title,
                            });

                            return (
                                <AccordionBox
                                    key={title}
                                    className={`w-full cursor-pointer ${activeClassName} mb-9 py-5 px-6 rounded-3xl transition-all`}
                                    onClick={(e) =>
                                        setActive({
                                            title,
                                            subtitle,
                                            icon,
                                            hero,
                                        })
                                    }
                                >
                                    <AccordionInfo
                                        {...{ title, subtitle, icon, active }}
                                    />
                                </AccordionBox>
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
