

module.exports = function review({ author, text }) {
  return {
    name: "Review",
    props: [
      {
        name: "author",
        value: author
      },
      {
        name: "text",
        value: text
      }
    ]
  };
};
