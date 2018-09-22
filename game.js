var xp = 0;
var incrementAmount = 0.01;
var power = 0.1;
var money = 0;
var swordBonus = 0;
var cultivationTechnique = 0;
var legacyPoints = 0;
var totalXp = 0;
var lastLegacyPoints = 0;
var newLegacyPoints = 0;


function increaseXp(currentXp, incrementAmount) {

	currentXp = currentXp + incrementAmount;


	xp = xp + incrementAmount;
	
	totalXp = totalXp + incrementAmount;

	document.getElementById("progress").setAttribute("value", xp);

	document.getElementById("xp").innerHTML = "Xp: " + currentXp.toFixed(3);

	if (isAtMax(currentXp, document.getElementById("progress").getAttribute("max")) == true) {

		document.getElementById("rankupButton").setAttribute("style","display: block;");

	}

}

function rankup(){

	if (isAtMax(xp, document.getElementById("progress").getAttribute("max")) == true) {

		document.getElementById("rankupButton").setAttribute("style", "display: none;");

		document.getElementById("progress").setAttribute("value", (document.getElementById("progress").getAttribute("value") - document.getElementById("progress").getAttribute("max")));

		xp = xp - document.getElementById("progress").getAttribute("max");

		document.getElementById("xp").innerHTML = "Xp: " + xp.toFixed(3);

		rankPowerChange();

		if (document.getElementById("currentRealm").innerHTML == "Late Xiantian"){

			legacyUnlock();

		}

		increaseMax(document.getElementById("progress").getAttribute("max"));

		imageChange();

	}
}

function legacyUnlock(){

	document.getElementById("legacyRequirement").setAttribute("style", "display: none;");
	document.getElementById("legacyPoints").setAttribute("style", "display: inline; text-align: center;");
	document.getElementById("newLegacyPoints").setAttribute("style", "display: inline; text-align: center;");

	window.setInterval(legacyPointCalculation(), 10000);

}

function legacyPointCalculation(){

	if (totalXp < 1000){

		newLegacyPoints = totalXp / 10;

	} else {

		newLegacyPoints = totalXp / (1 + (newLegacyPoints / 10));

	}

	if (newLegacyPoints < lastLegacyPoints){

		newLegacyPoints = lastLegacyPoints;

	} else {

		lastLegacyPoints = newLegacyPoints;

	}

	document.getElementById("newLegacyPoints").innerHTML = "Legacy Points: " + newLegacyPoints;

}

function imageChange(){

	if (document.getElementById("currentRealm").innerHTML == "Early Xiantian"){

		document.getElementById("meditiate").src = "Assets/monk/(2)monk2.jpg";

	} else if (document.getElementById("currentRealm").innerHTML == "Early Jindan"){

		document.getElementById("meditate").src = "Assets/monk/(3)monkfloat4.gif";

	} else if (document.getElementById("currentRealm").innerHTML == "Early Dongxu"){

		document.getElementById("meditate").src = "Assets/monk/(4)monkglow.gif";

	}

}

function Fight(fightId){

	var powerName = fightId + "Power";
	var rewardName = fightId + "Reward";
	var defeatName = fightId + "Defeat"

	var fightPower = document.getElementById(powerName).innerHTML;
	var fightReward = parseInt(document.getElementById(rewardName).innerHTML);
	var fightDefeat = document.getElementById(defeatName).innerHTML;

	if (power > fightPower){

		fightDefeat = "";
		document.getElementById(defeatName).innerHTML = fightDefeat;

		money = money + fightReward;

		document.getElementById("money").innerHTML = "Money: " + money;

	} else if (power >= (fightPower * 0.85)) {

		if (Math.floor(Math.random() * 11) > 6) {

			fightDefeat = "";
			document.getElementById(defeatName).innerHTML = fightDefeat;

			money = money + fightReward;

			document.getElementById("money").innerHTML = "Money: " + money;

		} else {

			console.log("defeat");

			fightDefeat = "(Defeat)";
			document.getElementById(defeatName).innerHTML = fightDefeat;

		}

	} else {

		console.log("defeat");

		fightDefeat = "(Defeat)";
		document.getElementById(defeatName).innerHTML = fightDefeat;

	}

}

function Train(trainId){

	var trainCostName = trainId + "Cost";
	var trainRewardName = trainId + "Reward";

	var trainCost = parseInt(document.getElementById(trainCostName).innerHTML);
	var trainReward = parseFloat(document.getElementById(trainRewardName).innerHTML);

	if (money >= trainCost) {

		money = money - trainCost;

		document.getElementById("money").innerHTML = "Money: " + money;

		incrementAmount = incrementAmount + trainReward;

		document.getElementById(trainCostName).innerHTML = trainCost * 2;

	}

}

