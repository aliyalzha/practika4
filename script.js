var counter = 0;

function onClickButton(el) {
	counter++;
	el.innerHTML = "Вы нажали на кнопку: " + counter;
	el.style.background ="red";
	el.style.color = "blue";

	el.style.cssText = "border-radius: 10px; border: 0; font-size: 40px";
} 

function onInput(el) {
	if (el.value == "Hello")
		alert("И ебе привет!");
	console.log(el.value);
}