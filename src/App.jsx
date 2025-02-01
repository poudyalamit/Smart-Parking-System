import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Book from "./components/Book";
import Landing from "./components/Landing";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
  );
}
