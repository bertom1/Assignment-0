function titleCaseEdit(title) {
  // Insert code here;
  let titleArr = title.split(" ");
  for (let i = 0; i < titleArr.length; i++){
    if (titleArr[i].charAt(0) != titleArr[i].charAt(0).toUpperCase()) {
      titleArr[i] = titleArr[i].charAt(0).toUpperCase() + titleArr[i].substring(1);
    }
  };
  return titleArr.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;