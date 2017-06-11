header//메인 페이지의 head 부분입니다.
top//메인 페이지의 top부분입니다.
body - bodyprofile//메인페이지에 보일 body 부분과 about me를 클릭했을 때 프로필을 보여주기 위한 bodyprofile이 있습니다
footer//맨 아래 ict project를 나타내는데 쓰입니다.
(위에서 아래로 홈페이지 상에 구현됩니다.)

main은 메인 페이지입니다.
prifile은 프로필 페이지입니다.
bye는 페이지 하단에 다음(daum)페이지와 연결되는 부분입니다.

daumapi : html 부분을 기능을 구분하기 쉽게 분할한 부분입니다.
//키워드로 검색을 하면 지도 상에 위치를 표현하면서 장소에 대한 정보를 보여줍니다.
-header_api : html head에 들어가는 것입니다. 키워드로 장소검색하고 목록으로 나타내는 기능이 포함됩니다.
-searchmap_api : 검색을 하는 기능이 들어있습니다.
-function_api: 검색된 것을 토대로 지도 상에 마커를 해줍니다. 어느 위치에 검색된 장소가 있는 지 알 수 있습니다.

daum_map_api : html 부분을 기능을 구분하기 쉽게 분할한 부분입니다
//지도의 현재 좌표를 보여주는 역할을 합니다.
-daum_map_header : html head에 들어가는 것입니다. daum_map_api의 주제를 나타냅니다.
-daum_map_info : 지도 정보를 보기 위한 버튼 설정이 들어가있습니다.
-daum_map_position : 위치 정보를 받아오는 기능의 구체적인 구현이 들어가있습니다.


