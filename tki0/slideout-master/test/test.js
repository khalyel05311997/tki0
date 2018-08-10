
AOS.init();



var khodhra = ['Bsal','Sebnekh','Felfel','Maadnous','Sfenerya']

khodhra.map(function(element) {


  $('#khodhra').append(`
    <li class="article">
      <img src="${element.src}">
      <h2 class="title">${element.title}</h2>
    </li>
    `)
})





