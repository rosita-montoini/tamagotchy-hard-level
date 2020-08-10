let level = 0,
	buttonEasy = document.querySelector('#easy'),
	buttonHard = document.querySelector('#hard'),
	buttonVeryhard = document.querySelector('#veryHard'),
	tamName = document.querySelector('#tamName'),
	itsFood,  itsClean, itsHappiness, 
	itsHealth, itsSocializitsMoney,
	tamFood = document.querySelector('#tamFood'),
	tamClean = document.querySelector('#tamClean'),
	tamHappiness = document.querySelector('#tamHappiness'),
	tamHealth = document.querySelector('#tamHealth'),
	tamSocialization = document.querySelector('#tamSocialization'), 
	tamMoney = document.querySelector('#tamMoney'),  
	time = 0;

tamName.innerHTML = prompt("Your Tamagotchi's name").toUpperCase();


buttonEasy.addEventListener('click', function () {
	level = 0;
});

buttonHard.addEventListener('click', function () {
	level = 1;
});

buttonVeryhard.addEventListener('click', function () {
	level = 2;
});

function randomInteger(min, max) {
  	return Math.floor(Math.random() * (max - min + 1)) + min;
}


itsFood = randomInteger(50, 100);
itsClean = randomInteger(50, 100);
itsHappiness = randomInteger(50, 100);
itsHealth = randomInteger(50, 100);
itsSocialization = randomInteger(50, 100);
itsMoney = randomInteger(50, 100);


tamFood.innerHTML = itsFood;
tamClean.innerHTML = itsClean;
tamHappiness.innerHTML = itsHappiness;
tamHealth.innerHTML = itsHealth;
tamSocialization.innerHTML = itsSocialization;
tamMoney.innerHTML = itsMoney;



class Tamagotchi {
	constructor(food, clean, happiness, health, socialization, money) {
	    this.food = parseInt(food);
	    this.clean = parseInt(clean);
	    this.happiness = parseInt(happiness);
	    this.health = parseInt(health);
	    this.socialization = parseInt(socialization);
	    this.money = parseInt(money);
	}
	
  	statisticsValue() {
	    if(level === 0) {
	    	this.food -= 3;
	    	this.clean -= 3;
	    	this.happiness -= 3;
	    	this.health -= 3;
	    	this.socialization -= 3;
	    	this.money -= 3;
	    } else if (level === 1){
	    	this.food -= 5;
	    	this.clean -= 5;
	    	this.happiness -= 5;
	    	this.health -= 5;
	    	this.socialization -= 5;
	    	this.money -= 5;
	    }
	}

	statisticsValuehard() {
	    if(level === 2) {
	    	this.food -= 7;
	    	this.clean -= 7;
	    	this.happiness -= 7;
	    	this.health -= 7;
	    	this.socialization -= 7;
	    	this.money -= 7;
	    }
	}
	
  	eat() {
	    if(this.food >= 200) {
	    	this.clean -= 20;
	    } else {
	    	this.food += 30;
	    	this.clean -= 20;
	    } 
	}

  	wash() {
	    if(this.clean >= 200) {
	    	this.happiness -= 20;
	    } else {
	    	this.clean += 40;
	    	this.happiness -= 20;
	    }
  	}

  	run() {
	    if(this.happiness >= 200) {
	    	this.food -= 10;
	    } else {
	    	this.happiness += 15;
	    	this.food -= 10;
	    }
  	}

  	doctor() {
  		if(this.health >= 200) {
  			this.money -= 20;
  		} else {
  			this.health += 30;
  			this.money -= 20;
  		}
  	}

  	bar() {
  		if(this.socialization >= 200) {
  			this.money -= 20;
  			this.health -= 10;
  		} else {
  			this.socialization += 40;
  			this.food += 10;
  			this.money -= 20;
  			this.health -= 10;
  		}
  	}

  	work() {
  		if(this.money >= 100) {
  			this.socialization -= 20;
  			this.food -= 10;
  			this.health -= 10;
  		} else {
  			this.money += 50;
  			this.socialization -= 20;
  			this.food -= 10;
  			this.health -= 10;
  		}
  	}

  	buyfood() {
  		if(this.food >= 200) {
	    	this.money -= 20;
	    } else {
	    	this.food += 20;
	    	this.money -= 20;
	    } 
  	}

  	business() {
  		if(this.money >= 200) {
  			this.health -= 100;
  		} else {
  			this.money += 100;
  			this.happiness += 100;
  			this.socialization += 20;
  			this.health -= 100;
  		}
  	}
}


gameTamagotchi = new Tamagotchi (tamFood.innerHTML, tamClean.innerHTML, tamHappiness.innerHTML,
tamHealth.innerHTML, tamSocialization.innerHTML, tamMoney.innerHTML);
console.log(gameTamagotchi);


(function() {
  time = 0;
  setInterval(() => {
    time++;
  }, 1000)
})();


