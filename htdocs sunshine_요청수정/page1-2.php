<?php include "sub-header.php" ?>
<script src="./js/page1-2.js"></script>
<h2 class='sub-title' >  
  <span data-title="오시는길">오시는길</span> 
 </h2>
 <section class= 'page1-2 section1'>
  <h3 class="hidden">오시는길 지도</h3>
  
  <dl>
    <dt><i class="fa-solid fa-map-location-dot"></i>오시는길	</dt>
    <dd>부산광역시 해운대구 좌동 113-111</dd>

    <dt><i class="fa-solid fa-phone"></i>	전화번호</dt>
    <dd>070-0000-0000</dd>

    <dt><i class="fa-solid fa-fax"></i>팩스번호	</dt>
    <dd>02-0000-0000</dd>
    
  </dl>

  <div class="tab-menu">
  <button data-n="1" class="active">google map</button>
  <button data-n="2">kakao map</button>
</div>

 <iframe class="map map1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.5893961074003!2d126.72196291530958!3d37.49401477981159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7ddac1ccf1bf%3A0x542e956b2ac2c967!2z66y47ZmU7J2Y6rGw66as!5e0!3m2!1sko!2skr!4v1658202068810!5m2!1sko!2skr"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  <a class="map map2" style="display:none" href="https://map.kakao.com/?urlX=439042&urlY=1109728&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false" target="_blank"><img  width="1000" height="1000" src="https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=2.5&MX=439042&MY=1109728&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo" style="border:1px solid #ccc"></a><div class="hide" style="overflow:hidden;padding:7px 11px;border:1px solid #dfdfdf;border-color:rgba(0,0,0,.1);border-radius:0 0 2px 2px;background-color:#f9f9f9;width:482px;"><strong style="float: left;"><img src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png" alt="카카오맵"></strong><div style="float: right;position:relative"><a style="font-size:12px;text-decoration:none;float:left;height:15px;padding-top:1px;line-height:15px;color:#000" target="_blank" href="https://map.kakao.com/?urlX=439042&urlY=1109728&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false">지도 크게 보기</a></div></div>

</section>
<?php include "sub-footer.php" ?>