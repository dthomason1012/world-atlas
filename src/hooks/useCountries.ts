import {
  fetchAllCountries,
  fetchCountryByCode,
  searchCountries,
} from "@/api/countries";
import axios from "axios";
import { useQuery } from "react-query";

export interface Country {
  borders: string[];
  capital: string[];
  currencies: object;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  languages: object;
  name: { common: string; official: string };
  population: number;
  region: string;
  subregion: string;
  tld: string[];
  cca3: string;
}

export const useCountries = () => {
  const useFetchAllCountries = () => {
    return useQuery<Country[], Error>(["countries"], fetchAllCountries);
  };
  const useFetchCountryByCode = (code: string) => {
    return useQuery<Country[], Error>(
      ["countries", code],
      () => fetchCountryByCode(code),
      {
        enabled: !!code,
      }
    );
  };
  const useSearchCountries = (query: string) => {
    return useQuery<Country[], Error>(
      ["countries", query],
      () => searchCountries(query),
      {
        enabled: !!query,
      }
    );
  };

  return {
    useFetchAllCountries,
    useFetchCountryByCode,
    useSearchCountries,
  };
};
