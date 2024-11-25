import { Route } from "react-router-dom";
import Login from "./Login";
import Join from "./Join";

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
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/join" element={<Join/>}/>
        </Routes>
    </div>);
};

export default IndexMenu;