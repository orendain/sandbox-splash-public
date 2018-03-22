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
		if (myThis.is("#ambari")) {
			window.open(proto_ip + ':8080');
		}
		else if (myThis.is("#atlas")) {
			window.open(proto_ip + ':21000');
		}
    else if (myThis.is("#wfm")) {
			window.open(proto_ip + ':8080/#/main/views/WORKFLOW_MANAGER/1.0.0/workflow_manager');
		}
		else if (myThis.is("#ranger")) {
			window.open(proto_ip + ':6080');
		}
    else if (myThis.is("#zeppelin")) {
			window.open(proto_ip + ':9995');
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
	window.open(url, 'window1', 'resizable=yes, width='+width+', height='+height+', top=0, left=0');
  window.open('http://hortonworks.com/hadoop-tutorial/hello-world-an-introduction-to-hadoop-hcatalog-hive-and-pig', 'window2', 'resizable=yes, width=' + width2 + ', height=' + height + ', left=' + width + ', top=0');
}
