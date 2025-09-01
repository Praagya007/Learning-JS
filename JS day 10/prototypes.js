// =====================
// 1️⃣ Prototype Chain
// =====================
const parent = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const child = Object.create(parent);
child.name = "Alice";
child.greet();

const dog = {
  sound() {
    console.log(`Sound: ${this.noise}`);
  }
};
const dogCopy = Object.create(dog);
dogCopy.noise = "Woof!";
dogCopy.sound();

// =====================
// 2️⃣ Class Syntax
// =====================
class Timer {
  constructor() {
    this.startTime = 0;
    this.endTime = 0;
  }

  start() {
    this.startTime = Date.now();
    console.log("Timer started");
  }

  stop() {
    this.endTime = Date.now();
    console.log("Timer stopped");
  }

  reset() {
    this.startTime = 0;
    this.endTime = 0;
    console.log("Timer reset");
  }

  elapsed() {
    return this.endTime - this.startTime;
  }

  static info() {
    console.log("Timer measures elapsed time in milliseconds");
  }
}

const myTimer = new Timer();
Timer.info();
myTimer.start();
setTimeout(() => {
  myTimer.stop();
  console.log("Elapsed:", myTimer.elapsed(), "ms");
  myTimer.reset();
}, 2000);

// =====================
// 3️⃣ Inheritance
// =====================
class AdvancedTimer extends Timer {
  logElapsed() {
    console.log(`Elapsed: ${this.elapsed()} ms`);
  }
  reset() {
    this.startTime = 0;
    this.endTime = 0;
    console.log("Advanced reset done ✅");
  }
}
const t2 = new AdvancedTimer();
t2.start();
setTimeout(() => {
  t2.stop();
  t2.logElapsed();
  t2.reset();
}, 2000);

class CountdownTimer extends Timer {
  countDown(seconds) {
    this.start();
    let current = seconds;
    console.log(`Countdown starting from ${seconds} seconds`);
    const interval = setInterval(() => {
      console.log(current);
      current--;
      if (current < 0) {
        clearInterval(interval);
        this.stop();
        console.log("Countdown complete!");
        console.log(`Actual time taken: ${this.elapsed()} ms`);
      }
    }, 1000);
  }
}
const ct = new CountdownTimer();
ct.countDown(3);

// =====================
// 4️⃣ Factory Function Timer
// =====================
function createTimer() {
  let startTime = 0;
  let endTime = 0;
  return {
    start() {
      startTime = Date.now();
      console.log("Timer started");
    },
    stop() {
      endTime = Date.now();
      console.log("Timer stopped");
    },
    reset() {
      startTime = 0;
      endTime = 0;
      console.log("Timer reset");
    },
    elapsed() {
      return endTime - startTime;
    }
  };
}
const t3 = createTimer();
t3.start();
setTimeout(() => {
  t3.stop();
  console.log("Elapsed (factory):", t3.elapsed(), "ms");
}, 2000);

