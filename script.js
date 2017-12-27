window.onload = function() {
	var word1Box = document.getElementById("word1");
	var word2Box = document.getElementById("word2");
	var word3Box = document.getElementById("word3");
	var word4Box = document.getElementById("word4");
	var submitButton = document.getElementById("submit");
	var resultGraf = document.getElementById("result");
	var twitterLink = document.getElementById("twitter");

	var germanWords = [];
	var germanWord = "";
	var hyphenatedEnglish = "";

	submitButton.addEventListener("click", function() {

		resultGraf.innerHTML = "<img src='http://www.kellylougheed.com/images/preloader.gif' alt='Spinner' />";

		var word1 = word1Box.value;
		var word2 = word2Box.value;
		var word3 = word3Box.value;
		var word4 = word4Box.value;

		var englishWords = [word1, word2, word3, word4];
		germanWords = [];
		germanWord = "";
		hyphenatedEnglish = "";

		for (var i = 0; i < englishWords.length; i++) {
			englishWords[i] = englishWords[i].toLowerCase().replace(/[^A-Za-z0-9]/g, "");
		}

		$.ajax({
	        type: 'GET',
	        url: 'https://glosbe.com/gapi/translate?from=eng&dest=deu&format=json&phrase='+englishWords[0],
	        dataType: 'jsonp',
	        async: false,
		}).done(function(data){
		    addGerman(data, englishWords[0]);
		    $.ajax({
		        type: 'GET',
		        url: 'https://glosbe.com/gapi/translate?from=eng&dest=deu&format=json&phrase='+englishWords[1],
		        dataType: 'jsonp',
		        async: false,
			}).done(function(data){
			    addGerman(data, englishWords[1]);
			    $.ajax({
			        type: 'GET',
			        url: 'https://glosbe.com/gapi/translate?from=eng&dest=deu&format=json&phrase='+englishWords[2],
			        dataType: 'jsonp',
			        async: false,
				}).done(function(data){
				    addGerman(data, englishWords[2]);
				    $.ajax({
				        type: 'GET',
				        url: 'https://glosbe.com/gapi/translate?from=eng&dest=deu&format=json&phrase='+englishWords[3],
				        dataType: 'jsonp',
				        async: false,
					}).done(function(data){
					    addGerman(data, englishWords[3]);
					    formatWord();
					    postWord();
					    createHyphenatedEnglish(englishWords);
					    updateTwitterLink();
				});
				});
			});
		});
	});

	function addGerman(json, english) {
		var result = "";
		if (english.length > 0) {
			if (json.tuc.length < 1) {
				console.log("No German equivalent found for " + english + ".");
			} else if (json.tuc[0].phrase) {
				result = json.tuc[0].phrase.text;
				console.log("The German equivalent of " + english + " is " + result + ".");
			}
			if (result.length > 0) {
				germanWords.push(result);
			}
		}
	}

	function formatWord() {
		germanWord = germanWords.join("").toLowerCase();
		germanWord = germanWord.charAt(0).toUpperCase() + germanWord.substr(1);
	}

	function postWord() {
		var newHTML = "<p><span class='word'>";
		newHTML += germanWord;
		newHTML += "</span></p>";
		resultGraf.innerHTML = newHTML;
	}

	function createHyphenatedEnglish(englishWords) {
		for (var i = 0; i < englishWords.length; i++) {
			if (englishWords[i].length > 0) {
				if (hyphenatedEnglish.length > 0) {
					hyphenatedEnglish += "-";
				}
				hyphenatedEnglish += englishWords[i];
			}
		}
	}

	function updateTwitterLink() {
		var newHTML = "<a href='http://twitter.com/home?status=";
		newHTML += "Just coined the German word " + germanWord + " (" + hyphenatedEnglish + ") @ kellylougheed.com/german'";
		newHTML += " target='_blank'><i class='fa fa-twitter' aria-hidden='true'></i></a>";
		twitter.innerHTML = newHTML;
	}

}