<? require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");?>
<?PHP header("Content-Type: text/html; charset=utf-8");?>

	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.11/css/jquery.dataTables.css">
	
</head>
<body>

<style>
	.header,
	.left-part,
	.slider,
	.bx-panel{
		display: none!important;
	}
</style>
<?
$a = 'Test';
$db = new SQLite3('webinar.db');
/*if($db) {
	$db->exec("INSERT INTO
        Information(name)
        VALUES
        ('$a')");
}
*/
$result = $db->query('SELECT * FROM Information');
?>

<div class="container ">
	<div class="row">
		<div class="col-md-12">
			<table class="table table-bordered" id="table_id">
				<thead>
			        <tr>
			            <th>Number</th>
			            <th>Name</th>
			            <th>Email</th>
			            <th>Phone</th>
			            <th>Text</th>
			        </tr>
			    </thead>
			    <tbody>
					<?while ($row = $result->fetchArray()) { ?>
					    <tr>
					          <td><? echo $row['id'] ;?></td>
					          <td><? echo $row['Name'] ;?></td>
					          <td><? echo $row['Email'] ;?></td>
					          <td><? echo $row['Telefon'] ;?></td>
					          <td><? echo $row['Question'] ;?></td>
					     </tr>
					<? } ?>
			   </tbody>
			</table>
		</div>
	</div>
</div>


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script type="text/javascript" charset="utf8" src="//cdn.datatables.net/1.10.11/js/jquery.dataTables.js"></script>
<script >
	$(document).ready(function(){
		$('#table_id').DataTable();
	})
</script>

