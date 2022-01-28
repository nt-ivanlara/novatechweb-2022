import { TechProps } from "./interfaces";

const Techs = ({ isCarousel, title, subtitle }: TechProps) => {
    return (
        <div className="flex items-center">
            <h1 className="font-bold text-black uppercase text-2xl p-5">
                {title}
            </h1>
            {subtitle ?? <h2 className="block">{subtitle}</h2>}
        </div>
    );
};

export default Techs;
