$(function () { 
$.get('http://cirray.com:8081/distribution/lonlat/', function (data) {

  var checkData=data.filter(function(item){
    return item['lon']!==null||item['lat']!==null;
  })
  
  checkData.forEach(function (item, index) {
    console.log(item);
    var Lng = parseFloat(item['lon']);
    var Lat = parseFloat(item['lat']);
    marker = new AMap.Marker({

      offset: new AMap.Pixel(-10, -10),
      position: ([Lng, Lat]),
      icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
 })
    map.add(marker);
   

   
   
    marker.setMap(map);
    marker.setTitle(item['localname']);
    marker.NO = item['NO'];
    marker.on('click', function () {
      console.log(this.NO);
      var name = this.NO;
      window.location.href = "fenbu_detail.html";
      window.history.back(-1);
      localStorage.setItem('selectedfenbu', name);
})
})
 })

 



$.get('http://cirray.com:8081/distribution/lonlat/', function (data) {

  data.forEach(function (item, index) {
    $('#panel').append('<ul class="collection" name="' + item['lon'] + '" coords="' + item['lat'] + '"><li class="collection-item avatar"   style="padding:0px 0px 0px 0px"><div class="box-title"><span>' + item['localname'] + '' + '</span><span class="NO" style="padding-left:5px">' + item['NO'] + '</span></div><div class="box-localtion"><span>' + item['prov'] + '</span><span>' + item['co'] + '</span></div><a href="#" class="secondary-content" style="top:10px"><i class="material-icons">location_on</i></a></li></ul>');

  })
  $('.collection').click(function () {
    // console.log(1);
    var getLon = parseFloat ($(this).attr('name'));
    var getLat = parseFloat($(this).attr('coords'));
    console.log(getLon, getLat);
    map.panTo([getLon, getLat]);
    map.setZoom(15);

  })
  
  

$('#tipinput').keydown(function (event) {
  if (event.which == 13) {
    
    event.preventDefault();

  var criteria = $('#tipinput').val();
    console.log(criteria);

    $('#panel').empty();

    $.get('http://cirray.com:8081/distribution/text/' + criteria, function (data) {
      console.log(data);
      data.forEach(function (item, index) {
        $('#panel').append('<ul class="collection" name="'  +item['lon'] + '" coords="' + item['lat'] + '" ><li class="collection-item avatar"  style="padding:0px 0px 0px 0px"><div class="box-title"><span>' + item['localname'] + '' + '</span><span class="NO" style="padding-left:5px">' + item['NO'] + '</span></div><div class="box-localtion"><span>' + item['prov'] + '</span><span>' + item['co'] + '</span></div><a href="#" class="secondary-content" style="top:10px"><i class="material-icons">location_on</i></a></li></ul>');
      });
      $('.collection').click(function () {
        // console.log(1);
        var getLon = parseFloat($(this).attr('name'));
        var getLat = parseFloat($(this).attr('coords'));
        console.log(getLon, getLat);
        map.panTo([getLon, getLat]);
        map.setZoom(14);
    
      })
    });
  }
})
marker.on('click', function () {
  console.log(this.NO);
  var name = this.NO;
  window.location.href = "fenbu_detail.html";
  window.history.back(-1);
  localStorage.setItem('selectedfenbu', name);
})
 })
 

})
window.onload=function(){
  $(".dropdown-trigger").dropdown();
}