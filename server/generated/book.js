

module.exports = function book({ title, description }) {
  return {
    name: "Book",
    props: [
      {
        name: "title",
        value: title
      },
      {
        name: "description",
        value: description
      }
    ]
  };
};
