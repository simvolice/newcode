

var ContactUs = (function () {
	
	
	//here variable
	
	function init() {
		
		
		
		
	}
	
	
	return {
	
		init: init
		
		
		
	};
	
	
})();



var MyPortfolio = (function () {
	
	//here variable
	
	function init() {
		
		
		
		
	}
	
	
	return {
	
		init: init
		
		
		
	};
	
	
	
})();




var StarPage = (function () {
	
	var titleMain;
	
	var blockForText;
	
	function init() {
		
		
		
		titleMain = $('.sec_left_title');
		
		blockForText = $('.blockTExt');
		
		
	}
	
	
	
	function showTitle(){
		
		TweenLite.to(titleMain, .3, {
			
			left:"0",
			ease: Power4.easeOut,
			
			onComplete: function(){
				
					  TweenLite.to(blockForText, 1, {css:{margin:"25px"}, delay:0.5, ease: Power4.easeOut});
	
				
				
			}
			
			
		});
		
		
	}
	
	
	return {
	
		init: init,
		showTitle: showTitle
		
		
		
	};
	
	
})();

var PreLoader = (function() {

	var _scope;
	
	var _scopeWrapper;
	
	var _isOpen = true;
	
	//-------------------------------------------
	
	function init(){
		
		 $("#typed").typed({

		  
		  stringsElement: $('#typed-strings'),
        typeSpeed: 30,
		  loop: false,
		  backDelay: 500,
		  loopCount: false
      });
	
		
		_scopeWrapper = $('.wraper');
		_scope = $('div#preloader');
	}; 
	
	
	//-------------------------------------------

	function hide(){
	  if(!_isOpen) return;
	  _isOpen = false;

 	  
 	  TweenLite.to(_scope, .3, {
 	  	delay: 5,
		  
		  background: '#FFFF00',
		 
	scaleY: 0.001,
 	 
		 height: '60vh',
		    
  	  ease: Power4.easeOut,
		  
  	  onComplete: function(){
		  
		  //Здесь будем каскадом запускать по цепочке.
		  
		  
      _scope.css('display', 'none');
		  
		
		  
		  TweenLite.to(_scopeWrapper, .3, {css:{display:"flex"}, delay:0.5, ease: Power4.easeOut,
										  
										  onComplete: function(){
											  
											 StarPage.showTitle();  
											  
											  
										  }
										 
										 
										 
										 });
		  
		  
		 
  	  }
  	});
	};
	
	//-------------------------------------------
	
	return {
		init: init,				
		
		hide: hide
	};

})();



var APP, Application = function(){
	
	
	
	this.init = function(){
		
		
		PreLoader.init();
		StarPage.init();
		
		
		
	};
	
	
	
	
	
};




//-------------------------------------------

$(function(){
	

	APP = new Application();
	
	
	APP.init();
});

//-------------------------------------------

$(window).on('load', function(e){
	

	setTimeout(function(){
		PreLoader.hide();		
	}, 50)
	
	
});

//-------------------------------------------