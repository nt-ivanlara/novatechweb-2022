export const CONTACT_DATA = {
    __typename: "LandingEntity",
    attributes: {
        __typename: "Landing",
        contact_us: {
            __typename: "ContactUsEntityResponse",
            data: {
                __typename: "ContactUsEntity",
                attributes: {
                    __typename: "ContactUs",
                    title: "Contact Us",
                    fields: {
                        form_fields: [
                            {
                                name: "Name",
                                type: "text",
                                label: "Name",
                                isTextArea: false,
                                icon: "/uploads/person_circle_outline_6ef405e0a1.png",
                            },
                            {
                                name: "Email",
                                type: "email",
                                label: "Email address",
                                isTextArea: false,
                                icon: "/uploads/mail_outline_26a0b4482b.png",
                            },
                            {
                                name: "Phone",
                                type: "text",
                                label: "Phone number",
                                isTextArea: false,
                                icon: "/uploads/phone_a9f3f6b558.png",
                            },
                            {
                                name: "Message",
                                type: "text",
                                label: "Your message",
                                isTextArea: true,
                                icon: null,
                            },
                        ],
                    },
                    actionLabel: "Send",
                    background: {
                        __typename: "UploadFileEntityResponse",
                        data: {
                            __typename: "UploadFileEntity",
                            attributes: {
                                __typename: "UploadFile",
                                name: "bg-contact-us.jpeg",
                                formats: {
                                    thumbnail: {
                                        name: "thumbnail_bg-contact-us.jpeg",
                                        hash: "thumbnail_bg_contact_us_691b19d21a",
                                        ext: ".jpeg",
                                        mime: "image/jpeg",
                                        width: 245,
                                        height: 126,
                                        size: 5.03,
                                        path: null,
                                        url: "/uploads/thumbnail_bg_contact_us_691b19d21a.jpeg",
                                    },
                                    large: {
                                        name: "large_bg-contact-us.jpeg",
                                        hash: "large_bg_contact_us_691b19d21a",
                                        ext: ".jpeg",
                                        mime: "image/jpeg",
                                        width: 1000,
                                        height: 514,
                                        size: 48.11,
                                        path: null,
                                        url: "/uploads/large_bg_contact_us_691b19d21a.jpeg",
                                    },
                                    medium: {
                                        name: "medium_bg-contact-us.jpeg",
                                        hash: "medium_bg_contact_us_691b19d21a",
                                        ext: ".jpeg",
                                        mime: "image/jpeg",
                                        width: 750,
                                        height: 385,
                                        size: 28.4,
                                        path: null,
                                        url: "/uploads/medium_bg_contact_us_691b19d21a.jpeg",
                                    },
                                    small: {
                                        name: "small_bg-contact-us.jpeg",
                                        hash: "small_bg_contact_us_691b19d21a",
                                        ext: ".jpeg",
                                        mime: "image/jpeg",
                                        width: 500,
                                        height: 257,
                                        size: 14.38,
                                        path: null,
                                        url: "/uploads/small_bg_contact_us_691b19d21a.jpeg",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};