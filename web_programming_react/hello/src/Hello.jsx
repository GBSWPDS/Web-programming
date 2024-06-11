const Hello = (props) => {
  return (
    <div>
      <h1>안녕하세요 {props.name} 입니다</h1>
      <h1>제 나이는 {props.age}세 입니다</h1>
    </div>
  );
};
export default Hello;
