import "./App.css";
import BuyBuildCard from "./components/BuyBuildCard";
import Card from "./components/Card";
import Container from "./components/Container";
import Heading from "./components/Heading";
import Subheading from "./components/SubHeading";
function App() {
  return (
    <>
      <Container>
        <Heading>
          Power of Build.
          <br /> Speed of Buy.
        </Heading>
        <Subheading>
          All software comes with the <strong>“build vs buy”</strong> tradeoff.
          Our goal at SuperTokens is to minimise those tradeoffs and give you
          the best of both worlds.
        </Subheading>

        {/* main card */}
        <BuyBuildCard />
      </Container>
    </>
  );
}

export default App;
