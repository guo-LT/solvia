$(function(){
   $(".dropdown-trigger").dropdown();

    // console.log(localStorage.getItem('selectedbiaoben'));
      const selectedNO = localStorage.getItem('selectedbiaoben');
     
      
      $.get('http://cirray.com:8081/specimen/NO/'+selectedNO, function(data){
          console.log(data);
          
          $(".collection-header").html('<h5>'+data["localname"]+'</h5><span>'+data["NO"]+'</span>');
          $(".item1").html('<span>'+data["collector"]+'</span><span>'+data["family"]+'</span><span>'+data["habitat"]+'</span><span>'+data["frequency"]+'</span>');
          $(".item2").html('<span>'+data["country"]+'</span><span>'+data["prov"]+'</span><span>'+data["co"]+'</span>');
  
          const bk_dir = "http://cloud.cirray.com/biaoben_bk/"+data["directory"];
          const ori_dir = "http://cloud.cirray.com/biaoben/"+data["directory"];
          const testurl = "http://cloud.cirray.com/biaoben_bk/E00317530.jpg"; 
          console.log(bk_dir);
          console.log(data["image"]);
          console.log(data["image"]);
          if(data["image"]!==null){
          const imgs = data["image"].split(";");
         
          imgs.forEach(function(item,index){
              console.log(item);
              $(".resources").append('<div class="col s3"><div class="card"><div class="card-image"><img src='+encodeURI(bk_dir+item)+'></div><div class="card-action"><a target="_blank" href='+encodeURI(ori_dir+item)+'>查看原图</a></div></div></div>');
          });
        }
      });
    })
    