import { gql } from "@apollo/client";

export const GET_ABOUTUS_LANDING = gql`
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
                    video_boxes {
                        data {
                            attributes {
                                title
                                subtitle
                                label
                                video
                            }
                        }
                    }
                    mission_and_vision_banner {
                        data {
                            attributes {
                                title
                                subtitle
                                mission
                                vision
                                missionIcon {
                                    data {
                                        attributes {
                                            name
                                            formats
                                        }
                                    }
                                }
                                visionIcon {
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
                }
            }
        }
    }
`;
