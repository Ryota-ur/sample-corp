

jQuery('.drawer-icon').on('click',function(e){
  e.preventDefault();
     
  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');
  
  return false;
  
  });
  
  jQuery('.drawer-background').on('click',function(e){
      e.preventDefault();
     
      jQuery('.drawer-icon').removeClass('is-active');
      jQuery('.drawer-content').removeClass('is-active');
      jQuery('.drawer-background').removeClass('is-active');
     
      return false;
     
     });

   const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 40,
    slidesPerView: 'auto',
    loop: true,
    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable:true
    },

    spaceBetween: 24,
    breakpoints: {
        768: {
        spaceBetween: 40,
     }
    }


  });

  jQuery('.qa-box-q').on('click',function(){
    jQuery(this).next().slideToggle();
    jQuery(this).children('.qa-q__icon').toggleClass('is-open');
    })


    let $submit = $( '#js-submit' )

    //id=js-formのinputタグ、textareaが入力、変更されたら
    $( '#js-form input, #js-form textarea' ).on( 'change', function(){
    
    //id=js-formのinput[type="text"]のvalueが空ではない、かつ
     if(
     $( '#js-form input[type="text"]' ).val() !== ""&&
    
    //id=js-formのinput[type="email"]のvalueが空ではない、かつ
     $( '#js-form input[type="email"]' ).val() !== ""&&
    
    //id=js-formのinput[name="entry.630969603"（プライバシーポリシー）]のチェックがついていたら
     $( '#js-form input[name="check"]' ).prop( 'checked' ) === true
      ){
    
    ///すべての項目を入力されたとき
    //未入力のままでも送信されないために付与した「disabled」を外す
     $submit.prop( 'disabled', false)
    
    //activeのclassを挿入する
     $submit.addClass( 'is-active')
    
    ///すべての項目を入力されていないとき
    //未入力のままでも送信されないために付与した「disabled」をつける
      }else {
     $submit.prop( 'disabled', true)
    
    //そうでなかった場合はactiveのclassを削除する
     $submit.removeClass( 'is-active')
      }
    })


   jQuery('a[href^="#"]').on('click',function(){

    var header = jQuery('.header').innerHeight();
    var id= jQuery(this).attr('href');
    var position = 0;
    if ( id != '#'){
        position = jQuery(id).offset().top - header;
    }
    jQuery('html,body').animate({
    scrollTop:position
    } ,
    1000);
    });


// スクロール検知
jQuery(window).on("scroll", function() {
   if (100 < jQuery(this).scrollTop()) {
   jQuery('.page-top').removeClass('DownMove');
   jQuery('.page-top').addClass('UpMove');
   } else {
    if(jQuery('.page-top').hasClass('UpMove')){
      jQuery('.page-top').removeClass('UpMove');
      jQuery('.page-top').addClass('DownMove');
   }
   }});


// #page-topをクリックした際の設定
jQuery('.page-top').click(function () {
	var scroll = $(window).scrollTop(); //スクロール値を取得
	if(scroll > 0){
		jQuery(this).addClass('floatAnime');//クリックしたらfloatAnimeというクラス名が付与
        $('body,html').animate({
            scrollTop: 0
        }, 500,function(){//スクロールの速さ。数字が大きくなるほど遅くなる
          jQuery('.page-top').removeClass('floatAnime');//上までスクロールしたらfloatAnimeというクラス名を除く
        });	
	}
    return false;//リンク自体の無効化
});

  


