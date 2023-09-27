
import "./App.css";
import Footer from "./components/Footer/Footer";
import CartWidget from "./components/Header/CartWidget";
import NavBar from "./components/Header/NavBar";
import ItemListContainer from "./components/Main/ItemListContainer";



const App = () => {
  return (
    <div>
      
      <header className="header">
        
        <NavBar />

      </header>

      <main className="main">
        
        <ItemListContainer
          greeting="Bienvenidos a..."
          nombre="Nutevia"
          beneficios = "Lorem Ipsum es simplemente un texto de relleno de la industria de la impresión y la tipografía. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde el siglo XVI, cuando un impresor desconocido tomó una galería de tipos y los mezcló para hacer un libro de muestras tipográficas. Ha sobrevivido no sólo a cinco siglos, sino también al salto hacia la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. "
        />

      </main>

      <footer className="footer">
        
        <Footer />

      </footer>

    </div>
    
  );
}

export default App;
