import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddStockPrice from "./components/add-stock-price/AddStockPrice";
import CompanyList from "./components/company-list/CompanyList";
import CompanySearch from "./components/company-search/CompanySearchComponent";
import CreateCompany from "./components/create-company/CreateCompany";
import NavBarComponent from "./components/navbar/NavbarComponent";
import StockDetails from "./components/stock-details/StockDetails";

function App() {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route path="/SearchResult" element={<CompanySearch />} />
        <Route path="/CompanyList" element={<CompanyList />} />
        <Route path="/AddCompany" element={<CreateCompany />} />
        <Route path="/StockDetails" element={<StockDetails />} />
        <Route path="/AddStock/:companyCode" element={<AddStockPrice />} />
      </Routes>
    </Router>
  );
}

export default App;
