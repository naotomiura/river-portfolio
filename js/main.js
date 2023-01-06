// ハンバーガーメニュー

$(function(){
    /*=================================================
    ハンバーガ―メニュー
    ===================================================*/
    // ハンバーガーメニューをクリックした時
    $('.hamburger').on('click', function() {
      // ハンバーガーメニューの共通処理を呼び出す
      hamburger();
    });
    // メニューのリンクをクリックした時
    $('#navi a').on('click', function() {
      // ハンバーガーメニューの共通処理を呼び出す
      hamburger();
    });
  
    /*=================================================
    Inview（画面に表示されたタイミングで処理を実行）
    ===================================================*/
    // BBBが選ばれる理由（スライド左）
    $('.inview-slide-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView){
        // 要素が表示されたらslide-leftクラスを追加
        $(this).stop().addClass('slide-left');
      }
    });
    // BBBが選ばれる理由（スライド右）
    $('.inview-slide-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView){
        // 要素が表示されたらslide-rightクラスを追加
        $(this).stop().addClass('slide-right');
      }
    });
    // 受講生の声（ふきだし）
    $('.inview-balloon').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView){
        // 要素が表示されたらballoonクラスを追加
        $(this).stop().addClass('balloon');
      }
    });
  });
  
  /*=================================================
  ハンバーガ―メニュー共通処理
  ===================================================*/
  // ハンバーガーメニューをクリックした時とメニュー内のリンクをクリックした時の
  // 処理が同じなので処理を共通化する
  function hamburger() {
    // toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
    // 存在しない場合を追加する処理を自動で行ってくれる
    $('.hamburger').toggleClass('active');
  
    if ($('.hamburger').hasClass('active')) {
      // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
      $('#navi').addClass('active');
    } else {
      // hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
      $('#navi').removeClass('active');
    }
  }

// ページトップリンク

//スクロールした際の動きを関数でまとめる
function PageTopCheck(){
    var winScrollTop = $(this).scrollTop();
    var secondTop =  $("#area-2").offset().top - 150; //#area-2の上から150pxの位置まで来たら
    if(winScrollTop >= secondTop){
    $('.js-scroll').removeClass('scroll-view');//.js-scrollからscroll-viewというクラス名を除去
    $('.js-pagetop').addClass('scroll-view');//.js-pagetopにscroll-viewというクラス名を付与
  } else {//元に戻ったら
    $('.js-scroll').addClass('scroll-view');//.js-scrollからscroll-viewというクラス名を付与
    $('.js-pagetop').removeClass('scroll-view');//.js-pagetopからscroll-viewというクラス名を除去
  }

}

//クリックした際の動き
$('.scroll-top a').click(function () {
  var elmHash = $(this).attr('href'); //hrefの内容を取得
  if (elmHash == "#area-2") {//もし、リンク先のhref の後が#area-2の場合
    var pos = $(elmHash).offset().top;
    $('body,html').animate({scrollTop: pos}, pos); //#area-2にスクロール
  }else{
    $('body,html').animate({scrollTop: 0}, 500); //それ以外はトップへスクロール。数字が大きくなるほどゆっくりスクロール
  }
    return false;//リンク自体の無効化
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopCheck();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PageTopCheck();/* スクロールした際の動きの関数を呼ぶ*/
});


// テキストの動き

function slideAnime(){
	//====左に動くアニメーションここから===
		$('.leftAnime').each(function(){ 
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				//左から右へ表示するクラスを付与
				//テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
				$(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
				$(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
			}else{
				//左から右へ表示するクラスを取り除く
				$(this).removeClass("slideAnimeLeftRight");
				$(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
				
			}
		});
		
	}
	
	// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		slideAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面をスクロールをしたら動かしたい場合の記述

	// 画面が読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function(){
		slideAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

// ヘッダー画像の動き

$(window).scroll(function() {
        var scroll = $(window).scrollTop();//スクロール値を定義
    //header-imgの背景
	$('#header-img').css({
			transform: 'scale('+(100 + scroll/10)/100+')',//スクロール値を代入してscale1から拡大.scroll/10の値を小さくすると拡大値が大きくなる
			top: -(scroll/50)  + "%",//スクロール値を代入してtopの位置をマイナスにずらす
        });
    });


// スライダー

$(function() {
    $('.m_slider').slick({
        dots: true,
        centerMode: true,
        centerMargin: '30px',
        arrows: false,
        variableWidth: true
    });
});
