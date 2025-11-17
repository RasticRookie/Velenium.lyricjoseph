var continueButton = document.getElementById("Continue");
var reStart = document.getElementById("Restart");
reStart.style.display = "none";

var clickCount = 0;
var gameState = "start";

var button1 = document.getElementById("option1");
button1.style.display = "none";

var button2 = document.getElementById("option2");
button2.style.display = "none";

var button3 = document.getElementById("option3");
button3.style.display = "none";

var button4 = document.getElementById("option4");
button4.style.display = "none";

var button5 = document.getElementById("option5");
if (button5) button5.style.display = "none";

var button6 = document.getElementById("option6");
if (button6) button6.style.display = "none";

var button7 = document.getElementById("option7");
if (button7) button7.style.display = "none";

var gameOver = document.createElement("button");
gameOver.innerHTML = "GAME OVER";
gameOver.id = "gameOver";
gameOver.style.display = "none";
document.body.appendChild(gameOver);

function redClick() {
  document.getElementById("imag3").src = "pics/imgred.png";
  document.getElementById("firstxt").innerHTML = "She looks at you, feeling betrayed. Velenium can't beleive how little you know her. She thought you were her friend. But you're just like the rest of them. All of you are the same...";

  button1.style.display = "none";
  button2.style.display = "none";

  gameOver.style.display = "";
}

function blueClick() {
  document.getElementById("imag3").src = "pics/imgblue.png";
  document.getElementById("firstxt").innerHTML = "Velenium loves your thoughtfulness. She feels like she made the right choice. Hopefully you can stay her friend...forever...";

  button1.style.display = "none";
  button2.style.display = "none";

  continueButton.style.display = "";
  gameState = "afterBlue";
}

function headbandClick() {
  document.getElementById("imag3").src = "pics/imgheadband.png";
  document.getElementById("firstxt").innerHTML = "Velenium looks at you with disgust. She's not a fan of pink. She never has been. It's like you aren't even trying. She's not even a fan of you. What a waste...";
  button3.style.display = "none";
  button4.style.display = "none";

  gameOver.style.display = "";
}

function cakeClick() {
  document.getElementById("imag3").src = "pics/imgcake.png";
  document.getElementById("firstxt").innerHTML = "It's...so perfect! She can barely contain herself as she stares at the birthday gift. Everything is perfect. You...are perfect. A kind angel such as yourself will never leave her sight again.";

  button3.style.display = "none";
  button4.style.display = "none";

  continueButton.style.display = "";
  gameState = "afterCake";
}

function kanyeClick() {
  var img3 = document.getElementById("imag3");
  img3.src = "pics/end2.png";
  img3.style.left = "530px";
  document.getElementById("imagee").src = "pics/greenbg.png";
  document.getElementById("firstxt").innerHTML = "You gave her the Kanye West autobiography. She's enraged by your terrible request. Such an inpolite man is the last thing she's want to read about. She bites you, infecting her with her zombie disease!";

  if (button5) button5.style.display = "none";
  if (button6) button6.style.display = "none";
  if (button7) button7.style.display = "none";

  reStart.style.display = "none";
  gameOver.style.display = "";
}

function nanaClick() {
  var img3 = document.getElementById("imag3");
  img3.src = "pics/end4.png";
  img3.style.left = "530px";
  document.getElementById("firstxt").innerHTML = "You gave her the Nana manga. She loves it! She's so happy you got her something she loves. He hear is soaring with joy.";

  if (button5) button5.style.display = "none";
  if (button6) button6.style.display = "none";
  if (button7) button7.style.display = "none";

  gameOver.style.display = "none";
  reStart.style.display = "";
}

function onepieceClick() {
  var img3 = document.getElementById("imag3");
  img3.src = "pics/end1.png";
  img3.style.left = "530px";
  document.getElementById("imagee").src = "pics/greenbg.png";
  document.getElementById("firstxt").innerHTML = "You gave her the One Piece manga. She's upset you don't want to read shoujo! Although shonen is fine too, her heart is broken.";

  if (button5) button5.style.display = "none";
  if (button6) button6.style.display = "none";
  if (button7) button7.style.display = "none";

  reStart.style.display = "none";
  gameOver.style.display = "";
}