(function() {
	let timerId = setInterval(function () {
		gameTamagotchi.statisticsValue();
		tamFood.innerHTML = gameTamagotchi.food;
		tamClean.innerHTML = gameTamagotchi.clean;
		tamHappiness.innerHTML = gameTamagotchi.happiness;
		tamHealth.innerHTML = gameTamagotchi.health;
		tamSocialization.innerHTML = gameTamagotchi.socialization;
		tamMoney.innerHTML = gameTamagotchi.money;
		if (gameTamagotchi.food <= 0 || gameTamagotchi.clean <= 0 || gameTamagotchi.happiness <= 0 || gameTamagotchi.health <= 0 || gameTamagotchi.socialization <= 0 || gameTamagotchi.money <= 0) { 
			clearInterval(timerId);
	        alert('Game over! He lived ' + Math.round(time) + ' sec.');
		}
		document.querySelector('#restart').addEventListener('click', function() {
	    	window.location.reload();
	    });
	}, 5000)
})();

(function() {
	timerId = setInterval(function () {
		gameTamagotchi.statisticsValuehard();
		tamFood.innerHTML = gameTamagotchi.food;
		tamClean.innerHTML = gameTamagotchi.clean;
		tamHappiness.innerHTML = gameTamagotchi.happiness;
		tamHealth.innerHTML = gameTamagotchi.health;
		tamSocialization.innerHTML = gameTamagotchi.socialization;
		tamMoney.innerHTML = gameTamagotchi.money;
		if (gameTamagotchi.food <= 0 || gameTamagotchi.clean <= 0 || gameTamagotchi.happiness <= 0 || gameTamagotchi.health <= 0 || gameTamagotchi.socialization <= 0 || gameTamagotchi.money <= 0) { 
			clearInterval(timerId);
		}
		document.querySelector('#restart').addEventListener('click', function() {
	    	window.location.reload();
	    });
	}, 7000)
})();

document.querySelector('#eat').addEventListener('click', function () {
	gameTamagotchi.eat();
	document.querySelector('#picture').src ='images/tamagotchi-eat.gif';
	if(gameTamagotchi.food <= 0 || gameTamagotchi.clean <= 0) {
    	alert('You forgot about him and tamagotchi died!!!');
    	alert('He lived ' + Math.round(time) + ' sec.');
    	window.location.reload();
	}
});

document.querySelector('#wash').addEventListener('click', function () {
	gameTamagotchi.wash();
	document.querySelector('#picture').src ='images/tamagotchi-wash.gif';
	if(gameTamagotchi.happiness <= 0 || gameTamagotchi.clean <= 0) {
    	alert('Your tamagotchi is died!!!');
    	alert('He lived ' + Math.round(time) + ' sec.');
    	window.location.reload();
	}
});

document.querySelector('#run').addEventListener('click', function () {
	document.querySelector('#picture').src ='images/tamagotchi-run.gif';
	gameTamagotchi.run();
	if(gameTamagotchi.happiness <= 0 || gameTamagotchi.food <= 0) {
    	alert('You forgot about him and tamagotchi died!!!');
    	alert('He lived ' + Math.round(time) + ' sec.');
    	window.location.reload();
	}
});

document.querySelector('#doctor').addEventListener('click', function () {
	document.querySelector('#picture').src ='images/tamagotchi-doctor.gif';
	gameTamagotchi.doctor();
	if(gameTamagotchi.health <= 0 || gameTamagotchi.money <= 0) {
    	alert('Your tamagotchi is died!!!');
    	alert('He lived ' + Math.round(time) + ' sec.');
    	window.location.reload();
	}
});

document.querySelector('#bar').addEventListener('click', function () {
	document.querySelector('#picture').src ='images/tamagotchi-bar.gif';
	gameTamagotchi.bar();
	if(gameTamagotchi.health <= 0 || gameTamagotchi.money <= 0) {
    	alert('No money and tamagotchi died!!!');
    	alert('He lived ' + Math.round(time) + ' sec.');
    	window.location.reload();
	}
});

document.querySelector('#work').addEventListener('click', function () {
	document.querySelector('#picture').src ='images/tamagotchi-work.gif';
	gameTamagotchi.work();
	if(gameTamagotchi.health <= 0 || gameTamagotchi.socialization <= 0 ||  gameTamagotchi.food <= 0) {
    	alert('Your tamagotchi is died!!!');
    	alert('He lived ' + Math.round(time) + ' sec.');
    	window.location.reload();
	}
});


document.querySelector('#buyfood').addEventListener('click', function () {
	document.querySelector('#picture').src ='images/tamagotchi-buyfood.gif';
	gameTamagotchi.buyfood();
	if(gameTamagotchi.money <= 0 || gameTamagotchi.food <= 0) {
    	alert('No money and tamagotchi died!!!');
    	alert('He lived ' + Math.round(time) + ' sec.');
    	window.location.reload();
	}
});

document.querySelector('#business').addEventListener('click', function () {
	document.querySelector('#picture').src ='images/tamagotchi-business.gif';
	gameTamagotchi.business();
	if(gameTamagotchi.health <= 0) {
    	alert('You forgot about him and tamagotchi died!!!');
    	alert('He lived ' + Math.round(time) + ' sec.');
    	window.location.reload();
	}
});