function firstSwordPurchase(){

	if (parseInt(money) > parseInt(document.getElementById("firstPurchaseCost").innerHTML)){

		document.getElementById("firstPurchaseRow").setAttribute("style", "display:none;");

		money = money - parseInt(document.getElementById("firstPurchaseCost").innerHTML);

		document.getElementById("money").innerHTML = "Money: " + money;

		power = power + 0.15;

		document.getElementById("currentPower").innerHTML = "Power: " + power.toFixed(3);

		swordBonus = swordBonus + 0.15;

	}
}

function firstManualPurchase(){

	if (money > parseInt(document.getElementById("secondPurchaseCost").innerHTML)){

		document.getElementById("secondPurchaseRow").setAttribute("style", "display: none;");

		money = money - parseInt(document.getElementById("secondPurchaseCost").innerHTML);

		document.getElementById("money").innerHTML = "Money: " + money;

		power = power + 0.15;

		document.getElementById("currentPower").innerHTML = "Power: " + power.toFixed(3);

	}

}

function firstCultivationPurchase(){

	if (money > parseInt(document.getElementById("thirdPurchaseCost").innerHTML)){

		document.getElementById("thirdPurchaseRow").setAttribute("style", "display: none;");

		money = money - parseInt(document.getElementById("thirdPurchaseCost").innerHTML);

		cultivationTechnique = cultivationTechnique + 0.1;

	}

}

function secondSwordPurchase(){

	if (money > parseInt(document.getElementById("fourthPurchaseCost").innerHTML)){

		document.getElementById("fourthPurchaseRow").setAttribute("style", "display:none;");

		money = money - parseInt(document.getElementById("fourthPurchaseCost").innerHTML);

		document.getElementById("money").innerHTML = "Money: " + money;

		power = power + 0.15;

		document.getElementById("currentPower").innerHTML = "Power: " + power.toFixed(3);

		swordBonus = swordBonus + 0.15;

	}
}

function secondManualPurchase(){

	if (money > parseInt(document.getElementById("fifthPurchaseCost").innerHTML)){

		document.getElementById("fifthPurchaseRow").setAttribute("style", "display: none;");

		money = money - parseInt(document.getElementById("fifthPurchaseCost").innerHTML);

		document.getElementById("money").innerHTML = "Money: " + money;

		power = power + 0.15;

		document.getElementById("currentPower").innerHTML = "Power: " + power.toFixed(3);

	}

}

function secondCultivationPurchase(){

	if (money > parseInt(document.getElementById("sixthPurchaseCost").innerHTML)){

		document.getElementById("sixthPurchaseRow").setAttribute("style", "display: none;");

		money = money - parseInt(document.getElementById("sixthPurchaseCost").innerHTML);

		cultivationTechnique = cultivationTechnique + 0.2;

	}

}

function rankPowerChange(){

	//changing rank
	var firstHalf = "";
	var secondHalf = "";

	if (document.getElementById("progress").getAttribute("max").split("", 1) == 1) {

		firstHalf = "Early ";

		power = power + 0.5 + cultivationTechnique;

		document.getElementById("currentPower").innerHTML = "Power: " + power.toFixed(3);


	} else if (document.getElementById("progress").getAttribute("max").split("", 1) == 3) {

		firstHalf = "Middle ";

		power = power + 0.3 + cultivationTechnique;

		document.getElementById("currentPower").innerHTML = "Power: " + power.toFixed(3);

	} else if (document.getElementById("progress").getAttribute("max").split("", 1) == 5) {

		firstHalf = "Late ";

		power = power + 0.3 + cultivationTechnique;

		document.getElementById("currentPower").innerHTML = "Power: " + power.toFixed(3);

	}

	if (document.getElementById("progress").getAttribute("max") < 10) {

		secondHalf = "Houtian";

	} else if (document.getElementById("progress").getAttribute("max") < 100){

		secondHalf = "Xiantian";

	} else if (document.getElementById("progress").getAttribute("max") < 1000){

		secondHalf = "Jindan";

	} else if (document.getElementById("progress").getAttribute("max") < 10000){

		secondHalf = "Yuanying";

	} else if (document.getElementById("progress").getAttribute("max") < 100000){

		secondHalf = "Dongxu";

	} else if (document.getElementById("progress").getAttribute("max") < 1000000){

		secondHalf = "Kongming";

	} else if (document.getElementById("progress").getAttribute("max") < 10000000){

		secondHalf = "Dujie";

	} else if (document.getElementById("progress").getAttribute("max") < 100000000){

		secondHalf = "Dacheng";

		firstHalf = "";

	}

	document.getElementById("currentRealm").innerHTML = firstHalf + secondHalf;

}

