export const useNearbyStations = () => {
  return {
    data: [],
    isLoading: false,
  };
};

export const useStationDetail = (id: string) => {
  return {
    data: null,
    isLoading: false,
  };
};

export const useFavoriteStations = () => {
  return {
    data: [],
    isLoading: false,
  };
};
