const ba = require('better-auth');
console.log(Object.keys(ba));
try {
  const adapters = require('better-auth/adapters');
  console.log('Adapters:', Object.keys(adapters));
} catch(e) { console.log('No adapters export found directly'); }
