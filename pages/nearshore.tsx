import { NextPage } from "next";
import Head from "next/head";
import { apolloCon as Apollo } from "@/lib/apollo";
import { GET_NEARSHORE_LANDING } from "@/queries/nearshore";
import NearshoreLanding from "src/landings/NearshoreLanding";

const Nearshore: NextPage = ({ data }: any) => {
    return (
        <>
            <Head>
                <title>NovaTech - Services</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NearshoreLanding data={data} />
        </>
    );
};

export default Nearshore;

export async function getServerSideProps() {
    const { loading, error, data } = await Apollo.query({
        query: GET_NEARSHORE_LANDING,
        variables: { label: "nearshore-landing" },
    });

    return {
        props: { data: data.landings.data[0] },
    };
}
