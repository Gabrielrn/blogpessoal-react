import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/home/Home";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import Login from "./paginas/login/Login"
import ListaTema from "./components/temas/listatema/ListaTema";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";
import CadastroPost from "./components/postagens/cadastroPost/CadastroPost";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Perfil from "./components/perfil/Perfil";

function App() {
  return (
    //o provider permite que tudo dentro dele tenha acesso ao store
    <Provider store={store}>
      <ToastContainer/>
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            {" "}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/posts" element={<ListaPostagem />} />
            <Route path="/formularioPostagem" element={<CadastroPost />} />
            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/formularioTema/:id" element={<CadastroTema />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
