window.onload = function() {
	null;
}

function renderErrors(errors) {
	for (var i=0; i < errors.length; i++) {
		$("#errors").append("<div> &raquo; " + errors[i] + "</div>");
	};
}

function validateForm() {
	result = true;
	var errors = [];
	
	if (document.getElementById("full-name").value == '') {
		errors.push("Lauks 'Vārs, Uzvārds' ir jānorāda obligāti");
		result = false;
	}
	if (document.getElementById("telefonanr").value == '') {
		errors.push("Lauks 'Telefona numurs' ir jānorāda obligāti");
		result = false;
	}
	if (document.getElementById("zinojums").value == '') {
		errors.push("Lauks 'Ziņojums' ir jānorāda obligāti");
		result = false;
	}
	
	if (errors[0] == undefined) {
		return true;
	} else {
		renderErrors(errors);
		return false;
	}
}

$(document).ready(function() {
  $("#order-rezultats").text($("#price").val() + $("#quantity").val());
});