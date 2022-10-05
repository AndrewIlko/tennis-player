const bioText = document.querySelector(".bio__text");
const textCareer = ` 
                            <h3 class="bio__update">(UPDATED 22 AUGUST 2022)</h3>
                            <p>
                                - Broke into Top 5 in July 2022 at age 19 (youngest since 2005) after breaking into Top
                                10 at age 18 in April 2022
                                (youngest since 2005) and Top 20 at age 18 in February 2022 (youngest since 1993).<br>
                                - Youngest ATP Tour champion since 2008 (2021 Umag), ATP 500 champion in history (2022
                                Rio de Janeiro, 2022 Barcelona)
                                and Miami & Madrid champion in respective tournament histories (2022).<br>
                                - Became 3rd-youngest ATP Masters 1000 champion in history (288 events since 1990) and
                                2nd-youngest player to win 2 ATP
                                Masters 1000 titles (2022 Miami, 2022 Madrid).<br>
                                - Youngest player to defeat both Nadal and Djokovic and 1st to do so at same clay-court
                                event, beating them on
                                back-to-back days en route to 2022 Madrid title.<br>
                                - Advanced to Grand Slam QFs at 2021 US Open and 2022 Roland Garros, becoming youngest
                                men’s quarter-finalist at US Open
                                in Open Era and at any Grand Slam since Chang, 18, at 1990 Roland Garros.
                            </p>`;

const textPersonal = `      <p>- Father, Carlos; mother, Virginia; siblings, Alvaro, Sergio and Jaime.<br>
                                - Began playing at age 4 thanks to his dad.<br>
                                - Favourite shot is forehand, surface is clay, tournament is Roland Garros and city on tour
                                is New York.<br>
                                - Coached by countryman Juan Carlos Ferrero, who won Roland Garros title and became World
                                No. 1 soon after Alcaraz was
                                born in 2003.<br>
                                - Tennis idol is countryman and former World No. 1 Rafael Nadal.<br>
                                - Named ATP Newcomer of the Year in 2020 after jumping from No. 491 to No. 141 in
                                Pepperstone ATP Rankings.<br>
                                - Also enjoys golf and football. Favourite football team is Real Madrid.
                                - Likes listening to reggaeton music.<br>
                                - Favourite actor is Will Smith and movie is Rocky Balboa.
                            </p>`;
const switchTextBtn = [...document.querySelectorAll(".content__switch-btn")];
switchTextBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    removeActiveAll();
    e.target.classList.add("content__switch-btn--active");
    if (e.target.innerText == "CAREER") {
      bioText.innerHTML = textCareer;
    } else {
      bioText.innerHTML = textPersonal;
    }
  })
);
const removeActiveAll = () =>
  switchTextBtn.forEach((element) =>
    element.classList.remove("content__switch-btn--active")
  );
