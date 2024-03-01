function generateLink(string) {
  if (string === "Home") {
    return "/";
  }
  let result = string.replace(/ /g, "-");
  result = `/${result.toLowerCase()}`;
  return result;
}
export default generateLink;
