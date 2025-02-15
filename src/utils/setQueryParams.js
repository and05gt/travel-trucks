export const setQueryParams = (filters) => {
  const queryParams = [];

  if (filters.location) {
    queryParams.push(`location=${filters.location}`);
  }

  filters.vehicleEquipment?.forEach((equipment) => {
    queryParams.push(`${equipment}=${true}`);
  });

  if (filters.vehicleType) {
    queryParams.push(`form=${filters.vehicleType}`);
  }

  return queryParams.join('&');
};
