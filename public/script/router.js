$(document).ready(() => {
  page('/', index);
  page('/sobre', sobre);
  // page('/lancamentos', lancamentos);
  page('/contato', contato);
  page();
})

function index() {
  $("#content").html("");
  const home = `<div id="home">
    <form>
    <input type="text" id="searchTerm" style="font-style:italic" placeholder="Qual filme você está buscando?"/>
    <button id="searchButton">
    <i class="fa fa-search"></i>
    </button>
    </form>
</div>`
  $("#content").html(home);
  $("#searchButton").on( "click", (event) => {
    event.preventDefault();
    showMovies()
  });
}

function showMovies() {
  fetch(`http://www.omdbapi.com/?apikey=7acb37a5&s=${$("#searchTerm").val()}`, { method: 'GET' })
    .then(response => response.json())
    .then(data => insertMovies(data));
}
function insertMovies(data) {
  for (let item of data.Search) {
    let content = ` <div><img src="${item.Poster}"  width="150" height="200"> <h3>${item.Title}</h3> <a href="https://www.imdb.com/title/${item.imdbID}">IMDB</a></div> `;
    $('#content').append(content);
  }
}

function contato() {
  $("#content").html("");
  const contato = `<div id="contato">
  <form id="ajax-contact" method="post" action="mailer.php">
  <div class="field">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
  </div>
  <div class="field">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
  </div>
  <div class="field">
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
  </div>
  <div class="field">
      <button type="submit">Send</button>
  </div>
</form>
</div>`
  $("#content").html(contato);
  $("#searchButton").on( "click", (event) => {
    event.preventDefault();
    showMovies()
  });
}

function sobre() {
  $("#content").html("");
  const sobre = `<div id="sobre">
  <div class="about">
  <h5>
  Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Paisis, filhis, espiritis santis. Aenean aliquam molestie leo, vitae iaculis nisl.

  </br></br>Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Detraxit consequat et quo num tendi nada.
  
  </br></br>In elementis mé pra quem é amistosis quis leo. Interagi no mé, cursus quis, vehicula ac nisi. Quem num gosta di mim que vai caçá sua turmis! Viva Forevis aptent taciti sociosqu ad litora torquent.
  </h5>
</div>
  </div>`
  $("#content").html(sobre);
  $("#searchButton").on( "click", (event) => {
    event.preventDefault();
    showMovies()
  });
}