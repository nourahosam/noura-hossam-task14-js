$(document).on('click','.jq-click', function(e){
    console.log(e.currentTarget.childNodes[3].childNodes[1].childNodes[1]);
    $('.modal-image').children().attr("src",e.currentTarget.childNodes[1].childNodes[1].src);
    $('.modal-text').children()[0].textContent = e.currentTarget.childNodes[3].childNodes[1].childNodes[1].textContent;
    $('.modal-text').children()[1].textContent = e.currentTarget.childNodes[3].childNodes[3].childNodes[1].textContent;
    $('.modal-text').children()[2].textContent = e.currentTarget.childNodes[3].childNodes[3].childNodes[1].textContent;
    
    console.log(e.currentTarget.childNodes[3].childNodes[3].childNodes[1].textContent)
    $('.my-modal').removeClass('d-none');
})

$(document).on('click', '.modal_close', function(e){
    // console.log('here');
    $('.my-modal').addClass('d-none');
})