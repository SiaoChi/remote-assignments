
//when hero-banner was clicked, 'Hello World' will changed to 'Good time'.
$('.banner').on('click', function() {
$('#banner-txt').text('Good time');
})

//when btn was clicked, the hided area will be showed.
$('#btn').on('click', function() {
$('.content-box-container-2').css('display','flex');
});
