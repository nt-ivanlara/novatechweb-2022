import { useState } from "react";
import { toLowerJsonProps } from "@/lib/helpers";

const ContactForm = () => {
    const [state, setState] = useState({});

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const json = toLowerJsonProps(JSON.stringify(state));
        console.log('ContactForm', json);
    };
    return (
        <div className="w-full flex items-start justify-center flex-col px-36 py-14">
            <h1 className="font-raleway font-bold text-2xl mb-9">
                Ready to get started?
            </h1>
            <div className="flex items-center justify-center flex-row w-full">
                <form
                    onSubmit={onSubmit}
                    className="flex items-center justify-between w-full"
                >
                    <input
                        type="email"
                        placeholder="Email address"
                        className="bg-[#EDEDF1] rounded-full text-[#8E90A6] outline-none py-3 px-5 w-full md:w-10/12 mr-4 font-raleway font-medium text-base"
                    />
                    <input
                        type="submit"
                        value="Contact us"
                        className="bg-blue-700 text-white py-3 px-5 rounded-full w-full md:w-3/12 uppercase font-raleway font-bold text-base"
                    />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
