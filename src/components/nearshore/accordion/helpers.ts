export const getHeroUri = (hero: any) => {
    const { formats } = hero?.data?.attributes;

    return `${process.env.NEXT_CMS_URI}${formats?.small?.url}`;
};
