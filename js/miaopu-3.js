$(function () { 
    $(".dropdown-trigger").dropdown();
$.get('http://cirray.com:8081/miaopu/huangqinshu/'  ,function (data) {
       console.log(data);
       $('.collection').append('<li class="collection-item avata row"><span class="col s2">采集号</span><span class="col s2">种（中文名）</span><span class="col s2">采集人</span><span class="col s2">采集时间</span><span class="col s2">科名</span><span class="col s2">活体数</span></li>');
       data.forEach(function (item, index) {
         
                 $('.collection').append('<li class="collection-item avata body row"><span class="col s2">'+item["NO"]+'</span><span class="col s2">'+item["species"]+'</span><span class="col s2">'+item["collector"]+'</span><span class="col s2">'+item["date"]+'</span><span class="col s2">'+item["family"]+'</span><span class="col s2">'+item["number"]+'</span></li>');
                        })
                       })
                    })