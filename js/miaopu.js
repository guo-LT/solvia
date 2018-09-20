
 
    $(function () { 
      $(".dropdown-trigger").dropdown();
       
         $.get('http://cirray.com:8081/miaopu/huozhiwu/'  ,function (data) {
        console.log(data);
        data.forEach(function (item, index) {
            $('.collection').append('<li class="collection-item avatar"><span class="NO"><b>' + item["NO"] + '</b></span><span class="title">' + item["chinese"] + '</span><span class="collector right">' + item["collector"] + '</span><div class="item"><span>' + item["date"] + '</span><span>' + item["additional"] + '</span><span class="right">总数：' + item["total"] + '</span></div></li>');
        });
        });
       
     
      $("#2").click(function () {
        $('.collection').empty();
        $.get('http://cirray.com:8081/miaopu/zhongzi/'  ,function (data) {
       console.log(data);
       data.forEach(function (item, index) {
         $('.collection').append('<li class="collection-item avatar"><span class="NO">' + item["NO"] + '</span><span>种子数：' + item["total"] + '</span><span class="title right"><b>' + item["chinese"] + '</b></span><div class="item"><div class="item"><span>' + item["date"] + '</span><span class="collector right">' + item["collector"] + '</span></div></li>');
       });
       });
      
     });
     $("#3").click(function () {
        $('.collection').empty();
        $.get('http://cirray.com:8081/miaopu/huangqinshu/'  ,function (data) {
       console.log(data);
       data.forEach(function (item, index) {
         $('.collection').append('<li class="collection-item avatar "><span class="NO">' + item["NO"] + '</span><span class"family"><b>' + item["family"]+item["genus"] + '</b></span><span class="name right">' + item["species"] + '</span><div class="item"><span>' + item["date"] + '</span><span>活体数：' + item["number"] + '</span><span class="collector right">' + item["collector"] + '</span></div></li>');
       });
       });
      
     });
     $("#1").click(function () {
        $('.collection').empty();
         $.get('http://cirray.com:8081/miaopu/huozhiwu/'  ,function (data) {
        console.log(data);
        data.forEach(function (item, index) {
            $('.collection').append('<li class="collection-item avatar"><span class="NO"><b>' + item["NO"] + '</b></span><span class="title">' + item["chinese"] + '</span><span class="collector right">' + item["collector"] + '</span><div class="item"><span>' + item["date"] + '</span><span>' + item["additional"] + '</span><span class="right">总数：' + item["total"] + '</span></div></li>');
        });
        });
       
      })
    })