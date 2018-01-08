<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
  <!-- Open Graph tags -->
  <meta property="og:title" content="German Word Maker" />
  <meta property="og:description" content="Enter a series of English words to generate a German compound word" />
  <meta property="og:url" content="http://www.kellylougheed.com/german" />
  <meta property="og:image" content="http://www.kellylougheed.com/images/projects/german.png" />
  <title>German Word Maker</title>
  <!-- CSS -->
  <link href="style.css" rel="stylesheet" type="text/css">
  <!-- Icons -->
  <script src="https://use.fontawesome.com/ee14bb1f23.js"></script>
  <!-- Favicon -->
  <link rel="icon" href="favicon.ico" sizes="16x16 32x32" type="image/png">
  <!-- Fonts -->
  <link href='https://fonts.googleapis.com/css?family=Oswald:300' rel='stylesheet' type='text/css'>
</head>
<body>
	<h1>German Word Maker</h1>
	<h2>What do you need a word for?</h2>
	<h3>(Enter a series of English words, e.g. "together" "place" "feeling")</h3>

	<input type="text" id="word1" />
	<input type="text" id="word2" />
	<input type="text" id="word3" />
	<input type="text" id="word4" />

	<button id="submit">Make my German word!</button>

	<p id="result"></p>

	<p id="twitter">
		<a href="http://twitter.com/home?status=Make your own German words at kellylougheed.com/german" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
	</p>

	<div class="footer">
      © <a class="contact" href="http://www.kellylougheed.com" target="_blank">Kelly Lougheed</a> <?php echo date("Y"); ?>. All rights reserved.
  </div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	<script src="script.js"></script>

</body>
</html>