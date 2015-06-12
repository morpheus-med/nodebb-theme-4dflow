<!DOCTYPE html>
<html>
  <head>
	<title>4D Flow - Forums</title>
	<!-- BEGIN metaTags -->
	{function.buildMetaTag}
	<!-- END metaTags -->
    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="{relative_path}/stylesheet.css?{css-buster}" />
	<!--[if lt IE 9]>
  		<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/2.3.0/es5-shim.min.js"></script>
  		<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7/html5shiv.js"></script>
  		<script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.js"></script>
  		<script>__lt_ie_9__ = 1;</script>
	<![endif]-->

	<script>
		var RELATIVE_PATH = "{relative_path}";
		var config = JSON.parse('{{configJSON}}');
		var app = {
			template: "{template.name}",
			user: JSON.parse('{{userJSON}}')
		};
	</script>
	<script src="{relative_path}/nodebb.min.js?{script-buster}"></script>
	<!-- IMPORT partials/requirejs-config.tpl -->
	<!-- IF useCustomJS -->
	{{customJS}}
	<!-- ENDIF useCustomJS -->
	<!-- IF useCustomCSS -->
	<style type="text/css">{{customCSS}}</style>
	<!-- ENDIF useCustomCSS -->
    <script>
    </script>
</head>

<body>
  <div class="main-nav">
    <a class="main-title" href="/" title="Home"><strong>4D</strong>flow</a>
    <ul class="main-nav-links nav" id="main-nav-links">
      <li><a href="/about" class='nav'>About</a></li>
      <li><a href="/applications" class='nav'>Applications</a></li>
      <li><a href="/publications" class='nav'>Publications</a></li>
      <li><a href="/start" class='nav'>Start</a></li>
      <li><a href="/faq" class='nav'>FAQ</a></li>
      <li><a id="forum-page" href="/categories" class='nav'>Forum</a></li>
    </ul>
  </div>
  <div class="navbar header" role="navigation" id="header-menu">
    <div class="section separator"></div>
	<div class="container">
	  <!-- IMPORT partials/menu.tpl -->
	</div>
    <div class="separator"></div>
  </div>
  <div class="container" id="content">
	<!-- IMPORT partials/noscript/warning.tpl -->
     
