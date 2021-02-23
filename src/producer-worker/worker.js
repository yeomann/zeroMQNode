import { Pull } from 'zeromq';
import { CONNECTION_STR } from './constant.js';
const socket = new Pull();

start();
async function start() {
  try {
    await socket.connect(CONNECTION_STR);
    console.log('connected');
    fetchJobs();
  } catch (e) {
    console.log(e);
  }
}

async function fetchJobs() {
  try {
    for await (const message of socket) {
      console.log(`Recieved: ${message}`);
    }
  } catch (e) {
    console.log(e);
  }
}
