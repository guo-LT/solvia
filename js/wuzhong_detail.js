$(function(){

    const selectedNo = localStorage.getItem('selectedwuzhong');
      $.get('http://cirray.com:8081/species/NO/'+selectedNo, function(data){
        console.log(data);
          
          $(".collection-header").html('<h5>'+data["chinese"]+'</h5><span>'+data["NO"]+'</span>');
          $(".item1").html('<span>'+data["collector"]+'</span><span>'+data["habitat"]+'</span><span>'+data["frequency"]+'</span>');
          $(".item2").html('<span>'+data["country"]+'</span><span>'+data["prov"]+'</span><span>'+data["city"]+'</span>');
           
          const bk_dir = "http://cirray.ga:8021/static/1. 物种_dup/";
          const ori_dir = "http://cirray.ga:8021/static/1. 物种/";
          // const testurl = "http://cirray.ga:8021/static/1.%20物种_dup/01康定鼠尾草/S0631/DSC_5288.jpg";
        console.log(bk_dir);
         console.log(data["image"]);
          if(data["image"]!==null){
          const imgs = data["image"].split(";");
        
          imgs.forEach(function(item,index){
              
              $(".resources").append('<div class="col s3"><div class="card"><div class="card-image"><img src='+encodeURI(bk_dir+item)+'></div><div class="card-action"><a target="_blank" href='+encodeURI(ori_dir+item)+'>查看原图</a></div></div></div>');
          console.log(bk_dir+item); 
        });
          
        }
      });

          
      })
    