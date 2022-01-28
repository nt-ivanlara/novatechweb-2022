import type { NextPage } from "next";
import Head from "next/head";
import { apolloCon as Apollo } from "@/lib/apollo";
import { GET_HOME_LANDING } from "@/queries/home";
import { HomeLanding } from "../src/landings/HomeLanding";

const Home: NextPage = ({ data }: any) => {
    return (
        <>
            <Head>
                <title>NovaTech - Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HomeLanding data={data} />
        </>
    );
};

export default Home;

export async function getServerSideProps() {
    const { loading, error, data } = await Apollo.query({
        query: GET_HOME_LANDING,
        variables: { label: "home-landing" },
    });

    return {
        props: { data: data.landings.data[0] },
    };
}
