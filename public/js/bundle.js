{
  const button = document.getElementById("form-submit");
  const form = document.getElementById("form");

  button.addEventListener("click", async (e) => {
    e.preventDefault();
    fetch("/do-post", {
      method: "POST",
    })
      .then((response) => response.text())
      .then((value) => {
        const div = document.createElement("div");
        div.innerHTML = value;
        form.appendChild(div);
      })
      .catch((e) => console.log(e));
  });
}
