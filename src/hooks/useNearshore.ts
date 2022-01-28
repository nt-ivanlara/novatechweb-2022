import { BannerProps } from "src/components/general/banner/interfaces";
import { AccordionBoxProps } from "src/components/nearshore/accordion/interfaces";
import { MapsProps } from "src/components/nearshore/maps/interfaces";

const useNearshore = ({ attributes }: { attributes: any }) => {
    const { banners, map_boxes, info_card_boxes } = attributes;

    const nearshoreAttrs: BannerProps = banners.data[0].attributes;
    const mapAttrs: MapsProps = map_boxes.data[0].attributes;
    const infoCardsAttrs: AccordionBoxProps = info_card_boxes.data[0].attributes;

    return { nearshoreAttrs, mapAttrs, infoCardsAttrs };
};

export default useNearshore;
