fetch("/json/data.json")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
