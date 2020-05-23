export const Status = [
  {
    id: 1,
    name: "Working On It",
    color: "#febf6f",
  },
  {
    id: 2,
    name: "Critical",
    color: "#a15cdb",
  },
  {
    id: 3,
    name: "Done",
    color: "#00c87f",
  },
  {
    id: 4,
    name: "Stuck",
    color: "#e3445a",
  },
];

export const getStatus = (id) => {
  if (!id) return null;
  return Status.filter((i) => i.id === id)[0];
};
