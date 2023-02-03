# react-Router ver6 학습 code입니다
새롭게 변경된 router 버전 6은 5버전과 다른 점이 많이 생겼습니다.
참고 자료 : https://reactrouter.com/en/main
# 새롭게 변경된 만큼 기존 switch는 삭제되었고, 더 간단하게 children을 하여 속성을 넘겨주고 받고 하기가 편해졌습니다.
기존 BrowserRouter의 방식

#기존 방식 code 
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
