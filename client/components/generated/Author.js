// Generated component based on Author.component (Lona)
const cardStyle = {
  width: 200,
  margin: 10
}

const containerStyle = {
  display: "flex",
  flexShrink: 0,
  flexDirection: "row",
  flexWrap: "wrap",
}

export default ({ name, age }) => (
  <div>
    <h3>Author</h3>
    <p>Author: {name}</p>
    <p>Age: {age}</p>
  </div>
);
