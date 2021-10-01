const quotes = [
    {
        quote: "본연의 모습은 바꿀수 없다. 바꿀수 있는 것은 자신의 행동 뿐",
        author: "필립 풀먼",
    },
    {
        quote: "다른 사람들이 당신을 향햐 던지는 돌을 가지고 튼튼한 기반을 쌓아라",
        author: "데이비드 브링클리",
    },
    {
        quote: "당신이 세상을 바라보는 방법을 바꾸면 당신이 보는 세상은 달라질 것이다",
        author: "웨인 다이어",
    },
    {
        quote: "당신이 경주한다면 패배할 가능성도 있겠지만, 경주하지 않는다면 당신은 이미 패배한것이다",
        author: "버락 오바마",
    },
    {
        quote: "지금까지 항상 그 방식대로 해 온 것이라면, 그 방식은 아마도 잘못된 것이다",
        author: "찰스 케터링",
    },
    {
        quote: "당신이 인생에서 저지를 수있는 가장 큰 실수는 실수를 할까봐 계속 두려워 한 것이다",
        author: "엘버트 허바드",
    },
    {
        quote: "당신이 대면하는 모든 것을 바꿀 수는 없다. 그러나 대면하지 않는다면 아무것도 바뀌지 않는다",
        author: "제임스 볼드윈",
    },
    {
        quote: "만약 일 하는 것이 그렇게 좋은 것이라면, 부자들이 일하는 것을 자신들만의 것으로 만들었을 것이다",
        author: "마크 트웨인",
    },
    {
        quote: "본연의 모습은 바꿀수 없다. 바꿀수 있는 것은 자신의 행동 뿐",
        author: "조지C 리히텐베르그",
    },
    {
        quote: "당신의 인생에서 긍정적인 결과를 얻고 싶다면, '~했더라면 좋았을텐데' 대신, '다음에는' 이라는 단어를 써라.",
        author: "조지C 리히텐베르그",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;