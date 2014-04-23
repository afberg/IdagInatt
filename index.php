
<!--[if IE]>    <html class="ie"> <![endif]-->
<html class="">
	<head>
		<!--Favicons-->
		<link rel="apple-touch-icon" sizes="57x57" href="favicons/apple-touch-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="114x114" href="favicons/apple-touch-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="72x72" href="favicons/apple-touch-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="144x144" href="favicons/apple-touch-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="60x60" href="favicons/apple-touch-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="120x120" href="favicons/apple-touch-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="76x76" href="favicons/apple-touch-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="152x152" href="favicons/apple-touch-icon-152x152.png">
		<link rel="icon" type="image/png" href="favicons/favicon-196x196.png" sizes="196x196">
		<link rel="icon" type="image/png" href="favicons/favicon-160x160.png" sizes="160x160">
		<link rel="icon" type="image/png" href="favicons/favicon-96x96.png" sizes="96x96">
		<link rel="icon" type="image/png" href="favicons/favicon-16x16.png" sizes="16x16">
		<link rel="icon" type="image/png" href="favicons/favicon-32x32.png" sizes="32x32">
		<meta name="msapplication-TileColor" content="#e08e79">
		<meta name="msapplication-TileImage" content="favicons/mstile-144x144.png">
		<meta id="viewport"> 

		<!--Favicons end-->
		<!-- Andreas stuff -->
		@if($errors->has())
			<script type="text/javascript">
				var errors = '{{ implode($errors->all()) }}';
				alert(errors);
			</script>
			<!-- @foreach ($errors->all() as $error) -->
				<!-- <div class="validation_error">{{ $error }}</div> -->
			<!-- @endforeach -->
		@endif

		@if(Session::has('message'))
			<script type="text/javascript">
				var message = '{{ Session::get(message") }}';	
			</script>
		@endif

		@if(Session::has('error'))
			<script type="text/javascript">
				var error = '{{ Session::get("error") }}';
			</script>
			
		@endif


		<script type="text/javascript" src="script.js"></script>
		<title>Idag & Inatt</title>
		{{ HTML::style('style/style.css') }}
		{{ HTML::script('script/script.js')}}
		<link rel="stylesheet" href="style.css"media="screen" type="text/css" />
		<link href='http://fonts.googleapis.com/css?family=Sorts+Mill+Goudy' rel='stylesheet' type='text/css'>
		<meta name="keywords" content="portfolio">
		<meta name="author" content="Anton Forsberg">
		<meta charset="utf-8">
	</head>
	<body onload="hide()">
		<div id="intro" >
			<div id="introText">
			<img id="logo" src="img/Logo3.png"/>
		</div>
		</div>
		<div id="wrapper">

			
				<div id="no1" class="divider initialSize">
					<div id="back1" class="container">
					</div>
					<div id="content1" class="container">
						<div id="topMargin1" class="topMargin">	
						</div>
						<a href="#no1" onclick="displayNo1()">
							<div id="no1Header" class="header">
								<img src="img/Krona2.png" class="crown" id="crown1"/>	
								<h1 >Idag & Inatt</h1>
							</div>	
						</a>
						<div id="no1Content" class="content">
							<p>IDag är en arbetsmarknadsdag bara för oss ID:are, med inbjudna företag som är relevanta för oss. De berättar om vad de gör, vilka möjligheter som finns och gör det lättare för oss att se vår roll i det kommande arbetslivet. En alumn, det vill säga en före detta ID-student, kommer också och ger tips och berättar egna erfarenheter. Detta brukar vara inspirerande för såväl nya studenter som de lite äldre. Det serveras också lunch och bjuds på fika under dagen som avslutas med en bankett i kungligt tema. </p>
							<p>VUnder dagen utses också årets ID:are<br><br><br></p>
							<h3>En dag för alla ID:are</h3>
						</div>
					</div>
				</div>
			
			
				<div id="no2" class="divider initialSize">
					<div id="back2" class="container">
					</div>
					<div id="content2" class="container">
						<div id="topMargin2" class="topMargin">
						</div>
						<a href="#no2" onclick="displayNo2()">
							<div id="no2Header"  class="header">
								<img src="img/Krona3.png" class="crown" id="crown2"/>
								<h1>Företag</h1>
							</div>
						</a>
						<div id="no2Content" class="content">
							<p>Under dagen kommer ett antal företag att deltaga och bland annat föreläsa för oss.Här finns mer info samt länkar till de olika företagen. Tactel och R/GA finns också tillgängliga för kontaktsamtal under dagen.</p>
							<div id="company1" class="company">
								<a href="http://www.tactel.se/" ><img class ="companyLogo" src="img/tactel.png"/></a>
								<p>
									Tactel has been providing expert software consulting to the embedded, mobile, and consumer electronics industries since 1995. In that time we have helped our clients to create and ship innovative products throughout the world.
								</p>
								<div id="border"></div>
							</div>
							<div id="company2" class="company">
								<a href="http://www.rga.com/" ><img  class ="companyLogo" src="img/rga.png"/></a>
								<p>
									R/GA is a full-service digital advertising agency that delivers innovative communications, consulting, and commerce solutions for the world's leading brands.
								</p>
							<div id="border"></div>
							</div>
							
							<div id="company3" class="company">
								<div id="c9container" ><a href="http://www.cloudnine.se/" ><div  class ="companyLogo" id="cloudNine"/></div></a></div>
								<p>
									Cloud Nine är en digital fullservicebyrå som med innovation, kunskap och passion ständigt förbättrat den digitala världen för våra kunder. Bättre tillgänglighet, ökad konvertering, smidigare kommunikation och effektivisering sedan 1999.
								</p>
							<div id="border"></div>
							</div>
							
						</div>
						
					</div>
				</div>
			


			
			
				<div id="no3" class="divider initialSize" >
					<div id="back3" class="container">
					</div>
					<div id="content3" class="container">
						<div id="topMargin3" class="topMargin">
						</div>
							<a href="#no3" onclick="displayNo3()">	
								<div id="no3Header"  class="header">
									<img src="img/Krona2.png" class="crown" id="crown3"/>
									<h1>Schema</h1>
								</div>
							</a>
						
						<div id="no3Content" class="content">
							<h3>Idag</h3>
							<table>
								<tr>
									<td>08:30-09:00</td>
									<td>Fikamingel</td>
								</tr>
								<tr>
									<td>09:00-10:00</td>
									<td>Föreläsning: Cloud Nine</td>
								</tr>
								<tr>
									<td>10:00-10:15</td>
									<td>Fika</td>
								</tr>
								<tr>
									<td>10:15-11:15</td>
									<td>Föreläsning: Tactel</td>
								</tr>
								<tr>
									<td>11:15-12:15</td>
									<td>Lunch</td>
								</tr>
								<tr>
									<td>12:15-12:30</td>
									<td>Årets ID:are</td>
								</tr>
								<tr>
									<td>12:30-13:30</td>
									<td>Föreläsning: R/GA</td>
								</tr>
								<tr>
									<td>13:30-13:45</td>
									<td>Fika</td>
								</tr>
								<tr>
									<td>13:45-14:30</td>
									<td>Föreläsning: Gammal ID:are</td>
								</tr>
							</table>
							<h3>Inatt</h3>
							<table>
								<tr>
									<td>18:00-02:00</td>
									<td>Bankett </td>
								</tr>
							</table>


					</div>
				</div>
			</div>
		
			<div id="no4" class="divider initialSize">
				<div id="back4" class="container">
				</div>
				<div id="content4" class="container">
					<div id="topMargin4" class="topMargin">
					</div>
					<a href="#no4" onclick="displayNo4()">
						<div id="no4Header"  class="header">
							<img src="img/Krona3.png" class="crown" id="crown4"/>
							<h1>Anmälan</h1>
						</div>
					</a>
				
				<div id="no4Content" class="content">
					<div id="startpage" class="focus">
						<p>Här kan Du anmäla dig till årets arbetsmarknadsdag för Interaktion och Design samt nominera till årets IDare.</br></br></p>
						<h3>Registrering</h3>

						<p>Nytt för i år är att företagen Tactel och R/GA erbjuder kontaktsamtal under dagen. Där får Du en möjlighet att presentera dig för företaget, och  Är Du intresserad av detta, vänligen ladda upp ditt CV vid registrering. </p>

						</br>
						<div id="toReg" onclick="openReg()" class="button">
							<h2>Registrera</h2>
						</div>
						<h4>Det går EJ att anmäla kontaktsamtal utan bifogat CV. </h4>
						
						<div id="border"></div>
						</br>
						<h3>Nominering</h3>
						<p>Vilken IDare står ut i mängden? Vem anser du är ett föredömme på programmet? Här kan Du nominera någon i ID10 till Årets IDare.</p>
						
						<!--@if(time() < strtotime(Config::get('app.registration_deadline')))-->
						</br>
						<div id="toNom" onclick="openNom()" class="button">
							<h2>Nominera</h2>
						</div>
						<h4>Din nominering behandlas anonymt! </h4>

						<div id="border"></div>
						<!--@endif-->
					</div>
					
					<!-- REGISTRERING -->

					<div id="registration">
						
						@if( time() < strtotime(Config::get('app.cv_deadline')))
							{{ Form::open(array('url' => 'register', 'files' => true)) }}
						@else
							{{ Form::open(array('url' => 'register')) }}
						@endif
						
						<h2>
						<div id="name">
							{{ Form::text('firstname', null, array('placeholder' => 'Förnamn')) }}
						</div>
						<div id="surname">
							{{ Form::text('lastname', null, array('placeholder' => 'Efternamn')) }}
						</div>
						<div id="email" >
							{{ Form::text('email', null, array('placeholder' => 'Email')) }}
						</div>
						<div id="class">
							{{ Form::select('class', Config::get('app.registration_classes_dropdown'), 'Välj klass')}}
						</div>
						<div id="specialkost" >
							{{ Form::text('special', null, array('placeholder' => 'Ev specialkost.'))}}
						</div>
						<div id="file">
						@if( time() < strtotime(Config::get('app.cv_deadline')) ) 
							{{ Form::file('file', null) }}
							{{ Form::checkbox('company[]', 'Tactel') }}
								{{Form::label('Tactel', 'Tactel')}}
							{{ Form::checkbox('company[]', 'R\GA') }} 
								{{Form::label('R\GAs', 'R\GA')}}

						@endif
						</div>
						<div id="submit">
						{{ Form::submit('Registrera') }}
		
						{{ Form::close() }}
						</div>
					</h2>

						<div onclick="back()" class="button">
							<h2>Tillbaka</h2>
						</div>

					</div>

					<div id="nomination">
						@if($errors->has())
							@foreach ($errors->all() as $error)
								<div class="validation_error">{{ $error }}</div>
							@endforeach
						@endif
						{{ Form::open(array('url' => 'nominate')) }}
							{{ Form::token() }}
							{{ Form::text('email', null, array('placeholder' => 'Email')) }}
							{{ Form::select('nominated', Config::get('app.nomination_options')) }}
							{{ Form::text('motivation', null, array('placeholder' => 'Motivering. Minst 20 tecken'))}}
							{{ Form::submit('Nominera') }}
						{{ Form::close() }}
						<div onclick="back()" class="button">
							<h2>Tillbaka</h2>
						</div>
					</div>
						
				</div>
			</div>
		</div>

	</div>


	</body>
</html>