import { GenericAttrs } from "@/interfaces/generic";
import { MapProps, MapsProps } from "./interfaces";
import Map from "./map/Map";

const Maps = ({ maps }: MapsProps) => {
    const { data } = maps;

    return (
        <div className="flex items-center justify-between flex-col bg-nt-bg-blue">
            <div className="grid gap-3 grid-cols-1 md:grid-cols-3">
                {data.map(
                    ({
                        attributes: {
                            title,
                            subtitle,
                            label,
                            description,
                            color,
                            hero,
                        },
                    }: GenericAttrs<MapProps>) => (
                        <Map
                            key={label}
                            {...{ title, subtitle, label, description, color, hero }}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default Maps;
