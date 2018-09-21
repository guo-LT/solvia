
 
    $(function () { 
      $(".dropdown-trigger").dropdown();
       
         $.get('http://cirray.com:8081/miaopu/huozhiwu/'  ,function (data) {
        console.log(data);
        $('.collection').append('<li class="collection-item avata row" id="title"><span class="col s2">NO</span><span class="col s2">name</span><span class="col s2">collector</span><span class="col s2">date</span><span class="col s2">remark</span><span class="col s2">total</span></li>');
        data.forEach(function (item, index) {
          
                  $('.collection').append('<li class="collection-item avata body row"><span class="col s2">'+item["NO"]+'</span><span class="col s2">'+item["chinese"]+'</span><span class="col s2">'+item["collector"]+'</span><span class="col s2">'+item["date"]+'</span><span class="col s2">'+item["additional"]+'</span><span class="col s2" id="data">'+item["total"]+'</span></li>');
                         })
                        })
      
       
     
      $("#2").click(function () {
        $('.collection').empty();
        $.get('http://cirray.com:8081/miaopu/zhongzi/'  ,function (data) {
       console.log(data);
       $('.collection').append('<li class="collection-item avata row"><span class="col s2">NO</span><span class="col s2">name</span><span class="col s3">collector</span><span class="col s2">date</span><span class="col s2">total</span></li>');
        data.forEach(function (item, index) {
          
                  $('.collection').append('<li class="collection-item avata body row"><span class="col s2">'+item["NO"]+'</span><span class="col s2">'+item["chinese"]+'</span><span class="col s3">'+item["collector"]+'</span><span class="col s2">'+item["date"]+'</span><span class="col s2">'+item["total"]+'</span></li>');
                         })
                        })
      
     
     $("#3").click(function () {
        $('.collection').empty();
        $.get('http://cirray.com:8081/miaopu/huangqinshu/'  ,function (data) {
       console.log(data);
       $('.collection').append('<li class="collection-item avata row"><span class="col s2">NO</span><span class="col s2">name</span><span class="col s2">collector</span><span class="col s2">date</span><span class="col s2">family</span><span class="col s2">number</span></li>');
       data.forEach(function (item, index) {
         
                 $('.collection').append('<li class="collection-item avata body row"><span class="col s2">'+item["NO"]+'</span><span class="col s2">'+item["species"]+'</span><span class="col s2">'+item["collector"]+'</span><span class="col s2">'+item["date"]+'</span><span class="col s2">'+item["family"]+'</span><span class="col s2">'+item["number"]+'</span></li>');
                        })
                       })
      
     });
     $("#1").click(function () {
        $('.collection').empty();
         $.get('http://cirray.com:8081/miaopu/huozhiwu/'  ,function (data) {
        console.log(data);
        $('.collection').append('<li class="collection-item avata row" id="title"><span class="col s2">NO</span><span class="col s2">name</span><span class="col s2">collector</span><span class="col s2">date</span><span class="col s2">remark</span><span class="col s2">number</span></li>');
        data.forEach(function (item, index) {
          
                  $('.collection').append('<li class="collection-item avata body row"><span class="col s2">'+item["NO"]+'</span><span class="col s2">'+item["chinese"]+'</span><span class="col s2">'+item["collector"]+'</span><span class="col s2">'+item["date"]+'</span><span class="col s2">'+item["additional"]+'</span><span class="col s2" id="data">'+item["number"]+'</span>');
                         })
                        })
       
      })
    })
  })
  

