const axios = require('axios');
const fs = require('fs');
const chalk = require('chalk');
const cfonts = require('cfonts');
const {HttpProxyAgent} = require('http-proxy-agent');
const {HttpsProxyAgent} = require('https-proxy-agent');
const {SocksProxyAgent} = require('socks-proxy-agent');
const readlineSync = require('readline-sync');

cfonts.say('Airdrop 888', {
  font: 'block',
  align: 'center',
  colors: ['yellow', 'magenta'],
  background: 'transparent',
  letterSpacing: 1,
  lineHeight: 1,
  space: true,
  maxLength: '0',
});

console.log(chalk.green('Script coded by - @balveerxyz | Channel Tele: t.me/airdroplocked | Brilliance Task Management ✨'));

// Fungsi untuk format waktu remaining
const formatTimeRemaining = (ms) => {
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${hours}h ${minutes}m ${seconds}s`;
};

// Fungsi untuk menampilkan countdown
const showCountdown = (ms) => {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      process.stdout.write(`\r${chalk.cyan('⏳ Time remaining: ' + formatTimeRemaining(ms))}`);
      ms -= 1000;
      if (ms <= 0) {
        clearInterval(interval);
        process.stdout.write('\n');
        resolve();
      }
    }, 1000);
  });
};

const useProxy = readlineSync.question(chalk.blue('Mau menggunakan proxy? (y/n): '));
const proxies = useProxy === 'y' && fs.existsSync('proxy.txt') ? fs.readFileSync('proxy.txt', 'utf-8').trim().split('\n').filter(Boolean) : [];
console.log(chalk.yellow(`Loaded ${proxies.length} proxies 🌐`));

const tokens = fs.readFileSync('tokens.txt', 'utf-8').trim().split('\n').filter(Boolean);
console.log(chalk.cyan(`Loaded ${tokens.length} tokens from tokens.txt 🔑`));

const botOption = readlineSync.question(chalk.blue('Pilih penggunaan bot:\n1. Auto Join Airdrop + Claim\n2. Mining\nPilihan (1/2): '));
if (!['1', '2'].includes(botOption)) {
  console.log(chalk.red('❌ Pilihan tidak valid! Bot berhenti. ⚠️'));
  process.exit(1);
}

let proxyIndex = 0;

for (const token of tokens) {
  const proxy = useProxy === 'y' && proxies.length > 0 ? proxies[proxyIndex % proxies.length] : null;
  const agent = proxy ? (proxy.startsWith('socks') ? new SocksProxyAgent(proxy) : new HttpProxyAgent(proxy)) : null;

  if (botOption === '1') {
    // Auto Join Airdrop
    try {
      const airdropResponse = await axios.post('https://api.brillianceglobal.ltd/joinairdrop', {
        twitter: `@${Math.random().toString(36).substring(2, 12)}`,
        retweet: 'https://x.com/brilliance090/status/1915808144305099025',
        telegram: `@${Math.random().toString(36).substring(2, 12)}`,
        telegram2: `@${Math.random().toString(36).substring(2, 12)}`,
        token,
      }, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
          'Content-Type': 'multipart/form-data',
        },
        httpsAgent: agent,
      });

      if (airdropResponse.data.success) {
        console.log(chalk.green(`✅ Airdrop joined successfully with token ${token.slice(0, 10)}...! 🎁`));
      } else {
        console.log(chalk.red(`❌ Failed to join airdrop with token ${token.slice(0, 10)}...: ${airdropResponse.data.message || 'Unknown error'} ⚠️`));
      }
    } catch (error) {
      console.log(chalk.red(`❌ Failed to join airdrop with token ${token.slice(0, 10)}...: ${error.message} ⚡`));
    }
    await new Promise(resolve => setTimeout(resolve, 1000)); // Jeda 1 detik

    // Claim
    try {
      const claimResponse = await axios.post('https://api.brillianceglobal.ltd/claim', {
        token,
      }, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
          'Content-Type': 'multipart/form-data',
        },
        httpsAgent: agent,
      });

      if (claimResponse.data.success) {
        console.log(chalk.green(`✅ Claim successful with token ${token.slice(0, 10)}...! 💰`));
      } else {
        console.log(chalk.red(`❌ Failed to claim with token ${token.slice(0, 10)}...: ${claimResponse.data.message || 'Unknown error'} ⚠️`));
      }
    } catch (error) {
      console.log(chalk.red(`❌ Failed to claim with token ${token.slice(0, 10)}...: ${error.message} ⚡`));
    }
    await new Promise(resolve => setTimeout(resolve, 1000)); // Jeda 1 detik
  } else if (botOption === '2') {
    // Mining
    try {
      const miningResponse = await axios.post('https://api.brillianceglobal.ltd/mining', {
        token,
      }, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
          'Content-Type': 'multipart/form-data',
        },
        httpsAgent: agent,
      });

      if (miningResponse.data.success) {
        console.log(chalk.green(`✅ Mining successful with token ${token.slice(0, 10)}...! ⛏️`));
        console.log(chalk.cyan(`Details: BINC: ${miningResponse.data.binc}, USD: ${miningResponse.data.usd} 💸`));
        console.log(chalk.yellow('⏲️ Waiting for 12 hours before next mining...'));
        await showCountdown(12 * 60 * 60 * 1000); // Jeda 12 jam
      } else {
        console.log(chalk.red(`❌ Failed to mine with token ${token.slice(0, 10)}...: ${miningResponse.data.message || 'Unknown error'} ⚠️`));
      }
    } catch (error) {
      console.log(chalk.red(`❌ Failed to mine with token ${token.slice(0, 10)}...: ${error.message} ⚡`));
    }
    await new Promise(resolve => setTimeout(resolve, 1000)); // Jeda 1 detik
  }

  proxyIndex++;
}

console.log(chalk.cyan('🎉 All tasks completed!'));