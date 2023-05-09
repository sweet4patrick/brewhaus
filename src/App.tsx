import { Navbar, Container } from "react-bootstrap";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Details, Home } from "./pages";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Brewhaus</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="pt-4">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
