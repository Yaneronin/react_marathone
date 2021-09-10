import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import logo1 from "./components/Layout/bg2.jpg";
import logo2 from "./components/Layout/bg1.jpg";

function App() {
  return (
    <>
      <Header title="Title" desc="description" />
      <Layout title="Title" desc="description" urlBg={logo2} />
      <Layout title="Title" desc="description" colorBg="#e2e2e2" />
      <Layout title="Title" desc="description" urlBg={logo1} />
      <Footer />
    </>
  );
}

export default App;
