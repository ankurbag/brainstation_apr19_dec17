function Cat({ id, url }) {
  return (
    <div key={id} class="gallery">
      <img src={url} />
      <div class="desc">lorem poseum </div>
    </div>
  );
}

export default Cat;
