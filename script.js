const missionData = {
  1: {
    number: "01", date: "OCTOBER 2008", title: "Chandrayaan-1",
    description: "India's first lunar mission mapped the Moon and helped provide strong evidence for water molecules on the lunar surface.",
    achievement: "Helped confirm the presence of water molecules on the Moon.",
    caption: "LUNAR ORBITER"
  },
  2: {
    number: "02", date: "JULY 2019", title: "Chandrayaan-2",
    description: "This mission included an orbiter, the Vikram lander and the Pragyan rover. The lander did not complete its planned soft landing, while the orbiter continued scientific observations.",
    achievement: "The orbiter continues to provide valuable observations of the Moon.",
    caption: "ORBITER + LANDER + ROVER"
  },
  3: {
    number: "03", date: "JULY–AUGUST 2023", title: "Chandrayaan-3",
    description: "India's third lunar mission demonstrated end-to-end landing capability and deployed the Pragyan rover to carry out experiments on the lunar surface.",
    achievement: "India became the fourth country to achieve a soft landing on the Moon.",
    caption: "VIKRAM LANDER & PRAGYAN ROVER"
  }
};

const tabs = document.querySelectorAll(".mission-tab");
function showMission(id) {
  const mission = missionData[id];
  document.getElementById("missionNumber").textContent = mission.number;
  document.getElementById("missionDate").textContent = mission.date;
  document.getElementById("missionTitle").textContent = mission.title;
  document.getElementById("missionDescription").textContent = mission.description;
  document.getElementById("missionAchievement").textContent = mission.achievement;
  document.querySelector(".visual-caption").textContent = mission.caption;
  tabs.forEach(tab => {
    const active = tab.dataset.mission === String(id);
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
}
tabs.forEach(tab => tab.addEventListener("click", () => showMission(tab.dataset.mission)));

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const quizButtons = document.querySelectorAll(".quiz-options button");
const quizFeedback = document.getElementById("quizFeedback");
quizButtons.forEach(button => button.addEventListener("click", () => {
  quizButtons.forEach(item => item.classList.remove("chosen"));
  button.classList.add("chosen");
  if (button.dataset.answer === "3") {
    quizFeedback.textContent = "Correct! Chandrayaan-3 landed successfully on 23 August 2023.";
  } else {
    quizFeedback.textContent = "Not quite. Try again — the successful soft landing was in 2023.";
  }
}));
