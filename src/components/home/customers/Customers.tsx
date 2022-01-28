import { CustomerCardProps, CustomerCarouselProps } from "./interfaces";
import Customer from "./customer/Customer";
import { GenericAttrs } from "../../../interfaces/generic";
import Button from "../../general/button/Button";

const Customers = ({
    title,
    haveAction,
    actionLabel,
    actionRoute,
    customers,
}: CustomerCarouselProps) => {
    const { data } = customers;
    return (
        <div className="flex items-center justify-center flex-col py-0 pb-4 md:pb-20 px-14 bg-[#F5F5F5]">
            <h1 className="uppercase tracking-widest font-bold font-istok mt-12 mb-4 md:mt-0 md:mb-20 text-[24px] text-center text-black">
                {title}
            </h1>
            <div className="grid grid-cols-2 md:flex md:items-center md:justify-between">
                {data.map(
                    ({
                        attributes: { name, logo },
                    }: GenericAttrs<CustomerCardProps>) => (
                        <Customer key={name} {...{ name, logo }} />
                    )
                )}
            </div>
            {haveAction ? (
                <div className="flex mt-4 mb-4 md:mb-0 md:mt-20">
                    <Button
                        label={actionLabel}
                        href={actionRoute}
                        bgColor="#FF4C41"
                        rounded
                    />
                </div>
            ) : null}
        </div>
    );
};

export default Customers;
