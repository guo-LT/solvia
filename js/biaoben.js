$(function () {
  $(".dropdown-trigger").dropdown();

  let page =1;
   $.get('http://cirray.com:8081/specimen/page/' + page, function (data) {
     console.log(data);
     data.forEach(function (item, index) {
       if(item["image"]!==null&&item["directiory"]!==null){
       const bk_dir = "http://cloud.cirray.com/biaoben_bk/"+item["directory"];
 //    console.log(bk_dir);
       var imgs=item["image"].split(";");
           $('.collection').append('<li class="collection-item avatar"><img src="'+encodeURI(bk_dir+imgs[0])+'" alt class="circle"><span class="title"><b>' + item["localname"] + '</b></span><span class="NO">' + item["NO"] + '</span><span class="collector">' + item["collector"] + '</span><div><span>' + item["country"] + '</span><span>' + item["prov"] + '</span><span>' + item["co"] + '</span></div><a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>');
       }else{
         $('.collection').append('<li class="collection-item avatar"></div><span class="title"><b>' + item["localname"] + '</b></span><span class="NO">' + item["NO"] + '</span><span class="collector">' + item["collector"] + '</span><div><span>' + item["country"] + '</span><span>' + item["prov"] + '</span><span>' + item["co"] + '</span></div><a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>');
       }
     });
     $(".collection li").click(function () {
       let mytext = $(this).find("span.NO").text();
       console.log(mytext);
       window.location.href = "biaoben_detail.html";
       localStorage.setItem('selectedbiaoben', mytext);
     })
    
  });
  
 
 $("#btn").click(function () {
     page += 1;
     console.log(page);
      $.get('http://cirray.com:8081/specimen/page/' + page, function (data) {
     console.log(data);
     data.forEach(function (item, index) {
       if(item["image"]!==null&&item["directiory"]!==null){
       const bk_dir = "http://cloud.cirray.com/biaoben_bk/"+item["directory"];
 //    console.log(bk_dir);
       var imgs=item["image"].split(";");
           $('.collection').append('<li class="collection-item avatar"><img src="'+encodeURI(bk_dir+imgs[0])+'" alt class="circle"><span class="title"><b>' + item["localname"] + '</b></span><span class="NO">' + item["NO"] + '</span><span class="collector">' + item["collector"] + '</span><div><span>' + item["country"] + '</span><span>' + item["prov"] + '</span><span>' + item["co"] + '</span></div><a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>');
       }else{
         $('.collection').append('<li class="collection-item avatar"></div><span class="title"><b>' + item["localname"] + '</b></span><span class="NO">' + item["NO"] + '</span><span class="collector">' + item["collector"] + '</span><div><span>' + item["country"] + '</span><span>' + item["prov"] + '</span><span>' + item["co"] + '</span></div><a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>');
       }
     });
     $(".collection li").click(function () {
       let mytext = $(this).find("span.NO").text();
       console.log(mytext);
       window.location.href = "biaoben_detail.html";
       localStorage.setItem('selectedbiaoben', mytext);
     })
  })
      });
 //  $.get('http://cirray.com:8081/specimen/page/' + page, function (data) {
 //      console.log(data);
 //  const bk_dir = "http://cloud.cirray.com/biaoben_bk/"+data["directory"];
 // data.forEach(function (item, index) {
 //   if(item["image"]!==null&&item["directiory"]!==null){
 //    const bk_dir = "http://cloud.cirray.com/biaoben_bk/"+item["directory"];
 //    console.log(bk_dir);
 //    var imgs=item["image"].split(";");
 //        $('.collection').append('<li class="collection-item avatar"><img src="'+encodeURI(bk_dir+imgs[0])+'" alt class="circle"><span class="title"><b>' + item["localname"] + '</b></span><span class="NO">' + item["NO"] + '</span><span class="collector">' + item["collector"] + '</span><div><span>' + item["country"] + '</span><span>' + item["prov"] + '</span><span>' + item["co"] + '</span></div><a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>');
 //    }else{
 //      $('.collection').append('<li class="collection-item avatar"></div><span class="title"><b>' + item["localname"] + '</b></span><span class="NO">' + item["NO"] + '</span><span class="collector">' + item["collector"] + '</span><div><span>' + item["country"] + '</span><span>' + item["prov"] + '</span><span>' + item["co"] + '</span></div><a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>');
 //    }
 //  });
 //  $(".collection li").click(function () {
 //    let mytext = $(this).find("span.NO").text();
 //    console.log(mytext);
 //    window.location.href = "biaoben_detail.html";
 //    localStorage.setItem('selectedbiaoben', mytext);
 //  })
 // })
 // 
 //}); 
 //
  $('#search').keypress(function (event) {
       if (event.which == 13) {
         event.preventDefault();
   
         var criteria = $('#search').val();
         console.log(criteria);
   
         $('.collection').empty();
         $('#btn').remove();
         $.get('http://cirray.com:8081/specimen/text/' + criteria, function (data) {
           console.log(data);
           data.forEach(function (item, index) {
               if(item["image"]!==null&&item["directiory"]!==null){
       const bk_dir = "http://cloud.cirray.com/biaoben_bk/"+item["directory"];
 //    console.log(bk_dir);
       var imgs=item["image"].split(";");
           $('.collection').append('<li class="collection-item avatar"><img src="'+encodeURI(bk_dir+imgs[0])+'" alt class="circle"><span class="title"><b>' + item["localname"] + '</b></span><span class="NO">' + item["NO"] + '</span><span class="collector">' + item["collector"] + '</span><div><span>' + item["country"] + '</span><span>' + item["prov"] + '</span><span>' + item["co"] + '</span></div><a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>');
       }else{
         $('.collection').append('<li class="collection-item avatar"></div><span class="title"><b>' + item["localname"] + '</b></span><span class="NO">' + item["NO"] + '</span><span class="collector">' + item["collector"] + '</span><div><span>' + item["country"] + '</span><span>' + item["prov"] + '</span><span>' + item["co"] + '</span></div><a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>');
       }
     });
   
           $(".collection li").click(function () {
             let mytext = $(this).find("span.NO").text();
             console.log(mytext);
             window.location.href = "wuzhong_detail.html";
             window.history.go(-1);
             localStorage.setItem('selectbiaoben', mytext);
           });
         });
       }
     })
  })
 
