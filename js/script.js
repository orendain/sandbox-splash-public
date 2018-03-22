$(document).ready(function() {
	$(".col-three").mouseenter(function() {
	    clearTimeout($(this).data('timeoutId'));
	    $(this).find(".rollover").slideDown("fast");
	    if ($(this).hasClass("short")) {
	    	$(this).find("h4").css("margin-top", "75px");
	    }
	    else if ($(this).hasClass("medium")) {
	    	$(this).find("h4").css("margin-top", "50px");
	    }
	    else {
	    	$(this).find("h4").css("margin-top", "25px");
	    }
	    $(this).css("border", "3px solid #1fa4d4");
	}).mouseleave(function() {
	    var myThis = $(this),
	        timeoutId = setTimeout(function() {
	            myThis.find(".rollover").slideUp("fast");
	            myThis.css("border", "1px solid #ddd");
	            myThis.find("h4").css("margin-top", "80px");
	        }, 200);
	    myThis.data('timeoutId', timeoutId);
	});

	/* Takes users to UI after clicking quicklinks */
	$('.singleui').click(function() {
		var myThis = $(this);
    var proto_ip = location.protocol + '//' + ip;
		if (myThis.is("#storm")) {
			window.open(proto_ip + ':8744');
		}
    else if (myThis.is("#nifi")) {
			window.open(proto_ip + ':9090/nifi');
		}
		else if (myThis.is("#hdfsnn")) {
			window.open(proto_ip + ':50070');
		}
		else if (myThis.is("#hbase")) {
			window.open(proto_ip + ':16010/master-status');
		}
		else if (myThis.is("#superset")) {
			window.open(proto_ip + ':9089');
		}
		else if (myThis.is("#registry")) {
			window.open(proto_ip + ':7788');
		}
		else if (myThis.is("#sam")) {
			window.open(proto_ip + ':7777');
		}
		else if (myThis.is("#web-shell")) {
			window.open(proto_ip + ':4200');
		}
		return false;
	});

});

function openWindows(ip) {
	var url = 'http://' + ip + ':8080';
	var width = window.screen.width * 0.7;
	var width2 = window.screen.width * 0.3;
	var height = window.screen.height;
	window.open(url, 'window1', 'resizable=yes, width=' + width + ', height=' + height + ', top=0, left=0');
  window.open('https://hortonworks.com/hadoop-tutorial/getting-started-hdf-sandbox/', 'window2', 'resizable=yes, width=' + width2 + ', height=' + height + ', left=' + width + ', top=0');
}
