const fetch = require('node-fetch');
const url = 'https://urbtxtmgdysiltfzvewm.supabase.co/functions/v1/keep-alive'; // הכנס כאן את ה-URL שלך

async function ping() {
  while (true) {
    const timestamp = new Date().toISOString();
    try {
      const res = await fetch(url);
      if (res.ok) {
        console.log(`[${timestamp}] Ping successful! Status: ${res.status}`);
      } else {
        console.log(`[${timestamp}] Ping failed! Status: ${res.status}`);
      }
    } catch (err) {
      console.log(`[${timestamp}] Ping error: ${err.message}`);
    }
    await new Promise(resolve => setTimeout(resolve, 60 * 1000)); // 1 דקה
  }
}

ping();