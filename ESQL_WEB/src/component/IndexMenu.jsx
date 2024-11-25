const IndexMenu=()=>{
    const nav = useNavigate();
    const onClickLogin=()=>{
        nav("/login");
    }
    const onClickJoin=()=>{
        nav("/join");
    }
    return (<div>
        <button onClick={onClickLogin}>로그인</button>
        <button onClick={onClickJoin}>회원가입</button>
    </div>);
};

export default IndexMenu;