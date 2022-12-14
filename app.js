const targetElement = document.querySelector("span")

const setOnlineMode =()=>{
    targetElement.innerText = "😍 Online";
    targetElement.style.color ="#f5f5f5"
}

const setOfflineMode =()=>{
    targetElement.innerText = "😢 Offline";
    targetElement.style.color ="#f00"
}

window.navigator.onLine ? setOnlineMode() : setOfflineMode();

window.addEventListener("online",setOnlineMode)
window.addEventListener("offline",setOfflineMode)
