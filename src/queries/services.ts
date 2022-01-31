import { gql } from "@apollo/client";

export const GET_SERVICE_LANDING = gql`
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
                    info_card_boxes {
                        data {
                            attributes {
                                title
                                subtitle
                                bgColor
                                haveAction
                                actionLabel
                                actionRoute
                                isUppercaseTitle
                                background {
                                    data {
                                        attributes {
                                            name
                                            formats
                                        }
                                    }
                                }
                                info_cards(sort: "order") {
                                    data {
                                        attributes {
                                            title
                                            tabTitle
                                            subtitle
                                            isTransparent
                                            bullets
                                            icon {
                                                data {
                                                    attributes {
                                                        name
                                                        formats
                                                    }
                                                }
                                            }
                                            tabBackground {
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
                    tech_carousel {
                        data {
                            attributes {
                                title
                                teches(pagination: { limit: 30 }) {
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
                                            Category
                                            label
                                        }
                                    }
                                }
                            }
                        }
                    }
                    tabs {
                        data {
                            attributes {
                                title
                                icon {
                                    data {
                                        attributes {
                                            name
                                            formats
                                        }
                                    }
                                }
                                label
                                content
                            }
                        }
                    }
                }
            }
        }
    }
`;
