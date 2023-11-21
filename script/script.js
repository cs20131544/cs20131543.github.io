$(document).ready(function(){

		//메뉴 내비게이션
		$("ul.gnb>li").mouseover(function(){
				$("ul.sub,.nav_bg").stop().slideDown(); //mouseover
		});
		$("ul.gnb>li").mouseout(function(){
				$("ul.sub,.nav_bg").stop().slideUp();   //mouseout
		});

		//이미지 슬라이드 애니메이션
		$("ul.slide li").eq(0).siblings().hide();
		var slideNo=0;
	 setInterval(function(){
			if(slideNo<2){
				slideNo++;
			}else{
				slideNo=0;
			}
			$("ul.slide li").eq(slideNo).siblings().fadeOut(500);
			$("ul.slide li").eq(slideNo).fadeIn(500);
		},2000);
		
		//레이어 팝업
		$(".notice ul li").eq(0).click(function(){
			$(".modal").show();
		});
		$(".btn").click(function(){
			$(".modal").hide();
		});

}); //ready end