function increaseMax(currentMax){

	if (currentMax.split("", 1) == 1) {

		document.getElementById("progress").setAttribute("max", (currentMax * 3));

	} else if (currentMax.split("", 1) == 3) {

		document.getElementById("progress").setAttribute("max", (currentMax * 1.6666666666666666666666666666666666));

	} else if (currentMax.split("", 1) == 5) {

		document.getElementById("progress").setAttribute("max", (currentMax * 2));

	}

}

function isAtMax(currentXp, currentMax){

	if (currentXp >= currentMax){

		return true

	} else {

		return false

	}

}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("user");
    if (user != "") {

        loadLocalSave();

        window.setInterval(localSave(), 60000);

    } else {

    	window.setInterval(localSave(), 60000);

    }
}

function loadLocalSave(){

	xp = parseFloat(getCookie("xp"));
	console.log(xp);
	incrementAmount = parseFloat(getCookie("incrementAmount"));
	power = parseFloat(getCookie("power"));
	money = parseInt(getCookie("money"));
	swordBonus = parseFloat(getCookie("swordBonus"));
	cultivationTechnique = parseFloat(getCookie("cultivationTechnique"));
	document.getElementById("progress").setAttribute("max", parseInt(getCookie("max")));
	document.getElementById("firstTrainCost").innerHTML = parseInt(getCookie("firstTrainCost"));
	document.getElementById("secondTrainCost").innerHTML = parseInt(getCookie("secondTrainCost"));
	document.getElementById("thirdTrainCost").innerHTML = parseInt(getCookie("thirdTrainCost"));
	document.getElementById("fourthTrainCost").innerHTML = parseInt(getCookie("fourthTrainCost"));
	document.getElementById("fifthTrainCost").innerHTML = parseInt(getCookie("fifthTrainCost"));
	document.getElementById("firstPurchaseRow").setAttribute("style", getCookie("firstPurchaseRow"));
	document.getElementById("secondPurchaseRow").setAttribute("style", getCookie("secondPurchaseRow"));
	document.getElementById("thirdPurchaseRow").setAttribute("style", getCookie("thirdPurchaseRow"));
	document.getElementById("fourthPurchaseRow").setAttribute("style", getCookie("fourthPurchaseRow"));
	document.getElementById("fifthPurchaseRow").setAttribute("style", getCookie("fifthPurchaseRow"));
	document.getElementById("sixthPurchaseRow").setAttribute("style", getCookie("sixthPurchaseRow"));
	document.getElementById("currentRealm").innerHTML = getCookie("currentRealm");

	updateValues();
}

function updateValues(){

	document.getElementById("xp").innerHTML = "Xp: " + xp.toFixed(3);
	document.getElementById("currentPower").innerHTML = "Power: " + power.toFixed(3);
	document.getElementById("money").innerHTML = "Money: " + money;
	document.getElementById("progress").setAttribute("value", xp);

}

function deleteLocalSave(){

	setCookie("user", "Player", -1);
	setCookie("xp", xp, -1);
	setCookie("incrementAmount", incrementAmount, -1);
	setCookie("power", power, -1);
	setCookie("money", money, -1);
	setCookie("swordBonus", swordBonus, -1);
	setCookie("cultivationTechnique", cultivationTechnique, -1);
	setCookie("max", document.getElementById("progress").getAttribute("max"), -1);
	setCookie("firstTrainCost", parseInt(document.getElementById("firstTrainCost").innerHTML), -1);
	setCookie("secondTrainCost", parseInt(document.getElementById("secondTrainCost").innerHTML), -1);
	setCookie("thirdTrainCost", parseInt(document.getElementById("thirdTrainCost").innerHTML), -1);
	setCookie("fourthTrainCost", parseInt(document.getElementById("fourthTrainCost").innerHTML), -1);
	setCookie("fifthTrainCost", parseInt(document.getElementById("fifthTrainCost").innerHTML), -1);
	setCookie("firstPurchaseRow", document.getElementById("firstPurchaseRow").getAttribute("style"), -1);
	setCookie("secondPurchaseRow", document.getElementById("secondPurchaseRow").getAttribute("style"), -1);
	setCookie("thirdPurchaseRow", document.getElementById("thirdPurchaseRow").getAttribute("style"), -1);
	setCookie("fourthPurchaseRow", document.getElementById("fourthPurchaseRow").getAttribute("style"), -1);
	setCookie("fifthPurchaseRow", document.getElementById("fifthPurchaseRow").getAttribute("style"), -1);
	setCookie("sixthPurchaseRow", document.getElementById("sixthPurchaseRow").getAttribute("style"), -1);
	setCookie("currentRealm", document.getElementById("currentRealm").innerHTML, -1);

}

