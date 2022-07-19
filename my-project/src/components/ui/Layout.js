import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="mx-auto bg-blue-400 h-screen flex flex-col gap-y-4 justify-center items-center">
      <Header />
      <main className="rounded-md bg-blue-800 w-1/2 max-w-md h-64">
        {children}
      </main>
    </div>
  );
};

export default Layout;
