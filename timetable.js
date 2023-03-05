$(document).ready(function() {
	$("#add-row-btn").click(function() {
		var newRowHeader = prompt("Enter header for new row:", "");
		if (newRowHeader !== null && newRowHeader !== "") {
			var newRow = $("<tr><th>" + newRowHeader + "</th><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
			$("table").append(newRow);
				var rownum = 6;
				$("tr").each(function() {
					if ($(this).find("th").length === rownum) {
						console.log("in if");
						for(var i=0; i<rownum; i++){
					}
					rownum++;
					} 
					else {
						console.log("in else");
						console.log(rownum);
					}
				});
				for(var i=6; i<colnum; i++){
				newRow.find("td:last-child").after("<td></td>")}
			$("#row-header").append("<option value="+newRowHeader+">"+newRowHeader+"</option>")
		}
	});
	var colnum = 6;
	$("#add-col-btn").click(function() {
		var newColHeader = prompt("Enter header for new column:", "");
		if (newColHeader !== null && newColHeader !== "") {
			$("tr").each(function() {
				if ($(this).find("th").length === colnum) {
					console.log("in if");
					$(this).append("<td></td>");
				} else {
					console.log("in else");
					$(this).find("th:last-child").after("<th>" + newColHeader + "</th>");
					$(this).find("td:last-child").after("<td></td>");
				}
			});
			colnum++;
			console.log(colnum)

			$("#col-header").append("<option value="+newColHeader+">"+newColHeader+"</option>")
		}
	});
	$("#add-agenda-btn").click(function() {
		var rowHeader = $("#row-header").val();
        console.log(rowHeader);
		var colHeader = $("#col-header").val();
        console.log(colHeader);
		var agendaText = $("#agenda-text").val();
        console.log(agendaText);
		var rowIndex = $("th").filter(function() { return $(this).text() === rowHeader; }).parent().index();
        console.log(rowIndex);
		var colIndex = $("th:contains('" + colHeader + "')").index() -1;
        console.log(colIndex);
		if (agendaText !== "") {
			if ($("tr:eq(" + rowIndex + ") td:eq(" + colIndex + ")").text() !== "") {
                alert("Cell already has an agenda item!");
                } else {
                $("tr:eq(" + rowIndex + ") td:eq(" + colIndex + ")").text(agendaText);
                }
                }
                });
                $("table").on("mouseenter", "td", function() {
                    var $td = $(this);
                    if ($td.text() !== "") {
                        $td.append("<span class='delete-icon'>&times;</span>");
                    }
                }).on("mouseleave", "td", function() {
                    $(this).find(".delete-icon").remove();
                }).on("click", ".delete-icon", function() {
                    $(this).parent().text("");
                });
            });