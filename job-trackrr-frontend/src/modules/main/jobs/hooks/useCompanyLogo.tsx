import { useQuery } from "@tanstack/react-query";
export const useCompanyLogo = (q: string) => {
  const logDevKey = import.meta.env.VITE_LOGO_DEV_KEY;
  const getLogo = async () => {
    const res = await fetch(`https://api.logo.dev/search?q=${q}`, {
      headers: {
        Authorization: `Bearer ${logDevKey}`,
      },
    });
    const logos = res.json();
    return logos;
  };

  const {
    data: logos,
    isLoading: loading,
    error,
  } = useQuery({
    queryFn: () => getLogo(),
    queryKey: ["logo"],
  });
  return {
    logos,
    loading,
    error,
  };
};
