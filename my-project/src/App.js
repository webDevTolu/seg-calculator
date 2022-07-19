import Body from "./components/calculator/Body";
import Result from "./components/calculator/Result";
import Layout from "./components/ui/Layout";

export default function App() {
  return (
    <Layout>
      calculator
      <Result />
      <Body />
    </Layout>
  );
}
