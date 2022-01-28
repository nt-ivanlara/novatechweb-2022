import { gql } from "@apollo/client";

export const GET_NAVBAR_ITEMS = gql`
    query {
        navBarItems(filters: { hideOnNav: { eq: false } }) {
            data {
                attributes {
                    label
                    route
                    hideOnNav
                }
            }
        }
    }
`;
