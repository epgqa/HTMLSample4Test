<html>
<body>
Test timeout Interactive
<?php
  set_time_limit(0);
  if($_GET['timeout'] != null)
	sleep($_GET['timeout']);
?>
</body>
</html>