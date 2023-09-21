import axios from "axios";

const url = "https://restcountries.com/v3.1";

export const fetchAllCountries = async () => {
  const response = await axios.get(`${url}/all`);
  return response.data;
};

export const fetchCountryByCode = async (code: string) => {
  const response = await axios.get(`${url}/alpha/${code}?fullText=true`);
  return response.data;
};

export const searchCountries = async (query: string) => {
  const response = await axios.get(`${url}/name/${query}`);
  return response.data;
};
