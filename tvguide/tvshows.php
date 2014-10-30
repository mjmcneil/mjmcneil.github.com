<html>
<head>
<title>PHP Test</title>
</head>
<body>
<?php /* include the library */
require 'phptvdb-1.0.4/TVDB.php';

$name = $_GET["name"];
$seasons = $_GET["season"];
$episodes = $_GET["episodes"];



/* get the office! */
$shows = TV_Shows::search('The Office UK');

/* get the first show */
$show = $shows[0];

/* a few shortcuts / formatted vars */
$firstAired = date('l, F j, Y',$show->firstAired);
$title = $show->seriesName;
$network = $show->network;
$length = $shows->runtime;
$genre = $shows->genres;
$description = $shows->overview;
$seasons = $shows->;
$episodetitles = $shows->;
$episodedate = $shows->;
$episodedescription = $shows->;

getEpisode($season,$episode)

/* spit out the show information */
echo "
		
		<h2>$title</h2>
		<div class=\"meta\">
		<strong>Genre:</strong> $genre •
		<strong>Debuted:</strong> $firstAired on $network •
		<strong>Runtime:</strong> $length
		</div>
		<p>$description</p>";
		
/* my favorite episode info  */
$numberofseasons = count ($seasons);
for (int $i=0;$i<$numberofseasons;$i++) {
	for (int $k=0; $k < $episodes[$i];$k++){
		$episode = $show->getEpisode($i,$k);
		echo "<div class=\"righty\">
			<h3>Favorite Episode:  $episode->name</h3>
			<p>$episode->overview</p>
		</div>";
	}
}
?>
</body>
</html>