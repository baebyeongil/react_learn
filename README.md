jsx 문법

1. class 넣을땐 className
   <div className="test"></div>

2. 변수 사용할 땐 { 변수명 }
   let test = test1
   <div className={test}></div>
   <div>{test}</div>
   ...

- 내가 생각하는 왠만한 곳에서 사용 가능

3. style 넣을 땐 style = { { 이름 : "값" }}
   <div style={ {color : "red", fonSize : "16px"}}></div>

- camelCase 사용해야함
