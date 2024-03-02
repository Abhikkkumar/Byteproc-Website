function generateLink(string) {
  if (string === "Home") {
    return "/";
  }
  if(string.toLowerCase()==="internships"){
    return "https://intern.byteproc.com/";
  }
  // if(string.toLowerCase()==="workshops"){
  //   return "https://intern.byteproc.com/";
  // }
  let result = string.replace(/ /g, "-");
  result = `/${result.toLowerCase()}`;
  return result;
}
export default generateLink;
