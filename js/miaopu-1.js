$(function () { 
    $(".dropdown-trigger").dropdown();
     
       $.get('http://cirray.com:8081/miaopu/huozhiwu/'  ,function (data) {
      console.log(data);
      $('.collection').append('<li class="collection-item avata row" id="title"><span class="col s2">采集号</span><span class="col s2">中文名</span><span class="col s2">采集人</span><span class="col s2">采集日期</span><span class="col s2">备注</span><span class="col s2">活体总数</span></li>');
      data.forEach(function (item, index) {
        
                $('.collection').append('<li class="collection-item avata body row"><span class="col s2">'+item["NO"]+'</span><span class="col s2">'+item["chinese"]+'</span><span class="col s2">'+item["collector"]+'</span><span class="col s2">'+item["date"]+'</span><span class="col s2">'+item["additional"]+'</span><span class="col s2" id="data">'+item["total"]+'</span></li>');
                       })
                      })
                    })