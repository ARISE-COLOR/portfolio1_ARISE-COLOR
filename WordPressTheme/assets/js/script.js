// ローディング判定
jQuery(function ($) {
  $(window).on("load", function() {
	  $("body").attr("data-loading", "true");
  });

	// スクロール判定
	$(window).on("scroll", function() {
		if (100 < jQuery(this).scrollTop()) {
			$("body").attr("data-scroll", "true");
		} else {
			$("body").attr("data-scroll", "false");
		}
	});
});


/* ドロワーメニュー */
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  $(".js-drawer").click(function () {
    $(this).toggleClass('active');//
      $(".js-drawer-open").toggleClass('is-open');
      $("main").toggleClass('u-mainblur'); //背景をぼかすエフェクトON
      $(".js-glowAnime").toggleClass("u-glowAnime"); //光ながら出現するエフェクトON
    });

  $(".js-drawer-open a").click(function () {
      $(".js-drawer").removeClass('active');
      $(".js-drawer-open").removeClass('is-open');
      $("main").removeClass('u-mainblur'); //背景をぼかすエフェクトOFF
      $(".js-glowAnime").removeClass("u-glowAnime"); //光ながら出現するエフェクトOFF
  });

});




jQuery(function ($) {
	/* スムーススクロール */
	$('a[href^="#"]').click(function() {
		let header = jQuery(".js-header").height();
		let speed = 300;
		let id = jQuery(this).attr("href");
		let target = jQuery("#" == id ? "html" : id);
		let position = jQuery(target).offset().top - header;
		if ("fixed" !== jQuery("#header").css("position")) {
			position = jQuery(target).offset().top;
		}
		if (0 > position) {
			position = 0;
		}
		$("html, body").animate(
			{
				scrollTop: position
			},
			speed
		);
		return false;
	});

	/* 電話リンク */
	let ua = navigator.userAgent;
	if (ua.indexOf("iPhone") < 0 && ua.indexOf("Android") < 0) {
		$('a[href^="tel:"]')
			.css("cursor", "default")
			.on("click", function(e) {
				e.preventDefault();
			});
	}
});


/* メインビジュアル用swiper*/
var swiperMVOption = new Swiper('.js-swiper-mv', {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  speed: 2000
});


// // Works　制作実績用swiper
// var swiperWorksOption = new Swiper('.js-swiper-works', {
//   loop: true,
//   parallax: true, //パパラックスさせる
//   loopAdditionalSlides: 10, //ループのときに作られるクローンの枚数。
//   // effect: 'slide',
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: false,
//   },
//   speed: 1000,
//   pagination: {
//     el: '.p-top-works__swiper-pagination',
//     clickable: true,
//   },
// });



var userAgent = window.navigator.userAgent.toLowerCase();

if (//旧EdgeとIE11ではスライダーのガタつきが強いので、ユーザーエージェント判定でパララックスではなくフェード表示に切り替え
  userAgent.indexOf("msie") != -1 ||
  userAgent.indexOf("trident") != -1 ||
  userAgent.indexOf("edge") != -1 ||
  userAgent.indexOf("firefox") != -1
  ) {
  var mainOptions = {
    loop: true, //ループさせる
    speed: 2000, //２秒かけながら移動
    effect: "fade", //フェードさせる
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loopAdditionalSlides: 10, //ループのときに作られるクローンの枚数。
    pagination: {
      el: '.p-top-works__swiper-pagination',
      clickable: true,
    },
  };
  } else {
  var mainOptions = {
    loop: true, //ループさせる
    speed: 1500, //１.５秒かけながら移動
    parallax: true, //パパラックス設定
    // allowTouchMove: false, //pcではスライプの禁止、クリックでの移動を禁止する
    loopAdditionalSlides: 10, //ループのときに作られるクローンの枚数。
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.p-top-works__swiper-pagination',
      clickable: true,
    },
  };
}; 

var mainSliderTarget = ".js-swiper-works"; //メイン部分のスライダー
var mainSlider = new Swiper(mainSliderTarget, mainOptions); //.slider__mainとそのオプションをセットする





  // worksページサムネイル付きスライダー
//サムネイル
var sliderThumbnail = new Swiper('.js-works-thumbnail', {
  slidesPerView: 3,
  spaceBetween: 10,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,

});

//スライダー
var slider = new Swiper('.js-works-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: sliderThumbnail
  }
});


  function fadeAnime(){
    // その場でフェードイン
    $('.js-fadeInTrigger').each(function(){ //fadeInTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        $(this).addClass('u-fadeIn');// 画面内に入ったらu-fadeInというクラス名を追記
      }else{
        // $(this).removeClass('fadeIn');// 画面外に出たらfadeInというクラス名を外す
      }
    });
  }



