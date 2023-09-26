import { useCountries } from "@/hooks/useCountries";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const BorderButton = ({ code }: { code: string }) => {
  const { push } = useRouter();
  const { useFetchCountryByCode } = useCountries();
  const { data: country, isLoading } = useFetchCountryByCode(code);
  return (
    <Button
      m={2}
      boxShadow="md"
      key={code}
      onClick={() => push(`/${code}`)}
      isLoading={isLoading}
    >
      {country?.[0]?.name.common}
    </Button>
  );
};
