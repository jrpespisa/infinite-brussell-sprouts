var pageNum = 1;
$(window).scroll(function(){
  if($(window).scrollTop() + $(window).height() == $(document).height()){
    event.preventDefault();
    pageNum += 1;

    var request = $.ajax({
      method: "GET",
      url: "/tweets.json?page=" + pageNum
    });

    request.done(function(data) {
        for(var i=0;i<data.length;i++){
        $(".tweets").append("<li class='tweet'><div class='body'>"+data[i]["text"]+'</div><div class="user">'+data[i]["username"]+'</div></li>');
        }
    });
  };
});
