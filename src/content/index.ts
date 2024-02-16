import { runtime } from "webextension-polyfill";

console.log("[content] loaded ");

// add a naive counter
let count = 0;

type Listener = (event: MouseEvent) => void;

function registerClickListener(listener: Listener) {
  window.addEventListener("click", listener);
}

function countClicks() {
  count++;
  console.log("click(): ", count);

  return runtime.sendMessage({
    from: "content",
    to: "background",
    action: "click",
  });
}

type ShopType = "foodpanda" | "ubereats";

async function getShopReviews(type: ShopType) {
  try {
    const res = await fetch("http://localhost:6300/ping").then((res) =>
      res.json()
    );
    console.log(res);
  } catch (err: any) {
    console.log(err);
  }
}

function checkBrowserUrl() {
  chrome.tabs.query(
    { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
    function (tabs) {
      const currentUrl = tabs[0].url;
      console.log(currentUrl);
      if (!currentUrl) return;

      if (currentUrl.indexOf("https://www.foodpanda.com") !== -1) {
        console.log("is foodpanda");
        getShopReviews("foodpanda");
      } else if (currentUrl.indexOf("https://www.ubereats.com") !== -1) {
        console.log("is ubereats");
        getShopReviews("ubereats");
      }
    }
  );
}

export function init() {
  checkBrowserUrl();
  // registerClickListener(countClicks);
}

init();
