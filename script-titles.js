const titlesTable = document.querySelector(".titles-table__wrapper");

const switchTextBtn = [...document.querySelectorAll(".content__switch-btn")];
switchTextBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    removeActiveAll();
    e.target.classList.add("content__switch-btn--active");
  })
);
const removeActiveAll = () =>
  switchTextBtn.forEach((element) =>
    element.classList.remove("content__switch-btn--active")
  );

const titles = {
  "US Open (Outdoor/Hard)": {
    title: "2022 US Open (tennis)",
    date: "	August 29 – September 11",
    location: "Flushing, New York, U.S.",
    prize: "US$60,102,000",
    generalInfo: `
    The 2022 US Open was the 142nd edition of tennis' US Open and the fourth and final tennis major (Grand Slam event) of the year. It was held on outdoor hard courts at the USTA Billie Jean King National Tennis Center in New York City.

    Daniil Medvedev and Emma Raducanu were the men's and women's singles defending tournament champions.[1][2] Raducanu lost to Alizé Cornet in the first round, while Medvedev lost to Nick Kyrgios in the fourth round.

    Carlos Alcaraz and Iga Świątek won the men's and women's singles titles, respectively. They became the first players, both born in the 2000s, to win the tournament's singles titles.
    `,
  },
  "ATP Masters 1000 Madrid (Outdoor/Clay)": {
    title: "ATP Masters 1000 Madrid (Outdoor/Clay)",
    date: "	August 29 – September 11",
    location: "Madrid, Spain",
    prize: "",
    generalInfo: `
    The Madrid Open (Spanish: Masters de Madrid), currently sponsored by Mutua Madrileña and known as the Mutua Madrid Open, is a joint men's and women's professional tennis tournament, held in Madrid, during early May. The clay-court event is classified as an ATP Tour Masters 1000 on the ATP Tour and a WTA 1000 event on the WTA Tour. In the past, it has also been known as the Madrid Masters. The tournament is traditionally played on a red clay surface. The event was played on blue courts in the 2012 tournament edition, with the ATP deciding against blue thereafter.[1]

    Ion Țiriac, a Romanian billionaire businessman and former ATP professional, was the owner of the tournament between 2009 and 2021.[2] According to Digi Sport which interviewed Țiriac in 2019, the tournament brings to the city of Madrid annual benefits exceeding €107 million.[3] In 2021, Țiriac sold the tournament to New York–based giants IMG for approximately €390 Million.
    `,
  },
  "Barcelona (Outdoor/Clay)": {
    title: "Barcelona Open (tennis)",
    date: "",
    location: "Barcelona, Spain",
    prize: "€2,661,825 (2022)",
    generalInfo: `
    The Barcelona Open (currently sponsored by Banc Sabadell) is an annual tennis tournament for male professional players. The event has been held in Barcelona, Spain every year from 1953 (except for its cancellation in 2020), and is played on clay courts at the Real Club de Tenis Barcelona.

It was an event of the Grand Prix tennis circuit from 1970–1989, except in 1971 when it was part of the World Championship Tennis (WCT) circuit, although it was also open to non-WCT players. The tournament is currently part of the ATP Tour 500 series on the ATP Tour. It is also known as Torneo Godó, Trofeo Conde de Godó, and Open Banc Sabadell.

It is Spain's second most important tournament on the ATP Tour after the Madrid Open and the event generally takes place in the last week of April, when temperatures in Barcelona average a daily high of 19 °C (66 °F).
    `,
  },
  "ATP Masters 1000 Miami (Outdoor/Hard)": {
    title: "2022 Miami Open",
    date: "March 22 – April 3",
    location: "	Miami Gardens, Florida, United States",
    prize: "$9,554,920 (ATP)",
    generalInfo: `
    The 2022 Miami Open was a professional hardcourt tennis tournament played from March 22 to April 3, 2022 on the grounds of Hard Rock Stadium in Miami Gardens, Florida. It was the 37th edition of the men's and women's event and was classified as an ATP Masters 1000 event on the 2022 ATP Tour and a WTA 1000 event on the 2022 WTA Tour.[1][2]

Hubert Hurkacz and Ashleigh Barty were the defending champions in the men's and women's singles draw, respectively.[3][4] However, Barty withdrew before the tournament began[5] and later announced her retirement from professional tennis.[6] Hurkacz lost in the semifinals to Carlos Alcaraz.[7]
    `,
  },
  "Rio de Janeiro (Outdoor/Clay)": {
    title: "2022 Rio Open",
    date: "	14–20 February",
    location: "	Rio de Janeiro, Brazil",
    prize: "$1,815,115",
    generalInfo: `The 2022 Rio Open, also known as Rio Open presented by Claro for sponsorship reasons, was a professional men's tennis tournament played on outdoor clay courts. It was the 8th edition of the Rio Open, and part of the ATP Tour 500 of the 2022 ATP Tour. It took place in Rio de Janeiro, Brazil between February 14–20, 2022.[1]`,
  },
  "Umag (Outdoor/Clay)": {
    title: "2021 Croatia Open Umag",
    date: "19 – 25 July",
    location: "Umag, Croatia",
    prize: "€481,270",
    generalInfo: `The 2021 Croatia Open (also known as the Plava Laguna Croatia Open Umag for sponsorship reasons) is a men's tennis tournament played on outdoor clay courts. It is the 31st edition of the Croatia Open, and part of the 250 Series of the 2021 ATP Tour. It take place at the International Tennis Center in Umag, Croatia, from 19 through 25 July 2021.[1][2]`,
  },
};

const titleName = [...document.querySelectorAll(".title")];

const titleTitle = document.querySelector(".title__title");
const titleDate = document.querySelector(".title__date");
const titleLocation = document.querySelector(".title__location");
const titlePrize = document.querySelector(".title__prize");
const titleGenInfo = document.querySelector(".title__gen-info");

const titleBlockWrapper = document.querySelector(".title-info__wrapper");
const titleBlock = document.querySelector(".title-info");
const titleCloseBtn = document.querySelector(".title__close-btn");

titleName.forEach((title) =>
  title.addEventListener("click", (e) => {
    toggleTitleBlock();
    let { title, date, location, prize, generalInfo } =
      titles[e.target.innerText];
    titleTitle.innerText = title;
    titleDate.innerText = date;
    titleLocation.innerText = location;
    titlePrize.innerText = prize;
    titleGenInfo.innerText = generalInfo;
  })
);
titleCloseBtn.addEventListener("click", () => {
  toggleTitleBlock();
});
const toggleTitleBlock = () => {
  titleBlockWrapper.classList.toggle("title-info__wrapper--active");
  titleBlock.classList.toggle("title-info--active");
};
