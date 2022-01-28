import { ReactNode } from "react";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

interface Props {
    children: ReactNode;
}

const ContentPanel = ({ children }: Props) => {
    return (
        <>
            {/* Navbar */}
            <NavBar />

            <main>{children}</main>

            <Footer />
        </>
    );
};

export default ContentPanel;
