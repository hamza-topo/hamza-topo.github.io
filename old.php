<?php
	require_once dirname(dirname(dirname(__FILE__))).DIRECTORY_SEPARATOR.'config'.DIRECTORY_SEPARATOR.'include.php';

	if ((!IsSet($_SESSION[SESSION_NAME]))) 
	{
		echo "<script language=\"JavaScript\">\n
            document.location=\"".APP_URL."/pages/login.php\n
			</script>\n";
		exit();
	}
	$ODBCdb = odbc_connect ("$InfoDSN", "$InfoUID", "$InfoPWD");
	$CodeGrp = $_SESSION[SESSION_NAME]->getGroup();
	$login   = $_SESSION[SESSION_NAME]->getLogin();

	$codeaction = isset($_POST['codeaction']) ? $_POST['codeaction'] : "";
	$code       = isset($_POST['code']) ? $_POST['code'] : "";
	$message    = isset($_POST['message']) ? $_POST['message'] : "";

	$strSQL = "";
	if (!$ODBCdb) {
		print "<p>Uh-oh! Echec de connection au DSN [$InfoDSN]: <br />";
		odbc_errormsg();
		exit();
	}

	if ($codeaction == "trigger_asked") 
	{
		$message="Lancement batch...";
		$strSQL = "update t_rf_suivitrt 
                  set indicateur_demande = 'X', 
                      date_demande_proch_trait = sysdate, 
                      code_statut_proch_trait = '10',
                      date_maj = sysdate, 
                      profil_maj = '$login'
                where code_trait = '$code'";
		$resultset = odbc_exec ($ODBCdb, $strSQL);

		$strSQL = "select rep_fichier_top || '\' || nom_fichier_top fichier, nom_fichier_top fichier_top from T_RF_TRAITEMENTS where CODE_TRAIT = '$code'";
		// $strSQL = "select rep_fichier_top || '\' || nom_fichier_top fichier, 'TEST.TOP' fichier_top from T_RF_TRAITEMENTS where CODE_TRAIT = '$code'";
		$resultset = odbc_exec ($ODBCdb, $strSQL);
		odbc_fetch_row($resultset);
		$fichier = odbc_result($resultset, "fichier");
		$fichier_top = odbc_result($resultset, "fichier_top");
		//echo $fichier;die;

		$ftp_server = "SWPINF01";
		//$sRepTemoins = "ftp://SWPINF01/";
		$conn_id = ftp_connect($ftp_server);
		$login_result = ftp_login($conn_id, "apache", "Gr2w0HbRMSV_9kmZND5L");
		if ((!$conn_id) || (!$login_result)) $message = "Echec de la connexion FTP !";
		if (file_exists($fichier)) ftp_delete($conn_id, "$fichier_top"); 
		if (ftp_put($conn_id, "$fichier_top", "TEMOIN.TXT", FTP_BINARY)) 
			$message = "Le fichier $fichier_top a été chargé avec succès";
		else
			$message = "Problème de création du fichier $fichier_top";
		$codeaction = "";
	}

	$strSQL = "select v.code_trait code, 
                    t.libelle_trait lib, 
                    date_balance datbal, 
                    date_demande_trait actual_start, 
                    date_fin_trait actual_end, 
                    s1.libelle_statut_trait actual_lib, 
                    comment_dernier_trait commentaire, 
                    s2.libelle_statut_trait next_lib, 
                    date_demande_proch_trait next_start, 
                    t.usage usage, 
                    indicateur_demande indic
               from t_rf_suivitrt v left join t_rf_statuttrt s1 on v.code_statut_dernier_trait = s1.code_statut_trait
                                    left join t_rf_statuttrt s2 on v.code_statut_proch_trait   = s2.code_statut_trait,  t_rf_traitements t
              where v.code_trait = t.code_trait
           order by lib";

	$total = 0;
	$resultset = odbc_exec ($ODBCdb, $strSQL);
