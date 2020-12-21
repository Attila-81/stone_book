function pageLoad() {
  // 3 legfontosabb dolog:
  // 1. Soha ne add fel, mindenre van megoldás, csak néha több időbe telik megtalálni.
  // 2. Kommentelj sokat. A rossznak itélt kódsorokat ne töröld ki, hanem kommenteld ki, lehet még szükség lesz rá.
  // 3. Tagolj, hogy a kódod később is olvasható, és értelmezhető legyen. Ehhez használj kifejező elnevezéseket.
  // Aranyszabályok html, css, js témakörben.
  // HTML
  // 1. Script hivatkozását a head-be kell tenni
  /* <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <script src="./script.js"></script>
    <title>Stone Book</title>
	</head> */
  // 2. Ha törölsz egy taget, akkor annak a befejező tagjét is törölni kell
  //<div></div>
  // 3. id egy oldalon nem lehet azonos másik tag id-jével
  /* <div id="div"></div>
		<div id="div"></div> */
  // CSS
  // 1. Mindig ezzel kezdj:
  /* 	*,
	*::before,
	*::after {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	} */
  // 2. id selector: #, class selector: .
  /* #root{}
		.class{}
	*/
  // 3. Próbáld meg kerülni a többszöri formázást
  /* <div>
		<h1></h1>
	</div>
	div{
		background-color: black;
	}
	h1{
		background-color: black;
	} */
  // JS
  // 1. Mindig pageLoad-dal kezdjük a scriptet
  // function pageLoad(){
  // }
  // window.addEventListener("load", pageLoad);
  // 2. Ne használd az onclick funkciót, inkább a következő kódot helyette:
  /* 	function clickEvent() {
			document.querySelector("body").classList.toggle("clicked");
		}
		document.getElementById("open").addEventListener("click", clickEvent);
 */
  // 3. Nagyon figyelj a zárójelek, idézőjelek, pontosvessző, vessző megfelelő használatára
  /* for (let i = 0; i < aTextArray.length; i++) {
    console.log(aTextArray[i]);
    rootE.insertAdjacentHTML(
      "beforeend",
      `
			<div class="fruit">${aTextArray[i]}</div>
			`
    );
	} */

  let regularRules = [];
  regularRules.push(
    {
      tag: `div class="regularRules"`,
      content:
        "1. Soha ne add fel, mindenre van megoldás, csak néha több időbe telik megtalálni.",
    },
    {
      tag: `div class="regularRules"`,
      content:
        "2. Kommentelj sokat. A rossznak itélt kódsorokat ne töröld, hanem kommenteld ki, lehet még szükség lesz rá.",
    },
    {
      tag: `div class="regularRules"`,
      content:
        "3. Tagolj, hogy a kódod később is olvasható, és értelmezhető legyen. Ehhez használj kifejező elnevezéseket.",
    }
  );

  let importantRules = [];
  importantRules.push(
    {
      tag: `div class="important"`,
      content: "HTML 1. : Script hivatkozását a head-be kell tenni",
      tag1: `code class="importantRules"`,
      content1: `head <br>
      meta charset="UTF-8"<br>
      meta name="viewport" content="width=device-width, initial-scale=1.0"<br>
      link rel="stylesheet" href="./style.css"<br>
      script src="./script.js"<br>
      title>Stone Book<br>
			head`,
    },
    {
      tag: `div class="important"`,
      content:
        "HTML 2. : Ha törölsz egy taget, akkor annak a befejező tagjét is törölni kell",
      tag1: `code class="importantRules"`,
      content1: `div <br>
      /div`,
    },
    {
      tag: `div class="important"`,
      content: "HTML 3. : id egy oldalon nem lehet azonos másik tag id-jével",
      tag1: `code class="importantRules"`,
      content1: `div id="div"<br>
			div id="div"`,
    },
    {
      tag: `div class="important"`,
      content: "CSS 1. : Mindig ezzel kezdj",
      tag1: `code class="importantRules"`,
      content1: `
			*,<br>
			*::before,<br>
			*::after {<br>
				padding: 0;<br>
				margin: 0;<br>
				box-sizing: border-box;<br>
			}`,
    },
    {
      tag: `div class="important"`,
      content: "CSS 2. : id selector: #, class selector: .",
      tag1: `code class="importantRules"`,
      content1: `
			#id{}<br>
			.class{}`,
    },
    {
      tag: `div class="important"`,
      content: "CSS 3. : Próbáld meg kerülni a többszöri formázást",
      tag1: `code class="importantRules"`,
      content1: `
			div<br>
			h1<br>
			/div<br>
			div{<br>
				background-color: black;<br>
			}<br>
			h1{<br>
				background-color: black;<br>
			}`,
    },
    {
      tag: `div class="important"`,
      content: "JS 1. : Mindig pageLoad-dal kezdjük a scriptet",
      tag1: `code class="importantRules"`,
      content1: `
			function pageLoad(){}<br>
			window.addEventListener("load", pageLoad);`,
    },
    {
      tag: `div class="important"`,
      content:
        "JS 2. : Ne használd az onclick funkciót, inkább a következő kódot helyette:",
      tag1: `code class="importantRules"`,
      content1: `
			function clickEvent() {<br>
				document.querySelector("body").classList.toggle("clicked");<br>
			}<br>
			document.getElementById("open").addEventListener("click", clickEvent);`,
    },
    {
      tag: `div class="important"`,
      content:
        "JS 3. : Nagyon figyelj a zárójelek, idézőjelek, pontosvessző, vessző megfelelő használatára",
      tag1: `code class="importantRules"`,
      content1: `
			for (let i = 0; i < aTextArray.length; i++) {<br>
				console.log(aTextArray[i]);<br>
				rootE.insertAdjacentHTML(<br>
					"beforeend",<br>
					"<div class="fruit">Gyümölcs</div>"<br>
				);`,
    }
  );

  let rootE = document.getElementById("root");
  rootE.insertAdjacentHTML(`beforeend`, `<h1>Legfontosabb szabályok</h1>`);
  for (regularRule of regularRules) {
    rootE.insertAdjacentHTML(
      `beforeend`,
      `<${regularRule.tag}>${regularRule.content}</${regularRule.tag}>`
    );
  }
  rootE.insertAdjacentHTML(`beforeend`, `<hr>`);

  for (importantRule of importantRules) {
    rootE.insertAdjacentHTML(
      `beforeend`,
      `<${importantRule.tag}>${importantRule.content}</${importantRule.tag}><br>
			<${importantRule.tag1}>${importantRule.content1}</${importantRule.tag1}>
			<hr>`
    );
  }
}

window.addEventListener("load", pageLoad);
