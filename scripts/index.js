 $('svg path').hover(function(){
 var id = $(this).attr('id');
 $('#t-'+id).css('color','#2AF598');
},function(){
  $('p').css('color','#000');
});

$('p').hover(function(){
 var id = $(this).attr('id');
  var pathId = id.slice(2);
  console.log(pathId);
 $('#'+pathId).css('fill','#024C68');
},function(){ 
  $('p').css('color','#024C68');
  $('p').css('cursor','pointer');
  Grad();
});

var regions=[
  {
  //1
  "region_code": "path3764",
  "region_name": "Пермский край",
  "population": 2623122,
  "area": 160236,
  "image": '<img src="perm.jpg">'
  },
   {
  //2
  "region_code": "path3752",
  "region_name": "Кировская область",
  "population": 1304348,
  "area": 120800,
  "image": '<img src="kirov.jpg">'
  },
   {
  //3
  "region_code": "path3736",
  "region_name": "Нижегородская область",
  "population": 3234752,
  "area": 76900,
  "image": '<img src="ngor.jpg">' 
  },
    {
  //4
  "region_code": "path3754",
  "region_name": "Пензенская область",
  "population": 	1355618,
  "area": 43200,
  "image": '<img src="penz.jpg">'
  },
   {
  //5
  "region_code": "path3772",
  "region_name": "Саратовская область",
  "population": 1876269,
  "area": 100200,
  "image": '<img src="sarat.jpg">'
  },
   {
  //6
  "region_code": "path3768",
  "region_name": "Самарская область",
  "population": 3212676,
  "area": 53600,
  "image": '<img src="samar.jpg">'
  },
   {
  //7
  "region_code": "path3788",
  "region_name": "Оренбургская область",
  "population": 2001110,
  "area": 124000,
  "image": '<img src="oren.jpg">'
  },
  //7
  {
  "region_code": "path3780",
  "region_name": "Оренбургская область",
  "population": 2001110,
  "area": 124000,
  "image": '<img src="oren.jpg">'
  },
   {
  //8
  "region_code": "path3784",
  "region_name": "Республика Башкортостан",
  "population": 4063293,
  "area": 143600,
  "image": '<img src="bash.jpg">'
  },
   {
  //9
  "region_code": "path3760",
  "region_name": "Ульяновская область",
  "population": 1246618,
  "area": 37300,
  "image": '<img src="ul.jpg">'
  },
   {
  //10
  "region_code": "path3746",
  "region_name": "Чувашская республика",
  "population": 1231117,
  "area": 18300,
  "image": '<img src="chuv.jpg">'
  },
   {
  //11
  "region_code": "path3740",
  "region_name": "Республика Марий Эл",
  "population": 687435,
  "area": 23200,
  "image": '<img src="maria.jpg">'
  },
   {
  //12
  "region_code": "path3758",
  "region_name": "Удмуртская республика",
  "population": 1517472,
  "area": 42100,
  "image": '<img src="ud.jpg">'
  },
   {
  //13
  "region_code": "path3766",
  "region_name": "Республика Татарстан",
  "population": 3894284,
  "area": 68000,
  "image": '<img src="tat.jpg">' 
  },
  {
  //13
  "region_code": "path3750",
  "region_name": "Республика Татарстан",
  "population": 3894284,
  "area": 68000,
  "image": '<img src="tat.jpg">'  
  },
  {
  //14
  "region_code": "path3742",
  "region_name": "Республика Мордовия",
  "population": 808888,
  "area": 160236,
  "image": '<img src="mord.jpg">'
  }];
    
function Grad() {
  for(i=0; i<regions.length; i++) {
    var hoa = regions[i].population/regions[i].area;
    var rg = parseInt(255-hoa/0.2);
    $('#' + regions[i].region_code).css({"fill":"rgb("+rg+", "+rg+",255)"});
  }
}

window.onload = function() {
  Grad();
}

$(function() {

    for(i = 0; i < regions.length; i++) {
        
        $('#'+ regions[i].region_code)
        .data('region', regions[i]);
    }

    $('path').mouseover(function (e) {
      
        var region_data=$(this).data('region');
        $('<div class="info_panel">'+
            region_data.region_name + '<br>' +
            'Плотность населения: ' + (region_data.population/region_data.area).toLocaleString("en-UK") +
          	'</div>'
         )
        .appendTo('body');
    })
    .mouseleave(function () {
        $('.info_panel').remove();
    })
    .mousemove(function(e) {
        var mouseX = e.pageX, //X coordinates of mouse
            mouseY = e.pageY; //Y coordinates of mouse

        $('.info_panel').css({
            top: mouseY-50,
            left: mouseX - ($('.info_panel').width()/2)
        });
    });

});


$(function() {

    for(i = 0; i < regions.length; i++) {
        
        $('#'+ regions[i].region_code)
        .data('region', regions[i]);
    }
$('path').mouseover(function (e) {
        var region_data=$(this).data('region');
        $('<div class="block-info">'+
            region_data.region_name + '<br>' + '<br>'+
            'Плотность населения: ' + (region_data.population/region_data.area).toLocaleString("en-UK") +'<br>'+
          "Население: "+
          region_data.population+' человек'+"<br>"+
          "Площадь: "+
          region_data.area+' км^2'+"<br>"+
          region_data.image+"<br>"+
            '</div>'
         )
        .appendTo('.container');
    })
    .mouseleave(function () {
        $('.block-info').remove();
    })
  .mousemove(function(e) {
        var mouseX = e.pageX, //X coordinates of mouse
            mouseY = e.pageY; //Y coordinates of mous
    });

});

function img(){
  document.querySelector('.block-info').innerHTML = '<img src="img.jpg" alt="" />';
};
