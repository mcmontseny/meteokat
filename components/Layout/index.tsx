import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Layout({ children }: any) {
  return (
    <>
      <div className="flex flex-col min-h-screen md:ml-0">
        <Header />
        <div className="flex flex-col lg:flex-row flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
