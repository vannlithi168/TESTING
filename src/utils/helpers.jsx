export const filterCountries = (countries, searchTerm) => {
  return countries.filter((country) =>
    country.name.official.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const sortCountries = (countries, sortOrder) => {
  return [...countries].sort((a, b) => {
    const nameA = a.name.official.toLowerCase();
    const nameB = b.name.official.toLowerCase();
    return sortOrder === "asc"
      ? nameA.localeCompare(nameB)
      : nameB.localeCompare(nameA);
  });
};

export function isEqualArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
