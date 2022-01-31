interface Props {
    teches: any;
}

const useTechs = ({ teches }: Props) => {
    const split_teches = (teches: any) => {
        const { data } = teches;
        const groupByCategory = data.reduce((group: any, tech: any) => {
            const { attributes: { Category } } = tech;
            group[Category] = group[Category] ?? [];
            group[Category].push(tech.attributes);

            return group;
        }, {});

        return groupByCategory;
    };

    return { split_teches };
};

export default useTechs;
