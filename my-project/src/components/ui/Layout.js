import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="mx-auto bg-blue-400 h-screen flex flex-col gap-y-4 justify-center items-center">
      <Header />
      <main className="rounded-md w-1/2 max-w-md overflow-hidden">
        {children}
      </main>
    </div>
  );
};

export default Layout;
