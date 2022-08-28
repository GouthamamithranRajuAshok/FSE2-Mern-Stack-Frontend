import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CompanyList from "./components/company-list/CompanyList";
import CompanySearch from "./components/company-search/CompanySearchComponent";
import NavBarComponent from "./components/navbar/NavbarComponent";

function App() {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route path="/SearchResult" element={<CompanySearch />} />
        <Route path="/CompanyList" element={<CompanyList />} />
      </Routes>
    </Router>
  );
}

export default App;
