const getColumns = (data) => {
  const columnsArray = Object.keys(data);
  let columnObject = [];
  columnsArray.map((column) => {
    columnObject.push({ Header: column, accessor: column });
  });
  return columnObject;
};

export { getColumns };
