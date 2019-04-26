let presentator = 'Matthijs';
let gast1 = 'Sylvana';
let gast2 = 'Martin';
let gast3 = 'Ingeborg';
let tafelheer = 'Marc';
let situatie = ' ';
let text = document.querySelector(".test")
let textblock = document.querySelector(".container")
let play = document.querySelector('.start')
let pause = document.querySelector('.pauze')
let herstart = document.querySelector('.herstart')
let regie = document.querySelector('.regie')
let publiek = document.querySelector('.publiek')
let tafel = document.querySelector('.tafel')
let timer = 0;


play.addEventListener('click', function () {
  pause.addEventListener("click", function() {
    clearInterval(mainInterval)

  })
  herstart.addEventListener("click", function() {
    timer = 0;
    text.innerHTML = "";
  })

let mainInterval = setInterval(function(){
  timer++

  switch (timer) {
    case 1:
      text.insertAdjacentHTML('beforeend', textToHtml('Welkom bij De Wereld Draait Door met tafelheer Marc-Marie Huijbregts.', presentator ))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 5:
      text.insertAdjacentHTML('beforeend', textToHtml( 'Aan tafel gaan zitten Sylvana Simons en documentaire maakster Ingeborg jansen. Zondag gaat de film Sylvana demon of diva in premiere op het IDFA fascinerende anderhalf uur durend portret van de meest besproken vrouw van de afgelopen 3 jaar kunnen we makkelijk zeggen.', presentator))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 8:
      text.insertAdjacentHTML('beforeend', textToHtml('Uhhmmm.. ', presentator ))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 9:
      text.insertAdjacentHTML('beforeend', textToHtml('En die documentaire begint Sylvana en Ingeborg uiteraard hier aan tafel en daar begon het avontuur ook misschien het is de confrontatie jij was toen mijn tafeldame Sylvana ', presentator ))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 13:
      text.insertAdjacentHTML('beforeend', textToHtml('Hier zat Martin Simek ook aan tafel.', presentator))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 15:
      text.insertAdjacentHTML('beforeend', textToHtml('Het ging over vluchtelingen. We gaan straks naar dat moment kijken. Het was van mei 2015.', presentator))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 17:
      text.insertAdjacentHTML('beforeend', textToHtml('*Matthijs citeert zin van Sylvana*'))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 19:
      text.insertAdjacentHTML('beforeend', textToHtml('Jij zei: ik heb dit moment zo lang mogelijk proberen te vermijden.', presentator))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 21:
      text.insertAdjacentHTML('beforeend', textToHtml('Je wist dat ooit iets zou komen dat je wilde vermijden. Wat was dat?', presentator))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 24:
      text.insertAdjacentHTML('beforeend', textToHtml('Ik probeerde eigenlijk te voorkomen wat ik nu de laatste jaren leef. Het moment waarvan je weet dat het juist is om te reageren. Maar je weet ook dat de gevolgen niet prettig zijn.', gast1))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 27:
      text.insertAdjacentHTML('beforeend', textToHtml('En dit moment was exemplarisch.', gast1))
      textblock.scrollTop = textblock.scrollHeight;
      break;
      text.insertAdjacentHTML('beforeend', textToHtml(gast1, ''))
      break;
    case 30:
      text.insertAdjacentHTML('beforeend', textToHtml('En dat moment voelde je toen je hier zat?', tafelheer))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 33:
      text.insertAdjacentHTML('beforeend', textToHtml('Ja. Toen ik daar zat, had ik een gesprek met mezelf van vijf seconden.', gast1, ))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 36:
      text.insertAdjacentHTML('beforeend', textToHtml('Ik heb mezelf tientallen vragen gesteld. Ga je iets zeggen? Of niet?', gast1))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 40:
      text.insertAdjacentHTML('beforeend', textToHtml('Als je niets zegt, wat zijn dan de consequenties?', gast1))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 44:
      text.insertAdjacentHTML('beforeend', textToHtml('Hoe ga je je stem gebruiken? Van alles ging er door mijn hoofd.', gast1))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 47:
      text.insertAdjacentHTML('beforeend', textToHtml('Natuurlijk had je het gevoel dat je iets moest zeggen. Het ging over het woord zwartjes. Het woord dat Martin in zijn mond nam', presentator))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 49:
      text.insertAdjacentHTML('beforeend', textToHtml('Ik geloof niet dat Martin een racist is. Maar hij gebruikte het woord wel.', presentator))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 51:
      text.insertAdjacentHTML('beforeend', textToHtml('Had je het gevoel dat jouw interruptie veel consequenties zouden geven?', presentator))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 54:
      text.insertAdjacentHTML('beforeend', textToHtml('Ja, dat wist ik meteen. Want het is heel gevoelig in Nederland.', gast1))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 58:
      text.insertAdjacentHTML('beforeend', textToHtml('Ik heb mijn woorden heel bewust gekozen. Ik heb goed nagedacht over wat ik ging zeggen.', gast1, ))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 62:
      text.insertAdjacentHTML('beforeend', textToHtml('Ik heb gekozen voor een open vraag. Ik heb het R-woord niet gebruikt.', gast1))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 65:
      text.insertAdjacentHTML('beforeend', textToHtml('Er kwam geen beschuldiging in mij op. Maar wel de vraag: heb je nagedacht over het woordgebruik?', gast1))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 68:
      text.insertAdjacentHTML('beforeend', textToHtml('Ik vind het wel opmerkelijk dat jij zei: Martin Simek is geen racist.', tafelheer))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 70:
      text.insertAdjacentHTML('beforeend', textToHtml('Geeft al aan hoe beladen dat moment was.', tafelheer))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 73:
      text.insertAdjacentHTML('beforeend', textToHtml('*We gaan even kijken naar het fragment*'))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 76:
      text.insertAdjacentHTML('beforeend', textToHtml('DWDD fragment (13-05-2015)'))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 78:
      text.insertAdjacentHTML('beforeend', textToHtml('Ja, ik heb mezelf niks kwalijk te nemen.', gast2))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 80:
      text.insertAdjacentHTML('beforeend', textToHtml('Want ik heb af en toe die zwartjes gewoon meegenomen van zee… naar boven en naar beneden.', gast2))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 83:
      text.insertAdjacentHTML('beforeend', textToHtml('Ik ben eigenlijk heel lief voor ze. Ik heb ‘m ook omarmd.', gast2))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 85:
      text.insertAdjacentHTML('beforeend', textToHtml('Mag ik wat vragen?', gast1))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 86:
      text.insertAdjacentHTML('beforeend', textToHtml('Ja', gast2))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 88:
      text.insertAdjacentHTML('beforeend', textToHtml('Die term die je net gebruikte, is dat grappig bedoeld? Of cynisch.', gast1))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 90:
      text.insertAdjacentHTML('beforeend', textToHtml('Nee dat is niet grappig bedoeld.', gast2))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 92:
      text.insertAdjacentHTML('beforeend', textToHtml('Mijn vrouw is ook zwart.', gast2))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 93:
      text.insertAdjacentHTML('beforeend', textToHtml('Dat is geen excuus he?', gast1))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 95:
      text.insertAdjacentHTML('beforeend', textToHtml('Eigenlijk ben ik heel lief voor de zwartjes. Maar eigenlijk doe ik niks.', gast2))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 97:
      text.insertAdjacentHTML('beforeend', textToHtml('Sylvana heeft liever dat je dat woord niet gebruikt.', presentator))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 99:
      text.insertAdjacentHTML('beforeend', textToHtml('Nee, ik vind het woord zwart..', gast1))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 100:
      text.insertAdjacentHTML('beforeend', textToHtml('Dat is nou niet belangrijk, dat komt wel weer met Sinterklaas.', gast2))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 102:
      text.insertAdjacentHTML('beforeend', textToHtml('*Fragment afgelopen*'))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 103:
      text.insertAdjacentHTML('beforeend', textToHtml('*Publiek reageert verbaast over deze uitspraak*'))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 104:
      text.insertAdjacentHTML('beforeend', textToHtml('Je hoort het ook aan de reacties hier: je vraagt je af of Martin Simek wat te horen krijgt.', presentator))
      break;
    case 107:
      text.insertAdjacentHTML('beforeend', textToHtml('Dat gebeurde niet. Vooral jij kreeg wat te horen.', presentator))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 109:
      text.insertAdjacentHTML('beforeend', textToHtml('Ja, ik zette na de uitzending mijn telefoon aan.',gast1 ))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 111:
      text.insertAdjacentHTML('beforeend', textToHtml('En ik leefde plots in een ander land.',gast1 ))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    case 113:
      text.insertAdjacentHTML('beforeend', textToHtml('Einde aflevering'))
      textblock.scrollTop = textblock.scrollHeight;
      break;
    // case 60:
    //   text.insertAdjacentHTML('beforeend', textToHtml(gast1, ''))
    //   break;
  }

}, 1000);
})

function textToHtml(msg, speaker = null) {
  if (speaker) {
      return `<li class="${speaker.toLowerCase()}"><span>${speaker}:</span><span>${msg}</span></li>`
  } else {
    return `<li class="announcement">${msg}</li>`
  }

}

regie.addEventListener('click', function () {
  document.querySelector(".csslink").href = "regie.css";
})
publiek.addEventListener('click', function () {
  document.querySelector(".csslink").href = "publiek.css";
})
tafel.addEventListener('click', function () {
  document.querySelector(".csslink").href = "main.css";
})

// text.insertAdjacentHTML('beforeend', textToHtml(gast1, 'En ik leefde plots in een ander land.'))
