export default (source, description) => {
  const img = new Image();
  img.src = source;
  img.alt = description;

  return img;
};