function firstPage() {
  document.getElementById("firstxt").innerHTML = "She hates chocolate, yellow, and impoliteness. She loves shoujo manga, fruit, and jokes. Ready to have fun?";
}

function showYogurtChoice() {
  continueButton.style.display = "none";
  reStart.style.display = "none";
  gameOver.style.display = "none";

  document.getElementById("firstxt").innerHTML = "Today, Velenium wanted to get something sweet. She got two cups of frozen yogurt while you waited at the table. It confused you on how she got them, seeing as there was no...cashier...but you decided not to dwell on that fact. She came back with a blue cup that has sprinkles and chocolate yogurt and a red cup that has vanilla yogurt with blueberries.";

  button1.style.display = "";
  button2.style.display = "";
}

function secondPage() {
  document.getElementById("firstxt").innerHTML = "Velenium's birthday is tommorow. She hasen't gotten a present in a long time and is hoping you get her something. Will you get her a headband with daisies on it or a strawberry cake?";
  continueButton.style.display = "none";
  reStart.style.display = "none";
  gameOver.style.display = "none";
  document.getElementById("imag3").src = "pics/img2.png";

  button3.style.display = "";
  button4.style.display = "";
}

function thirdPage() {
  document.body.style.backgroundColor = '#4091ce';
  continueButton.style.display = "none";
  reStart.style.display = "none";
  gameOver.style.display = "none";
  document.getElementById("firstxt").innerHTML = "She loves you so much more now. You decided to bring her to a library away from home. Although reluctant, she loves a good read. Choose a book to read together.";

  button3.style.display = "none";
  button4.style.display = "none";

  if (button5) button5.style.display = "";
  if (button6) button6.style.display = "";
  if (button7) button7.style.display = "";
}

function gameOverr() {
  document.getElementById("firstxt").innerHTML = "Velenium is a zombie. She wants to feel normal again and needs your help.";
  continueButton.style.display = "";
  var img3 = document.getElementById("imag3");
  img3.src = "pics/img1.png";
  img3.style.left = "530px";
  var imagee = document.getElementById("imagee");
  if (imagee) imagee.src = "pics/bg1-1.png";
  clickCount = 0;
  gameState = "start";
  document.body.style.backgroundColor = '#ffd3f5';
  gameOver.style.display = "none";
  button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  button4.style.display = "none";
  if (button5) button5.style.display = "none";
  if (button6) button6.style.display = "none";
  if (button7) button7.style.display = "none";
}

function reStartt() {
  document.getElementById("firstxt").innerHTML = "Velenium is a zombie. She wants to feel normal again and needs your help.";
  continueButton.style.display = "";
  var img3 = document.getElementById("imag3");
  img3.src = "pics/img1.png";
  img3.style.left = "530px";
  var imagee = document.getElementById("imagee");
  if (imagee) imagee.src = "pics/bg1-1.png";
  clickCount = 0;
  gameState = "start";
  document.body.style.backgroundColor = '#ffd3f5';
  reStart.style.display = "none";
  button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  button4.style.display = "none";
  if (button5) button5.style.display = "none";
  if (button6) button6.style.display = "none";
  if (button7) button7.style.display = "none";
}

function handleContinue() {
  if (gameState == "start") {
    clickCount++;
    if (clickCount == 1) {
      firstPage();
    } else if (clickCount == 2) {
      showYogurtChoice();
    }
  } else if (gameState == "afterBlue") {
    secondPage();
    gameState = "secondPage";
  } else if (gameState == "afterCake") {
    thirdPage();
    gameState = "end";
  }
}

continueButton.onclick = handleContinue;
button1.onclick = redClick;
button2.onclick = blueClick;
button3.onclick = headbandClick;
button4.onclick = cakeClick;
if (button5) button5.onclick = kanyeClick;
if (button6) button6.onclick = nanaClick;
if (button7) button7.onclick = onepieceClick;
gameOver.onclick = gameOverr;
reStart.onclick = reStartt;