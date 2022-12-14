 
const ordering = (arr, type) => {
  let order = arr;
  if (type === "asc_Alf") {
    order.sort(function (a, b) {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
      return 0;
    });
  }

  if (type === "des_Alf") {
    order.sort(function (a, b) {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
      if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
      return 0;
    });
  }

  if (type === "asc_Ata") order.sort((a, b) => b.imdbRating - a.imdbRating);
  if (type === "des_Ata") order.sort((a, b) => a.imdbRating - b.imdbRating);

  return order;
};

export default ordering
