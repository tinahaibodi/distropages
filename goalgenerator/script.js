var calculations = 0;

var CPVcalc = function() {

	var breakout_app;
	var breakout_scs;
	var breakout_thumb;
	var breakout_swsu;
	var breakout_atsu;

	var avgctr_app;
	var avgctr_thumb;
	var avgctr_swsu;
	var avgctr_atsu;

	var avail_app;
	var avail_thumb;
	var avail_swsu;
	var avail_atsu;

	var impsneeded_atsu_calculated;

	var viewgoal = document.getElementById("input_viewgoal").value;
	var flight = document.getElementById("input_flight").value;
	// alert(viewgoal);
	calculations++;

	//UNITED STATES
	if (select_geo.value == "us"){

		breakout_app = 55;
		breakout_scs = 30;
		breakout_thumb = 15;
		breakout_swsu = 30;
		breakout_atsu = 5;

		avgctr_app = 0.94;
		avgctr_thumb = 0.15;
		avgctr_swsu = 0.30;
		avgctr_atsu = 0.14;

		avail_app = 1133333;
		avail_thumb = 800000;
		avail_swsu = 1666667;
		avail_atsu = 222222;
	} 
	//UNITED KINGDOM
	else if (select_geo.value == "uk"){

		breakout_app = 36;
		breakout_scs = 30;
		breakout_thumb = 9;
		breakout_swsu = 25;
		breakout_atsu = 5;

		avgctr_app = 2.05;
		avgctr_thumb = 0.20;
		avgctr_swsu = 0.88;
		avgctr_atsu = 0.50;
	}
	//CANADA
	else if (select_geo.value == "ca"){

		breakout_app = 26;
		breakout_scs = 35;
		breakout_thumb = 12;
		breakout_swsu = 27;
		breakout_atsu = 5;

		avgctr_app = 1.30;
		avgctr_thumb = 0.27;
		avgctr_swsu = 1.01;
		avgctr_atsu = 0.50;
	}
	//BRAZIL
	else if (select_geo.value == "br"){

		breakout_app = 3;
		breakout_scs = 65;
		breakout_thumb = 4;
		breakout_swsu = 28;
		breakout_atsu = 5;

		avgctr_app = 1.45;
		avgctr_thumb = 0.20;
		avgctr_swsu = 0.75;
		avgctr_atsu = 0.50;
	}
	//MEXICO
	else if (select_geo.value == "mx"){

		breakout_app = 2.43;
		breakout_scs = 89.88;
		breakout_thumb = 0.81;
		breakout_swsu = 6.88;
		breakout_atsu = 5;

		avgctr_app = 0.90;
		avgctr_thumb = 0.15;
		avgctr_swsu = 0.70;
		avgctr_atsu = 0.50;
	}
	//AUSTRALIA
	else if (select_geo.value == "au"){

		breakout_app = 19;
		breakout_scs = 45;
		breakout_thumb = 7;
		breakout_swsu = 29;
		breakout_atsu = 5;

		avgctr_app = 1.10;
		avgctr_thumb = 0.21;
		avgctr_swsu = 0.87;
		avgctr_atsu = 0.50;
	}
	//FRANCE
	else if (select_geo.value == "fr"){

		breakout_app = 6.84;
		breakout_scs = 83.71;
		breakout_thumb = 0.16;
		breakout_swsu = 9.29;
		breakout_atsu = 5;

		avgctr_app = 1.20;
		avgctr_thumb = 0.12;
		avgctr_swsu = 0.55;
		avgctr_atsu = 0.50;
	}
	//GERMANY
	else if (select_geo.value == "ge"){

		breakout_app = 9.53;
		breakout_scs = 76.19;
		breakout_thumb = 0.71;
		breakout_swsu = 13.57;
		breakout_atsu = 5;

		avgctr_app = 0.95;
		avgctr_thumb = 0.25;
		avgctr_swsu = 0.70;
		avgctr_atsu = 0.50;
	}

	// var impsneeded_atsu = 150000;

	avgctr_swsu = avgctr_swsu.toFixed(2);
	avgctr_atsu = avgctr_atsu.toFixed(2);
	

	var totalviews_app = Math.round((viewgoal*breakout_app)/100);
	var totalviews_scs = Math.round((viewgoal*breakout_scs)/100);
	var totalviews_thumb = Math.round((viewgoal*breakout_thumb)/100);
	var totalviews_swsu = Math.round((viewgoal*breakout_swsu)/100);
	var totalviews_atsu = Math.round((viewgoal*breakout_atsu)/100);
	var totalviews = totalviews_app + totalviews_scs + totalviews_thumb + totalviews_swsu + totalviews_atsu;

	var impsneeded_app = Math.round((totalviews_app/avgctr_app)*100);
	var impsneeded_thumb = Math.round((totalviews_thumb/avgctr_thumb)*100);
	var impsneeded_swsu = Math.round((totalviews_swsu/avgctr_swsu)*100);
	var impsneeded_atsu = Math.round((totalviews_atsu/avgctr_atsu)*100);
	var totalimpsneeded = impsneeded_app + impsneeded_thumb + impsneeded_swsu + impsneeded_atsu;
	


	if (select_geo.value == "us") {


		if (impsneeded_app/flight > avail_app){

			impsneeded_app = avail_app*flight;
			totalviews_app = Math.round((impsneeded_app*avgctr_app)/100);

			impsneeded_thumb = avail_thumb*flight;
			totalviews_thumb = Math.round((impsneeded_thumb*avgctr_thumb)/100);
		

			impsneeded_swsu = avail_swsu*flight;
			totalviews_swsu = Math.round((impsneeded_swsu*avgctr_swsu)/100);
		

			impsneeded_atsu = avail_atsu*flight;
			totalviews_atsu = Math.round((impsneeded_atsu*avgctr_atsu)/100);


			totalviews_scs = viewgoal - (totalviews_app + totalviews_thumb + totalviews_swsu + totalviews_atsu);
		}

		totalviews = totalviews_app + totalviews_scs + totalviews_thumb + totalviews_swsu + totalviews_atsu;

		totalimpsneeded = impsneeded_app + impsneeded_thumb + impsneeded_swsu + impsneeded_atsu;

	}

	document.getElementById("display_breakout_app").innerHTML = breakout_app +'%';
	// console.log('breakout_app: ', breakout_app);
	document.getElementById("display_breakout_scs").innerHTML = breakout_scs +'%';
	document.getElementById("display_breakout_thumb").innerHTML = breakout_thumb +'%';
	document.getElementById("display_breakout_swsu").innerHTML = breakout_swsu +'%';
	document.getElementById("display_breakout_atsu").innerHTML = breakout_atsu +'%';	

	document.getElementById("display_totalviews_app").innerHTML = totalviews_app;
	document.getElementById("display_totalviews_scs").innerHTML = totalviews_scs;
	document.getElementById("display_totalviews_thumb").innerHTML = totalviews_thumb;
	document.getElementById("display_totalviews_swsu").innerHTML = totalviews_swsu;
	document.getElementById("display_totalviews_atsu").innerHTML = totalviews_atsu;	
	document.getElementById("display_totalviews").innerHTML = totalviews;

	document.getElementById("display_avgctr_app").innerHTML = avgctr_app +'%';
	document.getElementById("display_avgctr_thumb").innerHTML = avgctr_thumb +'%';
	document.getElementById("display_avgctr_swsu").innerHTML = avgctr_swsu +'%';
	document.getElementById("display_avgctr_atsu").innerHTML = avgctr_atsu +'%';

	document.getElementById("display_impsneeded_app").innerHTML = impsneeded_app;
	document.getElementById("display_impsneeded_thumb").innerHTML = impsneeded_thumb;
	document.getElementById("display_impsneeded_swsu").innerHTML = impsneeded_swsu;
	document.getElementById("display_impsneeded_atsu").innerHTML = impsneeded_atsu;
	document.getElementById("display_totalimpsneeded").innerHTML = totalimpsneeded;
};
