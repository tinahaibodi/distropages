window.onload = function() {
	// do something on load
}

function copyToClipboard(text) {
	window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

var CPVcalc = function() {
	viewgoal = document.getElementById("input_viewgoal").value;
	// alert(viewgoal);

	var breakout_app = 42;
	var breakout_scs = 25;
	var breakout_thumb = 10;
	var breakout_swsu = 23;

	var avgctr_app = 1.52;
	var avgctr_thumb = 0.25;
	var avgctr_swsu = 0.50;
	var avgctr_atsu1 = 0.50;
	var avgctr_atsu2 = 0.50;
	var avgctr_atsu3 = 0.50;

	var impsneeded_atsu1 = 150000;
	var impsneeded_atsu2 = 150000;
	var impsneeded_atsu3 = 150000;

	var avgctr_swsu = avgctr_swsu.toFixed(2);
	var avgctr_atsu1 = avgctr_atsu1.toFixed(2);
	var avgctr_atsu2 = avgctr_atsu2.toFixed(2);
	var avgctr_atsu3 = avgctr_atsu3.toFixed(2);

	var totalviews_app = Math.round((viewgoal*breakout_app)/100);
	var totalviews_scs = Math.round((viewgoal*breakout_scs)/100);
	var totalviews_thumb = Math.round((viewgoal*breakout_thumb)/100);
	var totalviews_swsu = Math.round((viewgoal*breakout_swsu)/100);
	var totalviews = totalviews_app + totalviews_scs + totalviews_thumb + totalviews_swsu;

	var impsneeded_app = Math.round((totalviews_app/avgctr_app)*100);
	var impsneeded_thumb = Math.round((totalviews_thumb/avgctr_thumb)*100);
	var impsneeded_swsu = Math.round((totalviews_swsu/avgctr_swsu)*100);
	var totalimpsneeded = impsneeded_app + impsneeded_thumb + impsneeded_swsu + impsneeded_atsu1 + impsneeded_atsu2 + impsneeded_atsu3;


	// document.getElementById("display_viewgoal").innerHTML = viewgoal;

	document.getElementById("display_breakout_app").innerHTML = breakout_app;
	document.getElementById("display_breakout_scs").innerHTML = breakout_scs;
	document.getElementById("display_breakout_thumb").innerHTML = breakout_thumb;
	document.getElementById("display_breakout_swsu").innerHTML = breakout_swsu;

	document.getElementById("display_totalviews_app").innerHTML = totalviews_app;
	document.getElementById("display_totalviews_scs").innerHTML = totalviews_scs;
	document.getElementById("display_totalviews_thumb").innerHTML = totalviews_thumb;
	document.getElementById("display_totalviews_swsu").innerHTML = totalviews_swsu;
	document.getElementById("display_totalviews").innerHTML = totalviews;

	document.getElementById("display_avgctr_app").innerHTML = avgctr_app;
	document.getElementById("display_avgctr_thumb").innerHTML = avgctr_thumb;
	document.getElementById("display_avgctr_swsu").innerHTML = avgctr_swsu;
	document.getElementById("display_avgctr_atsu1").innerHTML = avgctr_atsu1;
	document.getElementById("display_avgctr_atsu2").innerHTML = avgctr_atsu2;
	document.getElementById("display_avgctr_atsu3").innerHTML = avgctr_atsu3;

	document.getElementById("display_impsneeded_app").innerHTML = impsneeded_app;
	document.getElementById("display_impsneeded_thumb").innerHTML = impsneeded_thumb;
	document.getElementById("display_impsneeded_swsu").innerHTML = impsneeded_swsu;
	document.getElementById("display_impsneeded_atsu1").innerHTML = impsneeded_atsu1;
	document.getElementById("display_impsneeded_atsu2").innerHTML = impsneeded_atsu2;
	document.getElementById("display_impsneeded_atsu3").innerHTML = impsneeded_atsu3;
	document.getElementById("display_totalimpsneeded").innerHTML = totalimpsneeded;
}
