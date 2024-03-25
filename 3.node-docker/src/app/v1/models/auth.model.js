const dataDummy = {
  name: "Nguyen Tien Tai",
  age: 24,
  job: "Teacher and Developer",
};

module.exports = {
  getAll: async () => {
    return dataDummy;
  },

  save: async (data) => {
    return data;
  },
};
