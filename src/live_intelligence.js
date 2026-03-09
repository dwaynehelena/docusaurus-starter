async function getWeather() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true";
  const response = await fetch(url);
  return response.json();
}

async function getCrypto() {
  const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
  const response = await fetch(url);
  return response.json();
}

async function getHackerNews() {
  const url = "https://hacker-news.firebaseio.com/v0/item/8863.json";
  const response = await fetch(url);
  return response.json();
}

async function getIpGeo() {
  const url = "https://ipapi.co/json/";
  const response = await fetch(url);
  return response.json();
}

async function getAdvice() {
  const url = "https://api.adviceslip.com/advice";
  const response = await fetch(url);
  return response.json();
}

async function getJoke() {
  const url = "https://official-joke-api.appspot.com/random_joke";
  const response = await fetch(url);
  return response.json();
}

async function getBored() {
  const url = "https://www.boredapi.com/api/activity";
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return await response.json();
  } catch (error) {
    return { activity: "Go for a walk!", type: "relaxation" };
  }
}

async function getUserPersona() {
  const url = "https://randomuser.me/api/";
  const response = await fetch(url);
  return response.json();
}

async function getCatFact() {
  const url = "https://catfact.ninja/fact";
  const response = await fetch(url);
  return response.json();
}

async function getIpify() {
  const url = "https://api.ipify.org?format=json";
  const response = await fetch(url);
  return response.json();
}

if (require.main === module) {
  (async () => {
    console.log("Testing Live Intelligence Suite...");
    try {
      const weather = await getWeather();
      console.log("Weather:", weather.current_weather || "N/A");
      
      const crypto = await getCrypto();
      console.log("Crypto:", crypto.bitcoin || "N/A");
      
      const hn = await getHackerNews();
      console.log("HN:", hn.title || "N/A");
      
      const ipGeo = await getIpGeo();
      console.log("IP Geo:", ipGeo.city || "N/A");
      
      const advice = await getAdvice();
      console.log("Advice:", advice.slip ? advice.slip.advice : "N/A");
      
      const joke = await getJoke();
      console.log("Joke:", joke.setup || "N/A");
      
      const bored = await getBored();
      console.log("Bored:", bored.activity || "N/A");
      
      const userPersona = await getUserPersona();
      console.log("User Persona:", userPersona.results[0].name || "N/A");
      
      const catFact = await getCatFact();
      console.log("Cat Fact:", catFact.fact || "N/A");
      
      const ipify = await getIpify();
      console.log("Ipify:", ipify.ip || "N/A");
      
      console.log("Verification Successful!");
    } catch (error) {
      console.error("Verification Failed:", error);
    }
  })();
}

module.exports = {
  getWeather,
  getCrypto,
  getHackerNews,
  getIpGeo,
  getAdvice,
  getJoke,
  getBored,
  getUserPersona,
  getCatFact,
  getIpify
};
