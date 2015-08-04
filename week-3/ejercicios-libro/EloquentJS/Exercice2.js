function withBoxUnlocked(body) {
  // Your code here.
  if(body instanceof Function){
  	box.locked = false;
	body()
    box.locked = true;	
  }else{
    box.locked = true;
    throw new Error("Body may return a true value");
   }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  box.locked = true;
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true