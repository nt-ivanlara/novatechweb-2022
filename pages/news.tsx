import { NextPage } from "next";
import Head from "next/head";

const News: NextPage = ({ data }: any) => {
    return (
        <>
            <Head>
                <title>NovaTech - News</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-full h-[70vh] flex items-center justify-center">
                <h1>News</h1>
            </div>
        </>
    );
};

export default News;
