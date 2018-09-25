$(function () {
  $(".dropdown-trigger").dropdown();
   
  let page = 1;
    $.get('http://cirray.com:8081/species/page/' + page, function (data) {
      console.log(data);
      data.forEach(function (item, index) {
      //   if(item['district']!==null&&item['town']!==null){
      // $('.collection').append('<li class="collection-item avatar"><img src="img/P00714700.jpg" alt="" class="circle"><span class="title"><b>' + item["chinese"] + '</b></span><span class="NO">' + item["NO"] + '</span><span class="collector">' + item["collector"] + '</span><div><span>' + item["country"] + '</span><span>' + item["prov"] + '</span><span>' + item["city"] + '</span><span>'+item['district']+item['town']+item['location']+'</span></div><a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>');
      //   }else if(item['district']==null){
      //       $('.collection').append('<li class="collection-item avatar"><img src="img/P00714700.jpg" alt="" class="circle"><span class="title"><b>' + item["chinese"] + '</b></span><span class="NO">' + item["NO"] + '</span><span class="collector">' + item["collector"] + '</span><div><span>' + item["country"] + '</span><span>' + item["prov"] + '</span><span>' + item["city"] + '</span><span>'+item['town']+item['location']+'</span></div><a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>');  
      //   }else if(item['town']==null){
      //       $('.collection').append('<li class="collection-item avatar"><img src="img/P00714700.jpg" alt="" class="circle"><span class="title"><b>' + item["chinese"] + '</b></span><span class="NO">' + item["NO"] + '</span><span class="collector">' + item["collector"] + '</span><div><span>' + item["country"] + '</span><span>' + item["prov"] + '</span><span>' + item["city"] + '</span><span>'+item['district']+item['location']+'</span></div><a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>');   
      //   }
        if(item['image']!==null){
          const bk_dir = "http://cirray.ga:8021/static/1. 物种_dup/";
          const images=item['image'].split(";");
          $('.collection').append('<li class="collection-item avatar"><img src="'+encodeURI(bk_dir+images[0])+'" alt="" class="circle"><span class="title"><b>' + item["chinese"] + '</b></span><span class="NO">' + item["NO"] + '</span><span class="collector">' + item["collector"] + '</span><div><span>' + item["country"] + '</span><span>' + item["prov"] + '</span><span>' + item["city"] + '</span><span>'+item['district']+item['town']+item['location']+'</span></div><a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>');
        }else{
          $('.collection').append('<li class="collection-item avatar"><span class="title"><b>' + item["chinese"] + '</b></span><span class="NO">' + item["NO"] + '</span><span class="collector">' + item["collector"] + '</span><div><span>' + item["country"] + '</span><span>' + item["prov"] + '</span><span>' + item["city"] + '</span><span>'+item['district']+item['location']+'</span></div><a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>');   
        }
        })
  
  
      $(".collection li").click(function () {
        let mytext = $(this).find("span.NO").text();
        console.log(mytext);
        window.location.href = "wuzhong_detail.html";
        localStorage.setItem('selectedwuzhong', mytext);
      });
     
    });
  
    $("#btn").click(function () {
      page += 1;
      $.get('http://cirray.com:8081/species/page/' + page, function (data) {
        console.log(data);
        data.forEach(function (item, index) {
          if(item['image']!==null){
            const bk_dir = "http://cirray.ga:8021/static/1. 物种_dup/";
            const images=item['image'].split(";");
            $('.collection').append('<li class="collection-item avatar"><img src="'+encodeURI(bk_dir+images[0])+'" alt="" class="circle"><span class="title"><b>' + item["chinese"] + '</b></span><span class="NO">' + item["NO"] + '</span><span class="collector">' + item["collector"] + '</span><div><span>' + item["country"] + '</span><span>' + item["prov"] + '</span><span>' + item["city"] + '</span><span>'+item['district']+item['town']+item['location']+'</span></div><a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>');
          }else{
            $('.collection').append('<li class="collection-item avatar"><span class="title"><b>' + item["chinese"] + '</b></span><span class="NO">' + item["NO"] + '</span><span class="collector">' + item["collector"] + '</span><div><span>' + item["country"] + '</span><span>' + item["prov"] + '</span><span>' + item["city"] + '</span><span>'+item['district']+item['location']+'</span></div><a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>');   
          }
          })
   
       
        $(".collection li").click(function () {
          let mytext = $(this).find("span.NO").text();
          console.log(mytext);
          window.location.href = "wuzhong_detail.html";
          window.history.go(-1);
          localStorage.setItem('selectedwuzhong', mytext);
        });
      });
    });
    $('#search').keypress(function (event) {
      if (event.which == 13) {
        event.preventDefault();
  
        var criteria = $('#search').val();
        console.log(criteria);
  
        $('.collection').empty();
        $('#btn').remove();
        $.get('http://cirray.com:8081/species/text/' + criteria, function (data) {
          console.log(data);
          data.forEach(function (item, index) {
            if(item['image']!==null){
              const bk_dir = "http://cirray.ga:8021/static/1. 物种_dup/";
              const images=item['image'].split(";");
              $('.collection').append('<li class="collection-item avatar"><img src="'+encodeURI(bk_dir+images[0])+'" alt="" class="circle"><span class="title"><b>' + item["chinese"] + '</b></span><span class="NO">' + item["NO"] + '</span><span class="collector">' + item["collector"] + '</span><div><span>' + item["country"] + '</span><span>' + item["prov"] + '</span><span>' + item["city"] + '</span><span>'+item['district']+item['town']+item['location']+'</span></div><a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>');
            }else{
              $('.collection').append('<li class="collection-item avatar"><span class="title"><b>' + item["chinese"] + '</b></span><span class="NO">' + item["NO"] + '</span><span class="collector">' + item["collector"] + '</span><div><span>' + item["country"] + '</span><span>' + item["prov"] + '</span><span>' + item["city"] + '</span><span>'+item['district']+item['location']+'</span></div><a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>');   
            }
            });
  
          $(".collection li").click(function () {
            let mytext = $(this).find("span.NO").text();
            console.log(mytext);
            window.location.href = "wuzhong_detail.html";
            window.history.go(-1);
            localStorage.setItem('selectedwuzhong', mytext);
          });
        });
      }
    })
  })