var queen = {
    position: {
      x: 0,
      y: 0,
    },
  };
  
  var board = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
  ];

  var flag = false;

  let p = document.getElementById("message");
  let p1 = document.getElementById("current");
  p1.innerHTML =
    "Queens current position =>" + board[queen.position.x][queen.position.y];
  
  function move(numberOfSteps, direction) {
    let temp;
    let temp1;
  
    switch (direction) {
      case "E":
        temp = queen.position.y + numberOfSteps;
        if (temp >= 8 || temp < 0) {
          flag = true;
        } else {
          queen.position.y = temp;
        }
        break;
      case "W":
        temp = queen.position.y - numberOfSteps;
        if (temp >= 8 || temp < 0) {
          flag = true;
        } else {
          queen.position.y = temp;
        }
        break;
      case "S":
        temp = queen.position.x + numberOfSteps;
        if (temp >= 8 || temp < 0) {
          flag = true;
        } else {
          queen.position.x = temp;
        }
        break;
      case "N":
        temp = queen.position.x - numberOfSteps;
        if (temp >= 8 || temp < 0) {
          flag = true;
        } else {
          queen.position.x = temp;
        }
        break;
      case "SE":
        temp = queen.position.x + numberOfSteps;
        temp1 = queen.position.y + numberOfSteps;
        if ((temp >= 8 || temp < 0) || (temp1 >= 8 || temp1 < 0)) {
          flag = true;
        } else {
          queen.position.x = temp;
          queen.position.y = temp1;
        }
        break;
      case "NW":
        temp = queen.position.x - numberOfSteps;
        temp1 = queen.position.y - numberOfSteps;
        if ((temp >= 8 || temp < 0) || (temp1 >= 8 || temp1 < 0)) {
          flag = true;
        } else {
          queen.position.x = temp;
          queen.position.y = temp1;
        }
        break;
      case "SW":
        temp = queen.position.x + numberOfSteps;
        temp1 = queen.position.y - numberOfSteps;
        if ((temp >= 8 || temp < 0) || (temp1 >= 8 || temp1 < 0)) {
          flag = true;
        } else {
          queen.position.x = temp;
          queen.position.y = temp1;
        }
        break;
      case "NE":
        temp = queen.position.x - numberOfSteps;
        temp1 = queen.position.y + numberOfSteps;
        if ((temp >= 8 || temp < 0) || (temp1 >= 8 || temp1 < 0)) {
          flag = true;
        } else {
          queen.position.x = temp;
          queen.position.y = temp1;
        }
        break;
    }
  }
  
  function play() {
    p.innerHTML = "";
    let value = document.getElementById("position").value;
    var input = value.split(" ");
    input.forEach((num) => {
      let number = Number(num.slice(num.length - 1));
      let direction = num.slice(0, num.length - 1);
      move(number, direction);
    });
    p.innerHTML = "";
    if (flag == false) {
        console.log(
            "Queens current position =>" + board[queen.position.x][queen.position.y]
        );
        p1.innerHTML =
            "Queens current position =>" + board[queen.position.x][queen.position.y];
        p.innerHTML = "";
    } else if (flag == true){
        console.log("out of boundry");
        p.innerHTML = "out of boundry";
        p1.innerHTML = "Queens current position =>" + board[queen.position.x][queen.position.y];
        flag = false;
    }
  }
  function reset() {
      queen.position.x = 0;
      queen.position.y = 0;
      p1.innerHTML = "Queens current position =>" + board[queen.position.x][queen.position.y];
      console.log("Queen moved to square one");
      document.getElementById("position").value = "";
  }
