import { NextPage } from "next";
import Head from "next/head";
import { apolloCon as Apollo } from "@/lib/apollo";
import { GET_ABOUTUS_LANDING } from "@/queries/about-us";
import AboutUsLanding from "src/landings/AboutUsLanding";
import { ABOUT_DATA } from "src/mock-data/about-data";

const AboutUs: NextPage = ({ data }: any) => {
    return (
        <>
            <Head>
                <title>NovaTech - About Us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AboutUsLanding data={data} />
        </>
    );
};

export default AboutUs;

export async function getServerSideProps() {
    // const { loading, error, data } = await Apollo.query({
    //     query: GET_ABOUTUS_LANDING,
    //     variables: { label: "about-us-landing" },
    // });

    return {
        props: { data: ABOUT_DATA },
    };
}
