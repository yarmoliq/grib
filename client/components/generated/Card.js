const cardStyle = {
  margin: 10,
}

export default ({ title, description }) => (
<div class="card" style={cardStyle}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a class="btn btn-primary disabled">Go somewhere</a>
  </div>
</div>
);
