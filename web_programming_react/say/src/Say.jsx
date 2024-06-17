import React from "react";

const Say = ({ setMessage }) => {
    return (
        <div>
            <button onClick={() => setMessage("안녕하세요")}>입장</button>
            <button onClick={() => setMessage("안녕히가세요")}>퇴장</button>
        </div>
    );
}
export default Say