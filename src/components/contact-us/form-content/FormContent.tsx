import { useState } from "react";
import { ContactFormJsonProps } from "../interfaces";
import { toLowerJsonProps } from "@/lib/helpers";
import Image from "next/image";

interface Props {
    actionLabel: string;
    fields: ContactFormJsonProps;
}

const FormContent = ({ actionLabel, fields }: Props) => {
    const { form_fields } = fields;
    const [state, setState] = useState({});

    const getIconUri = (icon: string) => `${process.env.NEXT_CMS_URI}${icon}`;

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const json = toLowerJsonProps(JSON.stringify(state));
        console.log(json);
    };

    const handleChange = (e: React.ChangeEvent<any>) =>
        setState({ ...state, [e.target.name]: e.target.value });

    return (
        <div className="w-full">
            <form onSubmit={onSubmit} className="text-center">
                {form_fields.map(
                    ({ name, label, type, isTextArea, icon }, index) => (
                        <div key={index}>
                            {!isTextArea ? (
                                <div className="relative">
                                    {icon ? (
                                        <div className="absolute z-10 top-[15px] left-[15px]">
                                            <Image
                                                src={getIconUri(icon)}
                                                width={20}
                                                height={20}
                                                alt={name}
                                                priority
                                            />
                                        </div>
                                    ) : null}
                                    <input
                                        onChange={handleChange}
                                        name={name}
                                        type={type}
                                        className="mb-7 w-full rounded-xl bg-[#31354A] text-white h-[50px] px-14 font-raleway drop-shadow-none	outline-none"
                                        placeholder={label}
                                    />
                                </div>
                            ) : (
                                <textarea
                                    onChange={handleChange}
                                    name={name}
                                    className="mb-7 w-full rounded-xl bg-[#31354A] text-white pt-4 h-[150px] px-4 font-raleway drop-shadow-none outline-none"
                                    placeholder={label}
                                ></textarea>
                            )}
                        </div>
                    )
                )}
                <button
                    type="submit"
                    className="bg-nt-orange py-4 px-20 mb-4 md:mb-0 mt-4 uppercase font-raleway text-white font-bold text-[12px] md:text-[16px] rounded-full"
                >
                    {actionLabel}
                </button>
            </form>
        </div>
    );
};

export default FormContent;
