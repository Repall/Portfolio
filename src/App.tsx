import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
    return (
        <>
            <Header />
            <main className="pt-32 lg:mx-10 xl:mx-20 mx-5">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
