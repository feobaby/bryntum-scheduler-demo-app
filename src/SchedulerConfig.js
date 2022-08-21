const schedulerConfig = {
  startDate: new Date(2022, 2, 20, 6),
  endDate: new Date(2022, 2, 20, 19),
  viewPreset: "hourAndDay",
  rowHeight: 50,
  barMargin: 5,
  multiEventSelect: true,

  columns: [{ text: "Drivers", field: "name", width: 130 }],

  crudManager: {
    transport: {
      load: {
        url: "data/scheduler-data.json",
      },
    },
    autoLoad: true,
  },
};

export { schedulerConfig };
