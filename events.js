const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', (res) => {
  console.log(res,'触发事件');
});
myEmitter.emit('event','精绝古城');
myEmitter.emit('event','黄皮子坟');