function BlurTextAnimeControl() {
  /*テキストがじわっと出現*/
	$('.js-blurTrigger').each(function(){ //blurTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('u-blur');// 画面内に入ったらblurというクラス名を追記
		}else{
		// $(this).removeClass('u-blur');// 画面外に出たらblurというクラス名を外す
		}
		});
}




    //画面がリサイズされたら動かしたいソースコードを記述する
  $(window).on('resize', function () {
      //ドロワーメニューを閉じる
      $(".js-drawer").removeClass('active');//ボタンの activeクラスを除去し
      $(".js-drawer-open").removeClass('is-open');//ナビゲーションのpanelactiveクラスも除去
      $("main").removeClass('u-mainblur');//ぼかしたいエリアにu-mainblurクラスを付与
      $(".js-glowAnime").removeClass("u-glowAnime"); 
    });


  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    fadeAnime();
    BlurTextAnimeControl()
  });


  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load',function(){


    //spanタグを追加する
    var element = $(".js-glowAnime");
    element.each(function () {
      var text = $(this).text();
      var textbox = "";
      text.split('').forEach(function (t, i) {
        if (t !== " ") {
          if (i < 10) {
            textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
          } else {
            var n = i / 10;
            textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
          }

        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);
    });
  });


  
//お問い合わせフォーム
  $(function() {
    $('[name="pickup"]:radio').change(function() {
        $(".p-contact-form__pickup--op").hide();
        if ($("input:radio[name='pickup']:checked").val() == "1") {
            $('.p-contact-form__pickup--op').show();
        } else if($("input:radio[name='pickup']:checked").val() == "2") {
            $("input[name='pickupDate']").val("");
            $("select[name='pickupTime']").val("0");
        }
    }).trigger('change'); 
});


jQuery(function($){
    /* ページ読み込み時のボタン制御処理 */
    if ($('input[id="contact_agree-1"]:checked').val()) {
        $('[name="submitConfirm"]').prop("disabled", false);
    } else {
        $('[name="submitConfirm"]').prop("disabled", true);
    }

    /* 同意のチェックボックスをクリックした際のボタン制御処理 */
    $('[id="contact_agree-1"]').click(function() {
        if ($('input[id="contact_agree-1"]:checked').val()) {
            $('[name="submitConfirm"]').prop("disabled", false);
        } else {
            $('[name="submitConfirm"]').prop("disabled", true);
        }
    });

    /**
     * 確認画面用（確認画面のボタンは常に押せる状態にしておく）
     */
    if (location.pathname === '/confirm/') {
        $('[name="submitButton"]').prop("disabled", false);
        if ($("input:radio[name='pickup']:checked").val() == "1") {
            $('.p-contact-form__pickup--op').show();
        } else if($("input:radio[name='pickup']:checked").val() == "2") {
            $(".p-contact-form__pickup--op").hide();
        }
    }
});

jQuery(function($){
    var area = ($('.mw_wp_form_preview .p-contact-form__pickup').html());
    if ( area.indexOf('不要') != -1) {
    $('.p-contact-form__pickup--op').hide();
    }

});


//お問い合わせフォームのエラー操作(該当箇所にis-errorを付与、エラーメッセージの出し入れ)
jQuery(function($) {

  if ( $('.error')[0] ) {
    $('.p-contact-form__td:has(span)').addClass('is-error');
    $('.p-contact__error').show();
  } else {
    $('.p-contact__error').hide();
  }
});

  // var userAgent = window.navigator.userAgent.toLowerCase();

  // if (//EdgeとIE11ではスライダーのガタつきが強いので、ユーザーエージェント判定でパララックスではなくフェード表示に切り替え
  //   userAgent.indexOf("msie") != -1 ||
  //   userAgent.indexOf("trident") != -1 ||
  //   userAgent.indexOf("edge") != -1
  // ) {
  //   var mainOptions = {
  //     loop: true, //ループさせる
  //     speed: 2000, //２秒かけながら移動
  //     effect: "fade", //フェードさせる

  //     loopAdditionalSlides: 10, //ループのときに作られるクローンの枚数。
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       //prevEl: ".swiper-button-prev", //戻るボタンが必要ならつける
  //     },
  //   };
  // } else {
  //   var mainOptions = {
  //     loop: true, //ループさせる
  //     speed: 1200, //１.２秒かけながら移動
  //     parallax: true, //パパラックスさせる
  //     allowTouchMove: false, //pcではスライプの禁止、クリックでの移動を禁止する
  //     loopAdditionalSlides: 10, //ループのときに作られるクローンの枚数。
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev", //戻るボタンが必要ならつける
  //     },
  //   };
  // }

  // var mainSliderTarget = ".js-slider"; //メイン部分のスライダー
  // var mainSlider = new Swiper(mainSliderTarget, mainOptions); //.slider__mainとそのオプションをセットする