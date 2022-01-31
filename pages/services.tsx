import { NextPage } from "next";
import Head from "next/head";
import { apolloCon as Apollo } from "@/lib/apollo";
import { GET_SERVICE_LANDING } from "@/queries/services";
import ServiceLanding from "../src/landings/ServiceLanding";
import { SERVICE_DATA } from "src/mock-data/services-data";

const Services: NextPage = ({ data }: any) => {
    return (
        <>
            <Head>
                <title>NovaTech - Services</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ServiceLanding data={data} />
        </>
    );
};

export default Services;

export async function getServerSideProps() {
    // const { loading, error, data } = await Apollo.query({
    //     query: GET_SERVICE_LANDING,
    //     variables: { label: "service-landing" },
    // });

    return {
        props: { data: SERVICE_DATA },
    };
}
