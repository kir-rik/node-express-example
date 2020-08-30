{
  const button = document.getElementById("form-submit");
  const callsCount = document.getElementById("calls-count");

  button.addEventListener("click", async (e) => {
    e.preventDefault();
    fetch("/do-post", {
      method: "POST",
    })
      .then((response) => response.text())
      .then((value) => {
        callsCount.innerHTML = value;
      })
      .catch((e) => console.log(e));
  });
}
