

module.exports = function heading({ text }) {
  return {
    name: "Heading",
    props: [
      {
        name: "text",
        value: text
      }
    ]
  };
};
