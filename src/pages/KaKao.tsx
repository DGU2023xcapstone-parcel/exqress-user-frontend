const Kakao = () => {
  // 발급된 인가코드를 백엔드로 넘겨주기 위해 꺼내오는 작업이 필요하다.
  // code라는 이름으로 파라미터 코드 값을 꺼내오려면 아래와 같이 선언하면 된다.
  const code = new URL(window.location.href).searchParams.get("code");

  //   React.useEffect(() => {
  // 	// 꺼내온 code(인가코드)를 미들웨어를 통해 백엔드로 넘겨준다.
  //     dispatch(userAction.kakaoLoginAC(code));
  //   }, []);
  return (
    <div>
      oauth 중...
      <div>{code}</div>
    </div>
  );
};

export default Kakao;
