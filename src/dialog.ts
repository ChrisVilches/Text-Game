/// <reference path="jquery.d.ts" />
"use strict";

var dialogoExample; // So typescript doesn't complain it doesn't exist

var dialog = dialogoExample;
var currMsg = findMsgById('first-msg');
var booleans = [];
var currPage = 0;	// The 'page' is used for messages that are
				// actually an array of strings, rather than a single string.
				// It's called 'page' because it shows as if it was a different
				// page of a book, etc.



// Ends a dialog
function endDialog():void{
	$("#main-message").html("End");
	$("#options").html("");
}


// Is the message in its last page?
function isLastPage():boolean{
	if(currPage+1 == currMsg.msg.length) return true;
	return false;
}

// Does the message have options?
function hasOptions():boolean{
	if(typeof currMsg.opt == 'undefined' || currMsg.opt.length == 0){
		return false;
	}
	return true;
}



// Find a message object by its ID
function findMsgById(id){
	for(var i=0; i<dialog.length; i++){
		if(dialog[i].id == id){
			return dialog[i];
		}
	}
	return null;
}


// When clicking an option button, it saves booleans (if any)
function setBooleans(index:number):void{

	// If it doesn't have booleans to set, do nothing
	if(typeof currMsg.booleans == 'undefined' || currMsg.booleans.length == 0){
		return;
	}    

	// Add boolean
	var bool = currMsg.booleans[index];
	if(typeof bool == 'string' && bool != null){
		booleans.push(bool);
	}
	
}






function getNextMsg(id = null):void{

    if(id == null){       
        
        // Clicked the 'next button'         
        
        if(isLastPage()){
            currPage = 0;
            currMsg = findMsgById(currMsg.next[0]);
        } else {
            currPage++;  
        }
              
    } else {        
        
        // Clicked an option
        
        currPage = 0;
        currMsg = findMsgById(id);
    }
       
    // Show message (update GUI)
    if(currMsg == null){
		endDialog();

	} else {

		showText();
		showMsgOptions();		
	}
        	
}



function showText():void{
	if(typeof currMsg.msg == 'object'){
		$("#main-message").html(currMsg.msg[currPage]);
	} else {
		$("#main-message").html(currMsg.msg);
	}		
}


function showMsgOptions():void{
    // Reset content
	$("#options").html("");
    
    if(!isLastPage() || !hasOptions()){
		$("#options").append("<button onclick='getNextMsg();'>→</button>");
	} 
    else if(hasOptions()){
		for(var i=0; i<currMsg.opt.length; i++){
            var button : string = "<button onclick='setBooleans("+i+"); getNextMsg(\""+currMsg.next[i]+"\");'>"+currMsg.opt[i]+"</button>"; 
			$("#options").append(button);
		}
	}	
}


;(function(){

	// Initialize		

	showText();
	showMsgOptions();

})();
