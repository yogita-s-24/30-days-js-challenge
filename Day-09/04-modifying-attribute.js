<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Modifying Attributes and Classes</title>
  </head>
  <body>
    <!-- Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag). -->
    <img
      src="data:image/jpeg;base64,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"
      alt="Trulli in Alberobello, Italy"
    />
    <script>
      const img = document.querySelector("img");
      img.src =
        "data:image/jpeg;base64,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";
    </script>
    <!-- Task 8: Add and remove a CSS class to/from an HTML element. -->

    <h5>hi i am there</h5>
    <script>
      let el = document.querySelector("h5");
      el.style = "color:red; font-size:100px";
    </script>
  </body>
</html>