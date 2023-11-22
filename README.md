# react-router-dom 6버전

새롭게 변경된 router 버전 6은 5버전과 다른 점이 많이 생겼습니다.

### 참고 자료 : https://reactrouter.com/en/main

### 새롭게 변경된 만큼 기존 switch는 삭제되었고, 더 간단하게 children을 하여 속성을 넘겨주고 받고 하기가 편해졌습니다.

### BrowserRouter

-   형식으로 기존 5버전에서는 Routes대신 Switch가 사용되었다.
    <br/>
    <img src="https://ifh.cc/g/qonF0l.png" alt="사진">

### createBrowserRouter

-   jsx component를 사용하지 않고 브라우저를 좀 더 선언적으로 바뀌었다.
-   기존 5버전에 사용되었던 App component에서 더이상 <Router>를 render하지 않는다.
-   Router를 생성하던 Router component에서는 더이상 jsx를 사용하지 않는다.
-   기존 5버전과 달리 router를 array형식으로 표현할 수 있게 한다.
-   기존 5버전에는 App을 연결시켜 진행하였지만 RouterProvider를 사용해서 router={router}를 넣어 연결시킨다.
-   부모의 자식들을 render하기 원한다면 부모 component에 가서 outlet를 넣는다.
-   구조참고 : Router.tsx component참고
    <br/>
    <img src="https://user-images.githubusercontent.com/117058112/216618036-b630e2d3-96d8-4f30-b003-292002d16e6e.png" alt="사진">

### Route > errorElement

-   Router.tsx component을 참고하세요.
-   errorElement을 사용해서 404 error를 띄울수 있다.
-   children안에 들어가지 않는다.
-   전체 web이 아니라 작은 component안에서도 errorElement을 사용해서 error를 대처할 수 있다.

### useNavigate

-   유저를 어딘가로 보내는 기능을 한다.
-   유저를 이동시키고 위치를 바꿔준다.
-   기본적으로 이동시키는 건 2가지가 있다.
-   1. Link를 이용해서 유저가 클릭해야 이동이 된다.
-   2. 클릭을 하지 않고 유저를 로그인 시키거나 홈페이지로 이동시키고 싶거나 유저를 페이지에서 삭제시키고 싶다면 그때 useNavigate를 사용하면 된다.
-   기존 버전 5에서는 useLocation이였다.
-   사용법은 const navigate = useNavigate()를 하면 된다.
-   구조 참고 : components > Header component

### useParam

-   고유 user의 번호가 들어갈 경우 해당 경로의 번호를 DB에서 가져와 사용할 수 있게 할 수 있다.
-   구조 참고 : Screens > users > User component

### Outlet

-   Outlet을 포함한 component의 childern이 있다면 outlet을 사용해서 자식들을 render할 수 있다.
-   context항목을 넣어서 내가 넣고 싶은 것을 넣을 수가 있다.
-   구조 참고 : Screens > users > User component

### useOutletContext

-   Outlet을 통해서 childern에게 넘겨준 context를 받아서 바로 사용할 수 있게 한다.
-   만약 darkmode를 사용할 경우 모든 children에게 context를 통해서 전달할 수 있다.
-   구조 참고 : Screens > users > Followers component

### useSearchParams

-   search parameters은 우리가 검색하거나 filter하거나 pagination을 하고 싶을 때 그런 정보들을 url에 넣는다.
-   const [readSearchParams, setReadSearchParams] = useSearchParams();
    readSearchParams : 읽기 위한 용도 / setReadSearchParams : set하기 위한 용도
-   document site : https://reactrouter.com/en/main/hooks/use-search-params
-   구조 참고 : Screens > Home component
