import { Push } from 'zeromq';
import { CONNECTION_STR } from './constant.js';
const socket = new Push();
let i = 100;
start();

async function start() {
  try {
    await socket.bind(CONNECTION_STR);
    console.log('TCP listening on 7000');
    sendJobs();
  } catch (e) {
    console.log(e);
  }
}

async function sendJobs() {
  try {
    while (i != 0) {
      socket.send(`Sending job # ${i}`);
      await sleep();
      i--;
    }
  } catch (e) {
    console.log(e);
  }
}

async function sleep() {
  return await new Promise((resolve) => setTimeout(resolve, 500));
}
