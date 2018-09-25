$(function () { 
    $(".dropdown-trigger").dropdown();
$.get('http://cirray.com:8081/miaopu/zhongzi/'  ,function (data) {
    console.log(data);
    $('.collection').append('<li class="collection-item avata row"><span class="col s2">采集号</span><span class="col s2">中文名</span><span class="col s3">采集人</span><span class="col s2">采集时间</span><span class="col s2">种子数</span></li>');
     data.forEach(function (item, index) {
       
               $('.collection').append('<li class="collection-item avata body row"><span class="col s2">'+item["NO"]+'</span><span class="col s2">'+item["chinese"]+'</span><span class="col s3">'+item["collector"]+'</span><span class="col s2">'+item["date"]+'</span><span class="col s2">'+item["total"]+'</span></li>');
                      })
                     })
                    })