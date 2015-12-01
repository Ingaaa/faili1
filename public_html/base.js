//*Nomainīju, ka katru reizi pēc pogas "Sūtīt" nospiešanas, notīras iepriekšējie kļūdu paziņojumi 
//*Ja lauks 'Vārs, Uzvārds' nav tukšs, tad pārbauda, vai tas sastāv tikai no burtiem
//*Ja lauks 'Telefona numurs' nav tukšs, tad parbauda, vai tas sastāv tikai no cipariem
//*Pārbauda vai lauks 'Daudzums' nav tukšs un, ja nav tukšs, tad pārbauda vai sastāv tikai no cipariem
//*Nomainīju, ka summa tiek aprēķināta šādi: cena*daudzums
//*Nomainīju, ka summa pirmoreiz tiek aprēķināta ielādējoties lapai un pēc tam katru reizi mainot daudzumu, ja ir ievadīti tikai cipari
//*Nomainīju visos if nosacījumos == uz ===, jo == lieto, ja nepieciešams pārveidot datu tipu priekš salīdzināšanas

window.onload = function() {
	null;
};

function renderErrors(errors) {
        $("#errors").html("");
	for (var i=0; i < errors.length; i++) {
		$("#errors").append("<div> &raquo; " + errors[i] + "</div>");
	};
}

function validateForm() {
	result = true;
	var errors = [];
	
	if (document.getElementById("full-name").value === '') {
		errors.push("Lauks 'Vārs, Uzvārds' ir jānorāda obligāti");
		result = false;
	}
        if ((!/^[a-zA-Z]+$/.test(document.getElementById("full-name").value)) && !(document.getElementById("full-name").value === '')) {
		errors.push("Lauks 'Vārs, Uzvārds' var saturēt tikai burtus! ");
		result = false;
	}
	if (document.getElementById("telefonanr").value === '') {
		errors.push("Lauks 'Telefona numurs' ir jānorāda obligāti");
		result = false;
	}
        if ((!/^[0-9]+$/.test(document.getElementById("telefonanr").value))&& !(document.getElementById("telefonanr").value === '')) {
		errors.push("Lauks 'Telefona numurs' var saturēt tikai ciparus");
		result = false;
	}
	if (document.getElementById("zinojums").value === '') {
		errors.push("Lauks 'Ziņojums' ir jānorāda obligāti");
		result = false;
	}
        if (document.getElementById("quantity").value === '') {
		errors.push("Lauks 'Daudzums' ir jānorāda obligāti");
		result = false;
	}
        if (!(document.getElementById("quantity").value === '') && (!/^[0-9]+$/.test(document.getElementById("quantity").value))) {
		errors.push("Lauks 'Daudzums' var saturēt tikai ciparus");
		result = false;
	}
	
	if (errors[0] === undefined) {
		return true;
	} else {
		renderErrors(errors);
		return false;
	}
}

$(document).ready(function() {
    $("#order-rezultats").text($("#price").val() * $("#quantity").val());
    $( "#quantity" ).change(function() {
        if (($("#quantity").val()).match(/^[0-9]+$/))
        {
            $("#order-rezultats").text($("#price").val() * $("#quantity").val());
        }  
    });
  
});