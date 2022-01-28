import { NextPage } from "next";
import Head from "next/head";

const Careers: NextPage = ({ data }: any) => {
    return (
        <>
            <Head>
                <title>NovaTech - Careers</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-full h-[70vh] flex items-center justify-center">
                <h1>Careers</h1>
            </div>
        </>
    );
};

export default Careers;
