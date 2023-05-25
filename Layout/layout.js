import Header from "../components/Header/header";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
