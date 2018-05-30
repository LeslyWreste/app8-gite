// JavaScript Document
$(document).ready( function(e){
	document.addEventListener("deviceready",function(){
		$('#sonar').tap(function(){
			navigator.notification.beep(2);
		});//Cierre del beep
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(2000);
		});//Cierre del vibrate
	},false);//Cierra el device Ready
});//Cierra el Document Ready