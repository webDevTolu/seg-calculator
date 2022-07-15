import Body from "./components/calculator/Body";
import Result from "./components/calculator/Result";
import Layout from "./components/ui/Layout";
import ThemeContext from "./store/theme-context";

export default function App() {
  return (
    <ThemeContext.Provider
      value={{
        theme: "light",
      }}
    >
      <Layout>
        calculator
        <Result />
        <Body />
      </Layout>
    </ThemeContext.Provider>
  );
}
