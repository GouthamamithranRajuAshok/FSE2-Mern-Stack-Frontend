import axios from "axios";

const getCompanyByCompanyCode = async (companyCode) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/market/company/info/${companyCode}`
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export { getCompanyByCompanyCode };
