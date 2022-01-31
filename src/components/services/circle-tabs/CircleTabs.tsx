import { useState } from "react";
import { GenericAttrs } from "@/interfaces/generic";
import { CircleTab } from "./interface";

interface Props {
    title: string;
}

const CircleTabs = ({ tabs }: { tabs: Array<GenericAttrs<CircleTab>> }) => {
    const [state, setState] = useState(tabs[0]);

    return (
        <div className="grid gap-0 grid-cols-2 w-full">
            <div className="flex items-center justify-center flex-col p-14 text-center">
                <p className="text-center">{state.attributes.title}</p>
            </div>
            <div className="flex items-center justify-center w-full h-full md:min-h-[640px] bg-nt-bg-blue flex-col">
                <h1 className="text-white uppercase font-bold font-raleway text-2xl tracking-widest">
                    End to end cycle
                </h1>
                {tabs.map(
                    (
                        { attributes }: GenericAttrs<CircleTab>,
                        index: number
                    ) => (
                        <span
                            key={index}
                            className="text-white font-raleway font-medium text-xl cursor-pointer mb-4"
                            onClick={() => setState({ attributes })}
                        >
                            <h2>{attributes.title}</h2>
                        </span>
                    )
                )}
            </div>
        </div>
    );
};

export default CircleTabs;
