// POST 请求固定 URL
const CHECKIN_URL =
  "https://zodgame.xyz/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&inajax=1";
// 签到心情
const MOODS = ["kx", "ng", "ym", "wl", "nu", "ch", "fd", "yl", "shuai"];
const MOODS_LENGTH = MOODS.length;

const baseHeaders = {
  accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  "accept-language": "zh-CN,zh-TW;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6",
  "cache-control": "max-age=0",
  "content-type": "application/x-www-form-urlencoded",
  priority: "u=0, i",
  "sec-ch-ua":
    '"Not:A-Brand";v="24", "Chromium";v="134", "Google Chrome";v="134"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"Windows"',
  "sec-fetch-dest": "iframe",
  "sec-fetch-mode": "navigate",
  "sec-fetch-site": "same-origin",
  "sec-fetch-user": "?1",
  "upgrade-insecure-requests": "1",
  Referer: "https://zodgame.xyz/plugin.php?id=dsu_paulsign:sign",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};

function checkIfSuccess(data) {
  if (data.includes("您今日已经签到，请明天再来！")) {
    console.log("您今日已经签到，请明天再来！");
    console.log(data);
  } else if (data.includes("恭喜你签到成功!")) {
    console.log("恭喜你签到成功!");
    console.log(data);
  } else {
    console.log("签到失败！请检查 Cookie 和 Formhash 是否配置正确。");
    throw new Error(data);
  }
}

async function checkIn(cookie, formhash) {
  const response = await fetch(CHECKIN_URL, {
    headers: {
      ...baseHeaders,
      cookie,
    },
    body: `formhash=${formhash}&qdxq=${
      MOODS[Math.floor(Math.random() * MOODS_LENGTH)]
    }`,
    method: "POST",
  });

  const data = await response.text();

  checkIfSuccess(data);
}

async function main() {
  let cookie, formhash;

  if (process.env.COOKIE && process.env.FORMHASH) {
    cookie = process.env.COOKIE;
    formhash = process.env.FORMHASH;
  } else {
    console.log("COOKIE AND / OR FORMHASH NOT FOUND.");
    process.exit(1);
  }

  checkIn(cookie, formhash);
}

main();
