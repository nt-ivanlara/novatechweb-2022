import { NextPage } from "next";
import Head from "next/head";
import { GET_CONTACTUS_LANDING } from "@/queries/contact-us";
import { apolloCon as Apollo } from "@/lib/apollo";
import ContactUsLanding from "src/landings/ContactUsLanding";
import { CONTACT_DATA } from "src/mock-data/contact-data";

const ContactUs: NextPage = ({ data }: any) => {
    return (
        <>
            <Head>
                <title>NovaTech - Contact Us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ContactUsLanding data={data} />
        </>
    );
};

export default ContactUs;

export async function getServerSideProps() {
    // const { loading, error, data } = await Apollo.query({
    //     query: GET_CONTACTUS_LANDING,
    //     variables: { label: "contact-landing" },
    // });

    return {
        props: { data: CONTACT_DATA },
    };
}
