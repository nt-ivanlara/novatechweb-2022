import { useState } from "react";
import SimpleBanner from "../components/general/simple-banner/SimpleBanner";
import Maps from "../components/nearshore/maps/Maps";
import Accordion from "../components/nearshore/accordion/Accordion";
import TheProblemCarousel from "../components/nearshore/carousel/TheProblemCarousel";
import { GenericProps } from "@/interfaces/generic";
import useNearshore from "@/hooks/useNearshore";

const NearshoreLanding = ({ data }: GenericProps) => {
    const [state, setState] = useState(Object.assign({}, data));
    const { nearshoreAttrs, mapAttrs, infoCardsAttrs } = useNearshore(state);

    return (
        <section>
            <SimpleBanner {...nearshoreAttrs} />

            <Maps {...mapAttrs} />

            <TheProblemCarousel />

            <Accordion {...infoCardsAttrs} />
        </section>
    );
};

export default NearshoreLanding;