?>
<HTML>
<head>
<meta http-equiv=Content-Type content="text/html; charset=iso-8859-1">
<title>Interco réel destinataire</title>
<SCRIPT language="javascript" src="../../js/Antargaz.js"></SCRIPT>
<SCRIPT language="javascript">
	window.parent.$("message").val("<?php echo $message?>");
	function PickSel(code) {
		if (Confirmer("Confirmer le déclenchement de ce traitement ?")) {
			document.form.code.value = code;
			document.form.codeaction.value = "trigger_asked";
			document.form.submit();
		}
	}

	function ReloadPage() {
		document.form.action=""
		document.form.submit();
	}
</script>
</head>
<TITLE>Déclencheur de flux de fichiers</TITLE>
<body>
<form name="form" target ="_self" method="post">
  <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" height="18">
<?PHP
    $bPair = true;
    while(odbc_fetch_row($resultset)) {
      $bold_on = "";
      $bold_off = "";
      $couleur = "#AA0000";
      if (1 == 0) {
        $bold_on = "<b><i>";
        $bold_off = "</i></b>";
        $couleur = "#00AA00";
      }
      if ($bPair) { $strtab = "1";} else { $strtab = "2";}
      $bgcol = ($bPair) ? "#CCCCCC":"#FFFFFF";
      $bPair = !($bPair); 
      if (odbc_result($resultset, "indic") == "") {
        $couleur = "#00AA00";
        if (( $_SESSION[SESSION_NAME]->IsUserInRole(APP_CODE.'_GenereFluxFinancier') ) && (odbc_result($resultset, "usage") != 'V')) {
          echo("<tr title='Commentaire dernier trait. : ".odbc_result($resultset, "commentaire")."' class='liste' onmouseover=\"setPointer(this, 'over', '".$bgcol."', '#CCFFCC', '#FFCC99');\" onmouseout=\"setPointer(this, 'out', '".$bgcol."', '#CCFFCC', '#FFCC99');\" onClick=\"PickSel('".odbc_result($resultset, "code")."');\" valign='middle' height=21>");
        } else {
          echo("<tr title='Commentaire dernier trait. : ".odbc_result($resultset, "commentaire")."' valign='middle' height=21>");
          $bold_on = "<b><i>";
          $bold_off = "</i></b>";
          $couleur = "#AA0000";
        }
      } else {
        echo("<tr title='Commentaire dernier trait. : ".odbc_result($resultset, "commentaire")."' valign='middle' height=21>");
        $bold_on = "<b><i>";
        $bold_off = "</i></b>";
        $couleur = "#AA0000";
      }
	  $next_start = odbc_result($resultset, "next_start");
?>
    <td bgcolor="<?php echo $bgcol?>" width="30%" align="left"> <font size="1" color="<?php echo $couleur;?>" face="Arial, Helvetica, sans-serif">&nbsp; 
      <?php echo $bold_on.odbc_result($resultset, "lib").$bold_off;?>
      </font></td>
    <td bgcolor="<?php echo $bgcol?>" width="50%" align="left"> <font size="1" color="<?php echo $couleur;?>" face="Arial, Helvetica, sans-serif">&nbsp; 
      <?php echo $bold_on.odbc_result($resultset, "next_lib").$bold_off;?>
      </font></td>
    <td bgcolor="<?php echo $bgcol?>" width="20%" align="center"> <font size="1" color="<?php echo $couleur;?>" face="Arial, Helvetica, sans-serif"> 
      <?php echo $bold_on.(($next_start) ? substr($next_start, 0, 16):"").$bold_off;?>
      </font></td>
<?PHP  }?>
  </table>
  <input type="hidden" name="codeaction">
  <input type="hidden" name="code">
</form>
<script>
  with (document.form) {
    code.value = "<?php echo $code?>";
    codeaction.value = "<?php echo $codeaction?>";
  }
</script>
<?PHP
  odbc_close($ODBCdb);
?>
<SCRIPT>
    setTimeout('ReloadPage()', 30000);
</script>
</body>
</html>

