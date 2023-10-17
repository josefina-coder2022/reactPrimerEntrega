
import "./App.css";
import Footer from "./components/Footer/Footer";
import CartWidget from "./components/Header/CartWidget";
import NavBar from "./components/Header/NavBar";
import ItemListContainer from "./components/Main/ItemListContainer";
import { getProductos } from "./utils";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleProducto from "./pages/DetalleProducto";
import Container from "./components/Container";
import MostrarProducto from "./pages/MostrarProducto";


const App = () => {
  return (

    <BrowserRouter>

      <header className="header">
        <NavBar />
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<MostrarProducto />} />
          <Route path="/home/:categoria" element={<MostrarProducto />} />
          <Route path="/womenClothing/:categoria" element={<MostrarProducto />} />
          <Route path="/menClothing/:categoria" element={<MostrarProducto />} />
          <Route path="/jewelery/:categoria" element={<MostrarProducto/>} />
          <Route path="detalle/:id" element={<DetalleProducto />} />
          <Route path="*" element={<p>404 vuelva a intentar por favor</p>} />
        </Routes>
      </main>

      <footer className="footer">
        <Footer />
      </footer>

    </BrowserRouter>

  );
}

export default App;
