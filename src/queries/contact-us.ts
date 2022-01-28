import { gql } from "@apollo/client";

export const GET_CONTACTUS_LANDING = gql`
    query ($label: String) {
        landings(filters: { label: { eq: $label } }) {
            data {
                attributes {
                    contact_us {
                        data {
                            attributes {
                                title
                                fields
                                actionLabel
                                background {
                                    data {
                                        attributes {
                                            name
                                            formats
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
