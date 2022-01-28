import { NextPage } from "next";
import Head from "next/head";

const OurWork: NextPage = ({ data }: any) => {
    return (
        <>
            <Head>
                <title>NovaTech - Our work</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-full h-[70vh] flex items-center justify-center">
                <h1>Ourk work</h1>
            </div>
        </>
    );
};

export default OurWork;
