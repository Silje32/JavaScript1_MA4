// Using promises to make the API call.
//Loop through the result using a for loop.
//Inside the for loop, use innerHTML to create the cards.

function getJson() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => {
        let output = "<h1>CARDS</h1>";
    data.forEach(function(card) {
      output += `
        <div class ="info">
          <div><h3> userID: ${card.userId}</h3></div>
          <div><h3> ID: ${card.id}</h3></div>
          <div><h3> Title: ${card.title}</h3></div>
          <div><h3> Completed: ${card.completed}<h3></div>
        </div>
      `;
    });
    document.getElementById('output').innerHTML = output;
  })
}
getJson();
