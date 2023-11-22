# react-router-dom 6버전

새롭게 변경된 router 버전 6은 5버전과 다른 점이 많이 생겼습니다.

### 참고 자료 : https://reactrouter.com/en/main

# 새롭게 변경된 만큼 기존 switch는 삭제되었고, 더 간단하게 children을 하여 속성을 넘겨주고 받고 하기가 편해졌습니다.

## 변경 예시

### 기존 BrowserRouter의 방식

<br/>
![image](https://user-images.githubusercontent.com/117058112/216617862-a25f143f-db6d-4ea2-96f4-30b17b64cdbf.png)

### 버전 6 방식 createBrowserRouter code

<br/>
![image](https://user-images.githubusercontent.com/117058112/216618036-b630e2d3-96d8-4f30-b003-292002d16e6e.png)

## 버전 6 새로운 부분

### BrowserRouter
-   형식으로 기존 5버전에서는 Routes대신 Switch가 사용되었다.

### createBrowserRouter

-   jsx component를 사용하지 않고 브라우저를 좀 더 선언적으로 바뀌었다.
-   기존 5버전에 사용되었던 App component에서 더이상 <Router>를 render하지 않는다.
-   Router를 생성하던 Router component에서는 더이상 jsx를 사용하지 않는다.
-   기존 5버전과 달리 router를 array형식으로 표현할 수 있게 한다.
-   기존 5버전에는 App을 연결시켜 진행하였지만 RouterProvider를 사용해서 router={router}를 넣어 연결시킨다.
-   부모의 자식들을 render하기 원한다면 부모 component에 가서 outlet를 넣는다.
-   구조
    const router = createBrowserRouter([
    <br/>
    {
    <br/>
    path: '/', (부모)
    <br/>
    element:<Root />
    <br/>
    children:[ (부모 home안에 있는 자식)
    <br/>
    {
    <br/>
    path: "" (아무것도 주지 않을 경우 "/"를 따라 가서 home이 된다.)
    <br/>
    element:<Home />
    <br/>
    },
    <br/>
    {
    <br/>
    path: "about"
    <br/>
    element:<About />
    <br/>
    },
    <br/>
    {
    <br/>
    path: "detail"
    <br/>
    element:<Detail />
    <br/>
    }
    <br/>
    ]
    <br/>
    }
    <br/>
    ])
### Route

### Route > errorElement

### useNavigate

### Outlet

### useOutletContext

### useSearchParams

