const generateData = (totalRows = 5) => {
  let rows = [];
  for (let i = 0; i < totalRows; i++) {
    rows.push({
      "pet name": "pack",
      "parent name": "ss",
      email: "ssss",
      "last visit": "sss",
    });
  }

  return {
    data: [
      { email: "ssss", last_visit: "sss", parent_name: "mydeen" },
      { email: "ssss", last_visit: "sss", parent_name: "veena" },
      { email: "ssss", last_visit: "sss", parent_name: "packeer" },
      { email: "ssss", last_visit: "sss", parent_name: "pack" },
      { email: "ssss", last_visit: "sss", parent_name: "hoo" },
    ],
    columns: ["email", "last_visit", "parent_name"],
  };
};

export default generateData;
