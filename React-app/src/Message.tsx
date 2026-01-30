let count = 0;
function Message(){
    console.log("Message called", count);
    count++;
    return <h1>Hello World {count}</h1>;
}

export default Message;