function localSave(){
    
    setCookie("user", "Player", 1000);
	setCookie("xp", xp, 1000);

	setCookie("incrementAmount", incrementAmount, 1000);
	setCookie("power", power, 1000);
	setCookie("money", money, 1000);
	setCookie("swordBonus", swordBonus, 1000);
	setCookie("cultivationTechnique", cultivationTechnique, 1000);
	setCookie("max", document.getElementById("progress").getAttribute("max"), 1000);
	setCookie("firstTrainCost", parseInt(document.getElementById("firstTrainCost").innerHTML), 1000);
	setCookie("secondTrainCost", parseInt(document.getElementById("secondTrainCost").innerHTML), 1000);
	setCookie("thirdTrainCost", parseInt(document.getElementById("thirdTrainCost").innerHTML), 1000);
	setCookie("fourthTrainCost", parseInt(document.getElementById("fourthTrainCost").innerHTML), 1000);
	setCookie("fifthTrainCost", parseInt(document.getElementById("fifthTrainCost").innerHTML), 1000);
	setCookie("firstPurchaseRow", document.getElementById("firstPurchaseRow").getAttribute("style"), 1000);
	setCookie("secondPurchaseRow", document.getElementById("secondPurchaseRow").getAttribute("style"), 1000);
	setCookie("thirdPurchaseRow", document.getElementById("thirdPurchaseRow").getAttribute("style"), 1000);
	setCookie("fourthPurchaseRow", document.getElementById("fourthPurchaseRow").getAttribute("style"), 1000);
	setCookie("fifthPurchaseRow", document.getElementById("fifthPurchaseRow").getAttribute("style"), 1000);
	setCookie("sixthPurchaseRow", document.getElementById("sixthPurchaseRow").getAttribute("style"), 1000);
	setCookie("currentRealm", document.getElementById("currentRealm").innerHTML, 1000);

	console.log("Saved!");

}
setInterval( function() {
    setCookie("user", "Player", 1000);
	setCookie("xp", xp, 1000);

	setCookie("incrementAmount", incrementAmount, 1000);
	setCookie("power", power, 1000);
	setCookie("money", money, 1000);
	setCookie("swordBonus", swordBonus, 1000);
	setCookie("cultivationTechnique", cultivationTechnique, 1000);
	setCookie("max", document.getElementById("progress").getAttribute("max"), 1000);
	setCookie("firstTrainCost", parseInt(document.getElementById("firstTrainCost").innerHTML), 1000);
	setCookie("secondTrainCost", parseInt(document.getElementById("secondTrainCost").innerHTML), 1000);
	setCookie("thirdTrainCost", parseInt(document.getElementById("thirdTrainCost").innerHTML), 1000);
	setCookie("fourthTrainCost", parseInt(document.getElementById("fourthTrainCost").innerHTML), 1000);
	setCookie("fifthTrainCost", parseInt(document.getElementById("fifthTrainCost").innerHTML), 1000);
	setCookie("firstPurchaseRow", document.getElementById("firstPurchaseRow").getAttribute("style"), 1000);
	setCookie("secondPurchaseRow", document.getElementById("secondPurchaseRow").getAttribute("style"), 1000);
	setCookie("thirdPurchaseRow", document.getElementById("thirdPurchaseRow").getAttribute("style"), 1000);
	setCookie("fourthPurchaseRow", document.getElementById("fourthPurchaseRow").getAttribute("style"), 1000);
	setCookie("fifthPurchaseRow", document.getElementById("fifthPurchaseRow").getAttribute("style"), 1000);
	setCookie("sixthPurchaseRow", document.getElementById("sixthPurchaseRow").getAttribute("style"), 1000);
	setCookie("currentRealm", document.getElementById("currentRealm").innerHTML, 1000);

	console.log("Saved!");
}, 60000)