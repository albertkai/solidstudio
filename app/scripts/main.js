console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

$(function(){
  $('.min-pic').find('>div').on('click', function(e){
    var link = $(e.currentTarget).data('href') + '.html';
    window.location.href = link;
  });
  $('.offscreen-menu').find('button').on('click', function(e){
    $('.offscreen-menu').removeClass('_opened');
  });
  $('.open-menu').on('click', function(){
    $('.offscreen-menu').addClass('_opened');
  })
});
