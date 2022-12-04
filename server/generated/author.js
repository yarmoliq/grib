

module.exports = function author({ name }) {
  return {
    name: "Author",
    props: [
      {
        name: "name",
        value: name
      }
    ]
  };
};
