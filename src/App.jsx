import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
    return (
        <>
            <Header />
            <main className="lg:mx-10 xl:mx-20">
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    );
}
