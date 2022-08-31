import axios from "axios";

const getStockPrices = async (companyCode, startDate, endDate) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/market/stock/get/${companyCode}/${startDate}/${endDate}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export { getStockPrices };
