$(document).ready(function(){
   //make image clickable, and add sound plugin
   
 $("#descripition").hide();
 	 $("#descripition").slideToggle(1000);
	  $("#descripition").fadeOut(8000);
   
   
   $("#memo-on").click(function() {	
       $("#memo-turn-on").show();
   });
   
   $("#memo-off").click(function() {	
       $("#memo-turn-on").hide();
   });
   
   
   $(".octave2_c").mousedown(function() {	
       $(".note2p_c").show();
	 	
		$('.octave2_c').audioeffects({
     	audioId: "2_c",
    	volume:0.7,
				}).mouseup(function(){
	   		$(".note2p_c").hide();
   		}); 
   }); 
   
   
   $(".octave2_d").mousedown(function() {
	      $(".note2p_d").show(); 
	 
		 $('.octave2_d').audioeffects({
   		  audioId: "2_d",
   		  volume:0.7,
 		  }).mouseup(function(){
			   		$(".note2p_d").hide();
   		}); 
   }); 
   
   
   $(".octave2_e").mousedown(function() { 
		$(".note2p_e").show(); 
	    $('.octave2_e').audioeffects({
    		 audioId: "2_e",
    		 volume:0.7,
    		 }).mouseup(function(){
	   			$(".note2p_e").hide();
   		}); 
   }); 
   

    $(".octave2_f").mousedown(function() { 
	   $(".note2p_f").show(); 
	 $('.octave2_f').audioeffects({
     audioId: "2_f",
     volume:0.7,
     }).mouseup(function(){
	   		$(".note2p_f").hide();
   		}); 
   }); 
   
   
   
     
   $(".octave2_g").mousedown(function() { 
	   $(".note2p_g").show(); 
	 $('.octave2_g').audioeffects({
     audioId: "2_g",
     volume:0.7,
     }).mouseup(function(){
	   		$(".note2p_g").hide();
   		}); 
   }); 
   
 
 
    
   $(".octave2_a").mousedown(function() { 
	 	 $(".note2p_a").show(); 
	 $('.octave2_a').audioeffects({
     audioId: "2_a",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note2p_a").hide();
   		}); 
   }); 
   
   
   
   $(".octave2_b").mousedown(function() { 
	 	 $(".note2p_b").show(); 
	 $('.octave2_b').audioeffects({
     audioId: "2_b",
     volume:0.7,
  
   			}).mouseup(function(){
	   		$(".note2p_b").hide();
   		}); 
   }); 
   
    $(".octave2_black_c").mousedown(function() { 
	 	$(".note2bp_c").show();
	 $('.octave2_black_c').audioeffects({
     audioId: "2b_c",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note2bp_c").hide();
   		}); 
   }); 
   
   
      $(".octave2_black_d").mousedown(function() { 
	 	$(".note2bp_d").show();
	 $('.octave2_black_d').audioeffects({
     audioId: "2b_d",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note2bp_d").hide();
   		}); 
   }); 
   
   
   $(".octave2_black_f").mousedown(function() { 
	 	$(".note2bp_f").show();
	 $('.octave2_black_f').audioeffects({
     audioId: "2b_f",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note2bp_f").hide();
   		}); 
   });
   
   $(".octave2_black_g").mousedown(function() { 
	 	$(".note2bp_g").show();
	 $('.octave2_black_g').audioeffects({
     audioId: "2b_g",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note2bp_g").hide();
   		}); 
   }); 
   
   $(".octave2_black_a").mousedown(function() { 
	 	$(".note2bp_a").show();
	 $('.octave2_black_a').audioeffects({
     audioId: "2b_a",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note2bp_a").hide();
   		}); 
   }); 





 $(".octave1_c").mousedown(function() { 
	 	 $(".note1p_c").show();
	 $('.octave1_c').audioeffects({
     audioId: "1_c",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note1p_c").hide();
   		}); 
   }); 
   
   
   $(".octave1_d").mousedown(function() { 
	 		 $(".note1p_d").show();
	 $('.octave1_d').audioeffects({
     audioId: "1_d",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note1p_d").hide();
   		}); 
   });  
   
   $(".octave1_e").mousedown(function() { 
	 		 $(".note1p_e").show();
	 $('.octave1_e').audioeffects({
     audioId: "1_e",
     volume:0.7,
  
   			}).mouseup(function(){
	   		$(".note1p_e").hide();
   		}); 
   });  
   
   $(".octave1_f").mousedown(function() { 
	 		 $(".note1p_f").show();
	 $('.octave1_f').audioeffects({
     audioId: "1_f",
     volume:0.7,
  
   			}).mouseup(function(){
	   		$(".note1p_f").hide();
   		}); 
   }); 
   
   $(".octave1_g").mousedown(function() { 
		 	 $(".note1p_g").show();
	 $('.octave1_g').audioeffects({
     audioId: "1_g",
     volume:0.7,
  
   			}).mouseup(function(){
	   		$(".note1p_g").hide();
   		}); 
   }); 
   
   $(".octave1_a").mousedown(function() { 
	 		 $(".note1p_a").show();
	 $('.octave1_a').audioeffects({
     audioId: "1_a",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note1p_a").hide();
   		}); 
   }); 
   
   $(".octave1_b").mousedown(function() { 
	 	 $(".note1p_b").show();
	 $('.octave1_b').audioeffects({
     audioId: "1_b",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note1p_b").hide();
   		}); 
   }); 
   
    $(".octave1_black_c").mousedown(function() { 
	 	 $(".note1bp_c").show();
	 $('.octave1_black_c').audioeffects({
     audioId: "1b_c",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note1bp_c").hide();
   		}); 
   });  
   
   $(".octave1_black_d").mousedown(function() { 
	 		 $(".note1bp_d").show();
	 $('.octave1_black_d').audioeffects({
     audioId: "1b_d",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note1bp_d").hide();
   		}); 
   });  
   
   $(".octave1_black_f").mousedown(function() { 
	 		 $(".note1bp_f").show();
	 $('.octave1_black_f').audioeffects({
     audioId: "1b_f",
     volume:0.7,
  
   			}).mouseup(function(){
	   		$(".note1bp_f").hide();
   		}); 
   }); 
   
   
   
   $(".octave1_black_g").mousedown(function() { 
	 		 $(".note1bp_g").show();
	 $('.octave1_black_g').audioeffects({
     audioId: "1b_g",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note1bp_g").hide();
   		}); 
   }); 
   
   
   $(".octave1_black_a").mousedown(function() { 
	 		 $(".note1bp_a").show();
	 $('.octave1_black_a').audioeffects({
     audioId: "1b_a",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note1bp_a").hide();
   		}); 
   }); 
   
   
   
   
    $(".octave3_c").mousedown(function() { 
	 		 $(".note3p_c").show();
	 $('.octave3_c').audioeffects({
     audioId: "3_c",
     volume:0.7,
  
   			}).mouseup(function(){
	   		$(".note3p_c").hide();
   		}); 
   }); 
   
   $(".octave3_d").mousedown(function() { 
	 	$(".note3p_d").show();
	 $('.octave3_d').audioeffects({
     audioId: "3_d",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note3p_d").hide();
   		}); 
   }); 
   
   $(".octave3_e").mousedown(function() { 
	 	$(".note3p_e").show();
	 $('.octave3_e').audioeffects({
     audioId: "3_e",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note3p_e").hide();
   		}); 
   }); 
   
   $(".octave3_f").mousedown(function() { 
	 		$(".note3p_f").show();
	 $('.octave3_f').audioeffects({
     audioId: "3_f",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note3p_f").hide();
   		}); 
   }); 
   
   $(".octave3_g").mousedown(function() { 
	 		$(".note3p_g").show();
	 $('.octave3_g').audioeffects({
     audioId: "3_g",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note3p_g").hide();
   		}); 
   }); 
   
   $(".octave3_a").mousedown(function() { 
	 		$(".note3p_a").show();
	 $('.octave3_a').audioeffects({
     audioId: "3_a",
     volume:0.7,
  
   			}).mouseup(function(){
	   		$(".note3p_a").hide();
   		}); 
   }); 
   
   $(".octave3_b").mousedown(function() { 
	 	$(".note3p_b").show();
	 $('.octave3_b').audioeffects({
     audioId: "3_b",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note3p_b").hide();
   		}); 
   }); 
   
    
   $(".octave3_black_c").mousedown(function() { 
	 		$(".note3bp_c").show();
	 $('.octave3_black_c').audioeffects({
     audioId: "3b_c",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note3bp_c").hide();
   		}); 
   });  
   
   $(".octave3_black_d").mousedown(function() { 
	 		$(".note3bp_d").show();
	 $('.octave3_black_d').audioeffects({
     audioId: "3b_d",
     volume:0.7,
   
   			}).mouseup(function(){
	   		$(".note3bp_d").hide();
   		}); 
   });
   
   $(".octave3_black_f").mousedown(function() { 
	 		$(".note3bp_f").show();
	 $('.octave3_black_f').audioeffects({
     audioId: "3b_f",
     volume:0.7,
  
   			}).mouseup(function(){
	   		$(".note3bp_f").hide();
   		}); 
   }); 
   
   $(".octave3_black_g").mousedown(function() { 
	 		$(".note3bp_g").show();
	 $('.octave3_black_g').audioeffects({
     audioId: "3b_g",
     volume:0.7,
  
   			}).mouseup(function(){
	   		$(".note3bp_g").hide();
   		}); 
   }); 
   
   
   
    $(".octave3_black_a").mousedown(function() { 
	 		$(".note3bp_a").show();
	 $('.octave3_black_a').audioeffects({
     audioId: "3b_a",
     volume:0.7,
  
   			}).mouseup(function(){
	   		$(".note3bp_a").hide();
   		}); 
   }); 
   
  


   
});
