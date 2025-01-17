import axios from "axios";

const getCompanyByCompanyCode = async (companyCode) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/market/company/info/${companyCode}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const getAllCompanies = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/market/company/getall`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const addNewCompany = async (newCompany) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/market/company/register`,
      newCompany
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const deleteCompany = async (companyCode) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/market/company/delete/${companyCode}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export {
  getCompanyByCompanyCode,
  getAllCompanies,
  addNewCompany,
  deleteCompany,
};
