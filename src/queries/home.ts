import { gql } from "@apollo/client";

export const GET_HOME_LANDING = gql`
    query ($label: String) {
        landings(filters: { label: { eq: $label } }) {
            data {
                attributes {
                    name
                    label
                    banners {
                        data {
                            attributes {
                                name
                                label
                                title
                                subtitle
                                description
                                isFloating
                                top
                                left
                                right
                                bottom
                                haveAction
                                actionLabel
                                actionRoute
                                hero {
                                    data {
                                        attributes {
                                            name
                                            formats
                                        }
                                    }
                                }
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
                    tech_carousel {
                        data {
                            attributes {
                                title
                                teches {
                                    data {
                                        attributes {
                                            name
                                            label
                                            logo {
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
                    info_card_boxes {
                        data {
                            attributes {
                                title
                                subtitle
                                label
                                bgColor
                                haveAction
                                actionLabel
                                actionRoute
                                isUppercaseTitle
                                info_cards(sort: "order") {
                                    data {
                                        attributes {
                                            title
                                            subtitle
                                            isTransparent
                                            icon {
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
                    customer_carousels {
                        data {
                            attributes {
                                title
                                haveAction
                                actionLabel
                                actionRoute
                                customers {
                                    data {
                                        attributes {
                                            name
                                            logo {
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
            }
        }
    }
`;
