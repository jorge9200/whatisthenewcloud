$( document ).ready(function() {
  
	var web								= $('body');
	var mobileContainer 	= $('.mobile-container');

	$('.first-photo, .second-photo').on( 'click' , function(){
		if (web.hasClass('mobile')) {
			setMobileDescription( $(this) );
		}
	});

	$('.gif, .gif-desc, .gif-subdesc').on( 'click' , function(){
		mobileContainer.removeClass('mobile-description')
	});

	var getMobileOperatingSystem = function() {
    
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone mobile";
    }

    if (/android/i.test(userAgent)) {
      return "android mobile";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS mobile";
    }

    return "desktop";
  }

	var translate = function(){

		// MOBILE
		if( web.hasClass('mobile') ){

			$('.what-is .question .title.first').html('What&nbsp;&nbsp;is<br>&nbsp;the');
			$('.what-is .question .title.second').html('new<br>cloud?&nbsp;');
			$('.what-is .first-answer .text').html('The new Cloud is all about<br>working <b>online</b> with all<br>your programs and files<br>instead of <b>syncing</b> your<br>files across all your devices.');
			$('.what-is .second-answer .text').html('You can work and<br>collaborate directly<br>online without having<br>to download, install, sync<br>or configure anything.');
			$('.the-cloud .third-answer .text').html('The new Cloud finally<br>makes "the Cloud" easy,<br>simple and convenient for<br>the rest of us.');
			$('.comparative .old').html('Old<br>cloud');
			$('.comparative .new').html('New<br>cloud');			

		// DESKTOP
		}else{

			$('.what-is .question .title.first').html('What&nbsp;&nbsp;is&nbsp;&nbsp;the');
			$('.what-is .question .title.second').html('new&nbsp;&nbsp;cloud?');
			$('.what-is .first-answer .text').html('The new Cloud is all about working<br>&nbsp;&nbsp;&nbsp;<b>online</b> with all your programs and<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;files instead of <b>syncing</b> your files<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;across all your devices.');
			$('.what-is .second-answer .text').html('You can work and collaborate<br>directly online without having to<br>download, install, sync or<br>configure anything.');
			$('.the-cloud .third-answer .text').html('The new Cloud finally makes "the Cloud"<br>easy, simple and convenient<br>for the rest of us.');
			$('.comparative .old').html('Old cloud');
			$('.comparative .new').html('New cloud');	

		}
		$('.syncing .title').text('Syncing');
		$('.conflicted .title').text('Conflicted copies');
		$('.indexing .title').text('Indexing');
		$('.tabs .title').text('Ocean of tabs');
		$('.storage .title').text('Storage');

		$('.not-convinced-container .not-convinced').text('Not convinced yet?');
		$('.not-convinced-container .try-it').text('Try it for yourself');

		$('.main-claim-link.desktop .demo-button-text').text('Try the demo');
		$('.main-claim-link.iOS .demo-button-text').text('Download IOS app');
		$('.main-claim-link.android .demo-button-text').text('Download Android app');
		$('.not-convinced-container .demo-subtitle').text('(No data required)');

		$('.syncing .desc').text('Syncing');
		$('.syncing .first-photo .subdesc').text('Files duplicated on every device. Device storage problems. Device dependency. Where do I have my files? I don´t know which files are on the device and which ones on the Cloud...');
		$('.syncing .second-photo .subdesc').text('Don´t sync, just work directly online. It´s faster, easier and the most important of all, it´s collaborative.');

		$('.conflicted .desc').text('Conflicted copies');
		$('.conflicted .first-photo .subdesc').text('As you have all files duplicated in different devices, it´s very often to face problems like conflicted copies, which completely ruin them.');
		$('.conflicted .second-photo .subdesc').text('With the new Cloud you don´t need to worry about conflicted copies. Your files are safe. You don´t need to have them duplicated on every device.');

		$('.indexing .desc').text('Indexing');
		$('.indexing .first-photo .subdesc').text('The old Cloud is not made to work with it. If you make intensive use of these solutions, it is very common to see how much they crush when trying to index thousands of files');
		$('.indexing .second-photo .subdesc').text('The new Cloud is designed to work fast using web technologies. Sometimes, it´s even faster than your actual computer!');

		$('.tabs .desc').text('Ocean of tabs');
		$('.tabs .first-photo .subdesc').text('The old Cloud does not support multitask. When you try to open two files, they open in different tabs, making the whole experience very poor.');
		$('.tabs .second-photo .subdesc').text('The new Cloud has been conceived for multitasking. Introducing a gamechanger concept (windows in the Cloud!), you will be able to work at the same time with different files, as you collaborate with your colleagues');

		$('.storage .desc').text('Storage');
		$('.storage .first-photo .subdesc').text('The old Cloud gives you very little storage for free, in order to charge you a fee for a excessive amount of space you will never use.');
		$('.storage .second-photo .subdesc').text('The new Cloud gives you a very reasonable amount of free storage to start working online. If you need more, you just pay as you go. You will never pay for storage you don´t use. Clever, isn´t it?');
	}

	var setMobileDescription = function( photo ){
		mobileContainer.addClass('mobile-description');
		mobileContainer.find('.gif').css( 'background-image' , photo.css('background-image') );
		mobileContainer.find('.gif-desc').text( photo.find('.desc').text() );
		mobileContainer.find('.gif-subdesc').text( photo.find('.subdesc').text() );
	}

	var initWeb = function(){
	  web.addClass( getMobileOperatingSystem() );
	  translate();
	}

  initWeb();

});