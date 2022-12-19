const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("양의 정수를 입력 하시오");
} else if (age < 18) {
  console.log("당신은 술을 마실 수 없습니다.");
} else if (age >= 18 && age <= 50) {
  console.log("당신은 술을 마실 수 있어요");
} else if (age > 50 && age <= 80) {
  console.log("당신은 운동을 좀 하는 것이 어때?");
} else if (age > 80) {
  console.log("당신이 하고 싶은 데로 해");
}
