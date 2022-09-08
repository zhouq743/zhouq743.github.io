function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function capitalizeFirstLetter(string) {
  i = string.length;
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

var faceID = getRandomInt(0, 3).toString(),
  vegeID = getRandomInt(0, 7).toString(),
  expressionID = getRandomInt(0, 7).toString();

var name_dict = [
  "JAMES",
  "MARY",
  "JOHN",
  "PATRICIA",
  "ROBERT",
  "LINDA",
  "MICHAEL",
  "BARBARA",
  "WILLIAM",
  "ELIZABETH",
  "DAVID",
  "JENNIFER",
  "RICHARD",
  "MARIA",
  "CHARLES",
  "SUSAN",
  "JOSEPH",
  "MARGARET",
  "THOMAS",
  "DOROTHY",
  "CHRISTOPHER",
  "LISA",
  "DANIEL",
  "NANCY",
  "PAUL",
  "KAREN",
  "MARK",
  "BETTY",
  "DONALD",
  "HELEN",
  "GEORGE",
  "SANDRA",
  "KENNETH",
  "DONNA",
  "STEVEN",
  "CAROL",
  "EDWARD",
  "RUTH",
  "BRIAN",
  "SHARON",
  "RONALD",
  "MICHELLE",
  "ANTHONY",
  "LAURA",
  "KEVIN",
  "SARAH",
  "JASON",
  "KIMBERLY",
  "MATTHEW",
  "DEBORAH",
  "GARY",
  "JESSICA",
  "TIMOTHY",
  "SHIRLEY",
  "JOSE",
  "CYNTHIA",
  "LARRY",
  "ANGELA",
  "JEFFREY",
  "MELISSA",
  "FRANK",
  "BRENDA",
  "SCOTT",
  "AMY",
  "ERIC",
  "ANNA",
  "STEPHEN",
  "REBECCA",
  "ANDREW",
  "VIRGINIA",
  "RAYMOND",
  "KATHLEEN",
  "GREGORY",
  "PAMELA",
  "JOSHUA",
  "MARTHA",
  "JERRY",
  "DEBRA",
  "DENNIS",
  "AMANDA",
  "WALTER",
  "STEPHANIE",
  "PATRICK",
  "CAROLYN",
  "PETER",
  "CHRISTINE",
  "HAROLD",
  "MARIE",
  "DOUGLAS",
  "JANET",
  "HENRY",
  "CATHERINE",
  "CARL",
  "FRANCES",
  "ARTHUR",
  "ANN",
  "RYAN",
  "JOYCE",
  "ROGER",
  "DIANE",
  "JOE",
  "ALICE",
  "JUAN",
  "JULIE",
  "JACK",
  "HEATHER",
  "ALBERT",
  "TERESA",
  "JONATHAN",
  "DORIS",
  "JUSTIN",
  "GLORIA",
  "TERRY",
  "EVELYN",
  "GERALD",
  "JEAN",
  "KEITH",
  "CHERYL",
  "SAMUEL",
  "MILDRED",
  "WILLIE",
  "KATHERINE",
  "RALPH",
  "JOAN",
  "LAWRENCE",
  "ASHLEY",
  "NICHOLAS",
  "JUDITH",
  "ROY",
  "ROSE",
  "BENJAMIN",
  "JANICE",
  "BRUCE",
  "KELLY",
  "BRANDON",
  "NICOLE",
  "ADAM",
  "JUDY",
  "HARRY",
  "CHRISTINA",
  "FRED",
  "KATHY",
  "WAYNE",
  "THERESA",
  "BILLY",
  "BEVERLY",
  "STEVE",
  "DENISE",
  "LOUIS",
  "TAMMY",
  "JEREMY",
  "IRENE",
  "AARON",
  "JANE",
  "RANDY",
  "LORI",
  "HOWARD",
  "RACHEL",
  "EUGENE",
  "MARILYN",
  "CARLOS",
  "ANDREA",
  "RUSSELL",
  "KATHRYN",
  "BOBBY",
  "LOUISE",
  "VICTOR",
  "SARA",
  "MARTIN",
  "ANNE",
  "ERNEST",
  "JACQUELINE",
  "PHILLIP",
  "WANDA",
  "TODD",
  "BONNIE",
  "JESSE",
  "JULIA",
  "CRAIG",
  "RUBY",
  "ALAN",
  "LOIS",
  "SHAWN",
  "TINA",
  "CLARENCE",
  "PHYLLIS",
  "SEAN",
  "NORMA",
  "PHILIP",
  "PAULA",
  "CHRIS",
  "DIANA",
  "JOHNNY",
  "ANNIE",
  "EARL",
  "LILLIAN",
  "JIMMY",
  "EMILY",
  "ANTONIO",
  "ROBIN",
  "DANNY",
  "PEGGY",
  "BRYAN",
  "CRYSTAL",
  "TONY",
  "GLADYS",
  "LUIS",
  "RITA",
  "MIKE",
  "DAWN",
  "STANLEY",
  "CONNIE",
  "LEONARD",
  "FLORENCE",
  "NATHAN",
  "TRACY",
  "DALE",
  "EDNA",
  "MANUEL",
  "TIFFANY",
  "RODNEY",
  "CARMEN",
  "CURTIS",
  "ROSA",
  "NORMAN",
  "CINDY",
  "ALLEN",
  "GRACE",
  "MARVIN",
  "WENDY",
  "VINCENT",
  "VICTORIA",
  "GLENN",
  "EDITH",
  "JEFFERY",
  "KIM",
  "TRAVIS",
  "SHERRY",
  "JEFF",
  "SYLVIA",
  "CHAD",
  "JOSEPHINE",
  "JACOB",
  "THELMA",
  "LEE",
  "SHANNON",
  "MELVIN",
  "SHEILA",
  "ALFRED",
  "ETHEL",
  "KYLE",
  "ELLEN",
  "FRANCIS",
  "ELAINE",
  "BRADLEY",
  "MARJORIE",
];
// dict keys are randomized number, values are id and name id
var id_dict = {
  "000": 0,
  "001": 1,
  "002": 2,
  "003": 3,
  "004": 4,
  "005": 5,
  "006": 6,
  "007": 7,
  "010": 8,
  "011": 9,
  "012": 10,
  "013": 11,
  "014": 12,
  "015": 13,
  "016": 14,
  "017": 15,
  "020": 16,
  "021": 17,
  "022": 18,
  "023": 19,
  "024": 20,
  "025": 21,
  "026": 22,
  "027": 23,
  "030": 24,
  "031": 25,
  "032": 26,
  "033": 27,
  "034": 28,
  "035": 29,
  "036": 30,
  "037": 31,
  "040": 32,
  "041": 33,
  "042": 34,
  "043": 35,
  "044": 36,
  "045": 37,
  "046": 38,
  "047": 39,
  "050": 40,
  "051": 41,
  "052": 42,
  "053": 43,
  "054": 44,
  "055": 45,
  "056": 46,
  "057": 47,
  "060": 48,
  "061": 49,
  "062": 50,
  "063": 51,
  "064": 52,
  "065": 53,
  "066": 54,
  "067": 55,
  "070": 56,
  "071": 57,
  "072": 58,
  "073": 59,
  "074": 60,
  "075": 61,
  "076": 62,
  "077": 63,
  100: 64,
  101: 65,
  102: 66,
  103: 67,
  104: 68,
  105: 69,
  106: 70,
  107: 71,
  110: 72,
  111: 73,
  112: 74,
  113: 75,
  114: 76,
  115: 77,
  116: 78,
  117: 79,
  120: 80,
  121: 81,
  122: 82,
  123: 83,
  124: 84,
  125: 85,
  126: 86,
  127: 87,
  130: 88,
  131: 89,
  132: 90,
  133: 91,
  134: 92,
  135: 93,
  136: 94,
  137: 95,
  140: 96,
  141: 97,
  142: 98,
  143: 99,
  144: 100,
  145: 101,
  146: 102,
  147: 103,
  150: 104,
  151: 105,
  152: 106,
  153: 107,
  154: 108,
  155: 109,
  156: 110,
  157: 111,
  160: 112,
  161: 113,
  162: 114,
  163: 115,
  164: 116,
  165: 117,
  166: 118,
  167: 119,
  170: 120,
  171: 121,
  172: 122,
  173: 123,
  174: 124,
  175: 125,
  176: 126,
  177: 127,
  200: 128,
  201: 129,
  202: 130,
  203: 131,
  204: 132,
  205: 133,
  206: 134,
  207: 135,
  210: 136,
  211: 137,
  212: 138,
  213: 139,
  214: 140,
  215: 141,
  216: 142,
  217: 143,
  220: 144,
  221: 145,
  222: 146,
  223: 147,
  224: 148,
  225: 149,
  226: 150,
  227: 151,
  230: 152,
  231: 153,
  232: 154,
  233: 155,
  234: 156,
  235: 157,
  236: 158,
  237: 159,
  240: 160,
  241: 161,
  242: 162,
  243: 163,
  244: 164,
  245: 165,
  246: 166,
  247: 167,
  250: 168,
  251: 169,
  252: 170,
  253: 171,
  254: 172,
  255: 173,
  256: 174,
  257: 175,
  260: 176,
  261: 177,
  262: 178,
  263: 179,
  264: 180,
  265: 181,
  266: 182,
  267: 183,
  270: 184,
  271: 185,
  272: 186,
  273: 187,
  274: 188,
  275: 189,
  276: 190,
  277: 191,
  300: 192,
  301: 193,
  302: 194,
  303: 195,
  304: 196,
  305: 197,
  306: 198,
  307: 199,
  310: 200,
  311: 201,
  312: 202,
  313: 203,
  314: 204,
  315: 205,
  316: 206,
  317: 207,
  320: 208,
  321: 209,
  322: 210,
  323: 211,
  324: 212,
  325: 213,
  326: 214,
  327: 215,
  330: 216,
  331: 217,
  332: 218,
  333: 219,
  334: 220,
  335: 221,
  336: 222,
  337: 223,
  340: 224,
  341: 225,
  342: 226,
  343: 227,
  344: 228,
  345: 229,
  346: 230,
  347: 231,
  350: 232,
  351: 233,
  352: 234,
  353: 235,
  354: 236,
  355: 237,
  356: 238,
  357: 239,
  360: 240,
  361: 241,
  362: 242,
  363: 243,
  364: 244,
  365: 245,
  366: 246,
  367: 247,
  370: 248,
  371: 249,
  372: 250,
  373: 251,
  374: 252,
  375: 253,
  376: 254,
  377: 255,
};

var keys = Object.keys(id_dict);
keys.sort();
var randomR = faceID + vegeID + expressionID,
  IdNumber = id_dict[randomR],
  currentName = name_dict[IdNumber];

name_dict.forEach((i) => {
  $("section").prepend(
    $("<div/>").addClass("archive-tile")
    // .addClass("archive-image-container archive-face")
  );
});
$(".archive-tile").each(function (i) {
  $(this).append(
    $("<div/>")
      .addClass("archive-image-container archive-face")
      .append(
        $("<img/>").attr("src", `./images/face-${Math.floor(i / 64)}.png`)
      )
  );
  $(this).append(
    $("<div/>")
      .addClass("archive-image-container archive-vege")
      .append($("<img/>").attr("src", `./images/vege-${loop(i)}.png`))
  );
  $(this).append(
    $("<div/>")
      .addClass("archive-image-container archive-expression")
      .append($("<img/>").attr("src", `./images/expression-${i % 8}.png`))
  );
  $(this).append(
    $("<div/>")
      .addClass("archive-info archive-name-container")
      .append($("<h3/>").addClass("archive-name").html(name_dict[i]))
  );
  $(this).append(
    $("<div/>")
      .addClass("archive-info archive-id-container")
      .append(
        $("<h3/>")
          .addClass("archive-id")
          .html("#N00FA22" + keys[i])
      )
  );
});

// $(".archive-face").each(function (i) {
//   $(this).append($("<img/>").attr("src", `./images/face-${i % 4}.png`));
// });
// $(".archive-vege").each(function (i) {
//   $(this).append(
//     $("<img/>").attr("src", `./images/vege-${Math.floor(i / 8)}.png`)
//   );
// });
// $(".archive-expression").each(function (i) {
//   $(this).append($("<img/>").attr("src", `./images/expression-${i % 8}.png`));
// });

//grow seed
$("#button").click(function () {
  $("#button h6").css("display", "none");
  $("#button img").attr("src", "./images/sprout.png");
  setTimeout(function () {
    $("#button img").attr("src", "./images/plant.png");
    $("#button img").css("width", "25vw");
  }, 750);
  setTimeout(function () {
    $("#button img").fadeOut(1);
    $("main").css("display", "grid");
  }, 1500);
});
// showing image
$("#face-img").attr("src", "./images/face-" + faceID + ".png");
$("#expression-img").attr(
  "src",
  "./images/expression-" + expressionID + ".png"
);
$("#vege-img").attr("src", "./images/vege-" + vegeID + ".png");

// showing additional info
$("#name").html(currentName);
$("#id").html("#N00FA22" + randomR);
face_list = ["Diamond", "Heart", "Club", "Spade"];
vege_list = [
  "Banana",
  "Pineapple",
  "Grape",
  "Onion",
  "Cabbage",
  "Orange",
  "Strawberry",
  "Watermelon",
];
gender_list = ["He", "She"];
var genderID = IdNumber % 2;
vege_list_sing = [
  "bananas",
  "pineapples",
  "grapes",
  "onions",
  "cabbages",
  "oranges",
  "strawberries",
  "watermelons",
];
action_list = [
  ' has smiling eyes and a broad, "w" shape smile. ',
  " has heavy tears flowing from closed eyes. ",
  " half smiles and looks to the side. ",
  " has crossed-out eyes. ",
  " slight smiles, shown winking the left eye. ",
  " smiles with soft, closed eyes. ",
  "'s big eyes staring straight ahead and mouth wide open. ",
  " has slightly opened eyes, closed mouth and rosy cheeks. ",
];
hobby_list = [
  "likes to visit new places, but often get lost along the way.",
  "worries about so many random things that " +
    gender_list[genderID].toLowerCase() +
    " loses sleep every night.",
  "played the super villian in a movie and wants to become a bad guy in reality.",
  "works from 9am to 9pm for six days in a week.",
  "was born with only one eye and was forced to act cute.",
  "decides to escape the rat race and live a low desire lifestyle.",
  "says 'OMG' and 'holly sh*t' all the time.",
  "is so shy that " +
    gender_list[genderID].toLowerCase() +
    " uses text message in face-to-face convos.",
];

$("#race").html(face_list[faceID]);
$("#type").html(vege_list[vegeID]);
$("#back").html(
  capitalizeFirstLetter(currentName) +
    " comes from the Kingdom of " +
    face_list[faceID] +
    "s, with a head full of " +
    vege_list_sing[vegeID] +
    ". " +
    gender_list[genderID] +
    action_list[expressionID] +
    gender_list[genderID] +
    " " +
    hobby_list[expressionID]
);

$("#link").click(function () {
  $("main").fadeOut(1);
  $("#title").css("display", "flex");
  $("section").css("display", "flex");
});

$("#backk").click(function () {
  console.log("d");
  $("#title").fadeOut(1);
  $("section").fadeOut(1);
  $("main").css("display", "grid");
});

console.log(randomR);
console.log(IdNumber);
console.log(name_dict[IdNumber]);

function loop(number) {
  return Math.floor((number % 64) / 8);
}
document.body.onkeydown = function (e) {
  if (e.keyCode == 32) {
    if ($("#button img").css("display") == "block") {
      $("#button h6").css("display", "none");
      $("#button img").attr("src", "./images/sprout.png");
      setTimeout(function () {
        $("#button img").attr("src", "./images/plant.png");
        $("#button img").css("width", "25vw");
      }, 750);
      setTimeout(function () {
        $("#button img").fadeOut(1);
        $("main").css("display", "grid");
      }, 1500);
    }
  }
};
