function t509_setHeight(recid){var t509__el=$("#rec"+recid);var t509__image=t509__el.find(".t509__blockimg");t509__image.each(function(){var t509__width=$(this).attr("data-image-width");var t509__height=$(this).attr("data-image-height");var t509__ratio=t509__height/t509__width;var t509__padding=t509__ratio*100;$(this).css("padding-bottom",t509__padding+"%")});if($(window).width()>960){var t509__textwr=t509__el.find(".t509__textwrapper");var t509__deskimg=t509__el.find(".t509__desktopimg");t509__textwr.each(function(){$(this).css("height",t509__deskimg.innerHeight())})}}
function t718_onSuccess(t718_form){var t718_inputsWrapper=t718_form.find('.t-form__inputsbox');var t718_inputsHeight=t718_inputsWrapper.height();var t718_inputsOffset=t718_inputsWrapper.offset().top;var t718_inputsBottom=t718_inputsHeight+t718_inputsOffset;var t718_targetOffset=t718_form.find('.t-form__successbox').offset().top;if($(window).width()>960){var t718_target=t718_targetOffset-200}else{var t718_target=t718_targetOffset-100}
if(t718_targetOffset>$(window).scrollTop()||($(document).height()-t718_inputsBottom)<($(window).height()-100)){t718_inputsWrapper.addClass('t718__inputsbox_hidden');setTimeout(function(){if($(window).height()>$('.t-body').height()){$('.t-tildalabel').animate({opacity:0},50)}},300)}else{$('html, body').animate({scrollTop:t718_target},400);setTimeout(function(){t718_inputsWrapper.addClass('t718__inputsbox_hidden')},400)}
var successurl=t718_form.data('success-url');if(successurl&&successurl.length>0){setTimeout(function(){window.location.href=successurl},500)}}