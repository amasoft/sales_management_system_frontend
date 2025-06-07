var data = [
  { running: 3, closed_pt: 40, closerate: 10, day: "2024-01-01" },
  { running: 7, closed_pt: 8, closerate: 10, day: "2024-01-02" },
  { running: 3, closed_pt: 40, closerate: 10, day: "2024-01-03" },
  { running: 3, closed_pt: 40, closerate: 10, day: "2024-01-04" },
  { running: 3, closed_pt: 40, closerate: 10, day: "2024-01-06" },
  { running: 3, closed_pt: 40, closerate: 10, day: "2024-01-09" },
];

var infor = [
  { count: 10, day: "2024-01-01" },
  { count: 10, day: "2024-01-02" },
  { count: 10, day: "2024-01-03" },
];

infor.forEach((infoItem) => {
  let dataItem = data.find((dataItem) => dataItem.day === infoItem.day);
  if (dataItem) {
    dataItem.closed_pt += infoItem.count; // Add `count` to `closed_pt`
  }
});

console.log(data);
