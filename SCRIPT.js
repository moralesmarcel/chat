const msgerForm = get(".msger-inputarea");
const msgerForm2 = get(".msger-inputarea2");
const msgerInput = get(".msger-input");
const msgerInput2 = get(".msger-input2");
const msgerChat = get(".msger-chat");
const USER_IMG = "https://static.thenounproject.com/png/425150-200.png";
const USER2_IMG = "https://static.thenounproject.com/png/3374963-200.png";
const USER_NAME = "Marcel";
const USER2_NAME = "Tester";

msgerForm.addEventListener("submit", event => {
    event.preventDefault();
    const msgText = msgerInput.value;
        if (!msgText) return;
    appendMessage(USER_NAME, USER_IMG, "left", msgText);
    msgerInput.value = ""; });

msgerForm2.addEventListener("submit", event => {
    event.preventDefault();
    const msgText = msgerInput2.value;
        if (!msgText) return;
    appendMessage(USER2_NAME, USER2_IMG, "right", msgText);
    msgerInput2.value = ""; });

function appendMessage(name, img, side, text) {
    const msgHTML = `
        <div class="msg ${side}-msg">
            <div class="msg-img" style="background-image: url(${img})"></div>
            <div class="msg-bubble">
                <div class="msg-info">
                <div class="msg-info-name">${name}</div>
                <div class="msg-info-time">${formatDate(new Date())}</div>
            </div>
            <div class="msg-text">${text}</div>
            </div>
        </div> `;
    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop += 500; }

function get(selector, root = document) {
    return root.querySelector(selector); }

function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();
    return `${h.slice(-2)}h ${m.slice(-2)}min`; }
