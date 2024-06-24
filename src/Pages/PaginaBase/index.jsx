import { CarrinhoProvider } from "../../context/CarrinhoContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
        <>
            <CarrinhoProvider>
                <Header />
                    <Outlet />
                <Footer />
            </CarrinhoProvider>
        </>
    )
}

export default PaginaBase;