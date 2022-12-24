const quotes = [
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author: "사무엘존슨",
  },
  {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
    author: "파울로 코엘료",
  },
  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
    author: "엘버트 허버드",
  },
  {
    quote:
      "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author: "이드리스 샤흐",
  },
  {
    quote: "행복한 삶을 살기위해 필요한 것은 거의 없다. ",
    author: "마르쿠스 아우렐리우스 안토니우스",
  },
  {
    quote:
      "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다 ",
    author: "랄프 왈도 에머슨",
  },
  {
    quote: "계단을 밟아야 계단 위에 올라설수 있다,",
    author: "터키속담",
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다,",
    author: "앙드레 말로",
  },
  {
    quote:
      "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
    author: "톰 모나건",
  },
  {
    quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다. ",
    author: "이소룡",
  },
  {
    quote:
      "삶을 사는 데는 단 두가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고 또 다른 하나는 모든 것이 기적이라고 여기는방식이다.",
    author: "알베르트 아인슈타인",
  },
  {
    quote: "문제점을 찾지 말고 해결책을 찾으라 ",
    author: "헨리포드",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;
