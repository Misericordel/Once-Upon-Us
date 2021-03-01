if (window.innerWidth <= 600) {
  const searchIcon = document.getElementsByClassName("search-icon")[0];
  const searchHeader = document.getElementsByClassName("search-header")[0];
  let isShown = false;
  searchHeader.onclick = (event) => {
    if (!isShown) {
      if (event.target.localName === "svg") {
        document.getElementsByClassName(
          "left-search-container"
        )[0].style.display = "none";
        const input = document.getElementsByTagName("input")[0];
        input.style.display = "flex";
        input.style.width = "230px";
        searchIcon.style.display = "none";
        isShown = true;
      }
    } else {
      if (event.target.localName !== "input") {
        document.getElementsByClassName(
          "left-search-container"
        )[0].style.display = "flex";
        const input = document.getElementsByTagName("input")[0];
        input.style.display = "none";
        searchIcon.style.display = "flex";
        isShown = false;
      }
    }
  };
}
