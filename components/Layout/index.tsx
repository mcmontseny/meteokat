import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Layout({ children }: any) {
  return (
    <>
      <div className="flex flex-col min-h-screen md:ml-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
