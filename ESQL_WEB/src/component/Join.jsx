const { useState } = require("react")

const Join =()=>{
    const [id, setId]=useState();
    const [pw, setPw]=useState();
    const [name,setName]=useState();
    const [role, setRole]=useState();
    return (
        <div>
            <div>
                <div>
                    ID:
                </div>
                <input />
            </div>
            <div>
                <div>
                    PW:
                </div>
                <input/>
            </div>
            <div>
                <div>
                    이름:
                </div>
                <input />
            </div>
            <div>
                <div>
                    직급:
                </div>
                <div>
                    <input type="radio" value="manager"/>점장
                    <input type="radio" value="employee"/>직원
                </div>
            </div>
        </div>
    )
}

export default Join;