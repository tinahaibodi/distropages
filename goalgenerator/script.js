var calculations = 0;

var CPVcalc = function() {
	viewgoal = document.getElementById("input_viewgoal").value;
	// alert(viewgoal);
	calculations++;

	//UNITED STATES
	if (select_geo.value == "us"){

		var breakout_app = 55;
		var breakout_scs = 30;
		var breakout_thumb = 15;
		var breakout_swsu = 30;
		var breakout_atsu = 5;

		var avgctr_app = 0.94;
		var avgctr_thumb = 0.15;
		var avgctr_swsu = 0.30;
		var avgctr_atsu = 0.14;

	} 
	//UNITED KINGDOM
	else if (select_geo.value == "uk"){

		var breakout_app = 36;
		var breakout_scs = 30;
		var breakout_thumb = 9;
		var breakout_swsu = 25;
		var breakout_atsu = 5;

		var avgctr_app = 2.05;
		var avgctr_thumb = 0.20;
		var avgctr_swsu = 0.88;
		var avgctr_atsu = 0.50;
	}
	//CANADA
	else if (select_geo.value == "ca"){

		var breakout_app = 26;
		var breakout_scs = 35;
		var breakout_thumb = 12;
		var breakout_swsu = 27;
		var breakout_atsu = 5;

		var avgctr_app = 1.30;
		var avgctr_thumb = 0.27;
		var avgctr_swsu = 1.01;
		var avgctr_atsu = 0.50;
	}
	//BRAZIL
	else if (select_geo.value == "br"){

		var breakout_app = 3;
		var breakout_scs = 65;
		var breakout_thumb = 4;
		var breakout_swsu = 28;
		var breakout_atsu = 5;

		var avgctr_app = 1.45;
		var avgctr_thumb = 0.20;
		var avgctr_swsu = 0.75;
		var avgctr_atsu = 0.50;
	}
	//MEXICO
	else if (select_geo.value == "mx"){

		var breakout_app = 2.43;
		var breakout_scs = 89.88;
		var breakout_thumb = 0.81;
		var breakout_swsu = 6.88;
		var breakout_atsu = 5;

		var avgctr_app = 0.90;
		var avgctr_thumb = 0.15;
		var avgctr_swsu = 0.70;
		var avgctr_atsu = 0.50;
	}
	//AUSTRALIA
	else if (select_geo.value == "au"){

		var breakout_app = 19;
		var breakout_scs = 45;
		var breakout_thumb = 7;
		var breakout_swsu = 29;
		var breakout_atsu = 5;

		var avgctr_app = 1.10;
		var avgctr_thumb = 0.21;
		var avgctr_swsu = 0.87;
		var avgctr_atsu = 0.50;
	}
	//FRANCE
	else if (select_geo.value == "fr"){

		var breakout_app = 6.84;
		var breakout_scs = 83.71;
		var breakout_thumb = 0.16;
		var breakout_swsu = 9.29;
		var breakout_atsu = 5;

		var avgctr_app = 1.20;
		var avgctr_thumb = 0.12;
		var avgctr_swsu = 0.55;
		var avgctr_atsu = 0.50;
	}
	//GERMANY
	else if (select_geo.value == "ge"){

		var breakout_app = 9.53;
		var breakout_scs = 76.19;
		var breakout_thumb = 0.71;
		var breakout_swsu = 13.57;
		var breakout_atsu = 5;

		var avgctr_app = 0.95;
		var avgctr_thumb = 0.25;
		var avgctr_swsu = 0.70;
		var avgctr_atsu = 0.50;
	}

	// var impsneeded_atsu = 150000;

	var avgctr_swsu = avgctr_swsu.toFixed(2);
	var avgctr_atsu = avgctr_atsu.toFixed(2);

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


	document.getElementById("display_breakout_app").innerHTML = breakout_app +'%';
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
}
