import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Container } from "react-bootstrap";
import { Skills } from "./components/Skills/Skills";
import { CustomCarrousel } from "./components/Carrousel/CustomCarrousel";

function App() {
  const [copied, setCopied] = useState(false);

  return (
    <Container fluid className="pt-1 pb-1">   
      <Header copied={copied} setCopied={setCopied}/>
      <CustomCarrousel/>
      <Skills setCopied={setCopied} />
    </Container>
  );
}

export default App;
