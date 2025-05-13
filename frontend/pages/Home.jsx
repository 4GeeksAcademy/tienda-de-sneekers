import { Container } from "react-bootstrap";
import NavbarMenu from "../src/Components/Navbar";

function Home() {
  // console.log(import.meta.env.VITE_URL);
  return (
    <>
      <NavbarMenu />
      <Container>
        <h1>BAMBAS</h1>
      </Container>
    </>
  );
}

export default Home;
