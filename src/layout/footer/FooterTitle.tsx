import clsx from "clsx";

interface Props {
    label: string;
    upper: boolean;
}

const FooterTitle = ({ label, upper }: Props) => {
    const styles = clsx({
        ["uppercase"]: upper,
    });

    return (
        <>
            <h3
                className={`${styles} font-raleway font-bold text-2xl text-white`}
            >
                {label}
            </h3>
        </>
    );
};

export default FooterTitle;
