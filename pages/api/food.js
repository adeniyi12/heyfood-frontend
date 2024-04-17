import { useQuery } from "@tanstack/react-query";
import { api } from "./axios";

export const useGetTags = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["tags"],
    queryFn: () => api("/tags"),
    onError: (err) => {
      console.log(err);
    },
  });
  return { isLoading, data: data?.data?.data, error };
};

export const useGetRestaurants = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["restaurants"],
    queryFn: () => api("/restaurants"),
    onError: (err) => {
      console.log(err);
    },
  });
  return { isLoading, data: data?.data?.data, error };
};

export const useSortRestaurants = (option) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["restaurants", option],
    queryFn: () => api(`/restaurants/sortby?option=${option}`),
    onError: (err) => {
      console.log(err);
    },
  });
  return { isLoading, data: data?.data?.data, error };
}

export const useSearchRestaurants = (name) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["restaurants", name],
    queryFn: () => api(`/restaurants/search?name=${name}`),
    onError: (err) => {
      console.log(err);
    },
  });
  return { isLoading, data: data?.data?.data, error };
}
