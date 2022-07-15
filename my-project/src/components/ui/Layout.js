import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto bg-blue-900 h-screen">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
