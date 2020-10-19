//Developed by Joshua Shih
let diceroll = document.getElementById('diceroll')
let diceSide1Dice1 = document.getElementById('diceside1dice1')
let diceSide1Dice2 = document.getElementById('diceside1dice2')
let diceSide1Dice3 = document.getElementById('diceside1dice3')
let diceSide1Dice4 = document.getElementById('diceside1dice4')
let diceSide1Dice5 = document.getElementById('diceside1dice5')
let diceSide1Dice6 = document.getElementById('diceside1dice6')

let diceSide2Dice1 = document.getElementById('diceside2dice1')
let diceSide2Dice2 = document.getElementById('diceside2dice2')
let diceSide2Dice3 = document.getElementById('diceside2dice3')
let diceSide2Dice4 = document.getElementById('diceside2dice4')
let diceSide2Dice5 = document.getElementById('diceside2dice5')
let diceSide2Dice6 = document.getElementById('diceside2dice6')

let diceSide3Dice1 = document.getElementById('diceside3dice1')
let diceSide3Dice2 = document.getElementById('diceside3dice2')
let diceSide3Dice3 = document.getElementById('diceside3dice3')
let diceSide3Dice4 = document.getElementById('diceside3dice4')
let diceSide3Dice5 = document.getElementById('diceside3dice5')
let diceSide3Dice6 = document.getElementById('diceside3dice6')

let diceSide4Dice1 = document.getElementById('diceside4dice1')
let diceSide4Dice2 = document.getElementById('diceside4dice2')
let diceSide4Dice3 = document.getElementById('diceside4dice3')
let diceSide4Dice4 = document.getElementById('diceside4dice4')
let diceSide4Dice5 = document.getElementById('diceside4dice5')
let diceSide4Dice6 = document.getElementById('diceside4dice6')

let diceSide5Dice1 = document.getElementById('diceside5dice1')
let diceSide5Dice2 = document.getElementById('diceside5dice2')
let diceSide5Dice3 = document.getElementById('diceside5dice3')
let diceSide5Dice4 = document.getElementById('diceside5dice4')
let diceSide5Dice5 = document.getElementById('diceside5dice5')
let diceSide5Dice6 = document.getElementById('diceside5dice6')

let diceSide6Dice1 = document.getElementById('diceside6dice1')
let diceSide6Dice2 = document.getElementById('diceside6dice2')
let diceSide6Dice3 = document.getElementById('diceside6dice3')
let diceSide6Dice4 = document.getElementById('diceside6dice4')
let diceSide6Dice5 = document.getElementById('diceside6dice5')
let diceSide6Dice6 = document.getElementById('diceside6dice6')

let scoretext = document.getElementById('scoretext')
let gameover = document.getElementById('gameover')
let points = 0
let dice1True = 0
let dice2True = 0
let dice3True = 0
let dice4True = 0
let dice5True = 0
let dice6True = 0
let dice1Number = 0
let dice2Number = 0
let dice3Number = 0
let dice4Number = 0
let dice5Number = 0
let dice6Number = 0
let i = 1 //number of loops
let sameNumbers = 0
let sameNumbersTotal = 0
let numberofPairs = 0
let numberofFours = 0
let numberofTriplets = 0
let numberSetAside = 0
let rollCount = 0

console.log('setup')


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}
//generating dice numbers
function rollDice () {
    rollCount = rollCount + 1
    console.log(`Roll ${rollCount}`)
    console.log(`Number of Dice Active: ${6 - numberSetAside}`)
    if (dice1True === 0 && numberSetAside < 6) {
        dice1Number = getRandomInt(6) + 1
        console.log(`Dice 1 Rolled a ${dice1Number}`)
    } else {
        dice1Number = -99
        dice1True = -99
    }

    if (dice2True === 0 && numberSetAside < 5) {
        dice2Number = getRandomInt(6) + 1
        console.log(`Dice 2 Rolled a ${dice2Number}`)
    } else {
        dice2Number = -99
        dice2True = -99
    }
 
    if (dice3True === 0 && numberSetAside < 4) {
        dice3Number = getRandomInt(6) + 1
        console.log(`Dice 3 Rolled a ${dice3Number}`)
    } else {
        dice3Number = -99
        dice3True = -99
    }

    if (dice4True === 0 && numberSetAside < 3) {
        dice4Number = getRandomInt(6) + 1
        console.log(`Dice 4 Rolled a ${dice4Number}`)
    } else {
        dice4Number = -99
        dice4True = -99
    }

    if (dice5True === 0 && numberSetAside < 2) {
        dice5Number = getRandomInt(6) + 1
        console.log(`Dice 5 Rolled a ${dice5Number}`)
    } else {
        dice5Number = -99
        dice5True = -99
    }
   
    if (dice6True === 0 && numberSetAside < 1) {
        dice6Number = getRandomInt(6) + 1
        console.log(`Dice 6 Rolled a ${dice6Number}`)
    } else {
        dice6Number = -99
        dice6True = -99
    }
    //dice1Number = 4
    //dice2Number = 4
    //dice3Number = 4
    //dice4Number = 2
    //dice5Number = 2
    //dice6Number = 2
    showDice()
    countScore()
}
//end of generating dice numbers

    //beginning of function showDice
   function showDice() {
    diceSide1Dice1.classList.add('remove')
    diceSide2Dice1.classList.add('remove')
    diceSide3Dice1.classList.add('remove')
    diceSide4Dice1.classList.add('remove')
    diceSide5Dice1.classList.add('remove')
    diceSide6Dice1.classList.add('remove') 
    diceSide1Dice2.classList.add('remove')
    diceSide2Dice2.classList.add('remove')
    diceSide3Dice2.classList.add('remove')
    diceSide4Dice2.classList.add('remove')
    diceSide5Dice2.classList.add('remove')
    diceSide6Dice2.classList.add('remove')  
    diceSide1Dice3.classList.add('remove')
    diceSide2Dice3.classList.add('remove')
    diceSide3Dice3.classList.add('remove')
    diceSide4Dice3.classList.add('remove')
    diceSide5Dice3.classList.add('remove')
    diceSide6Dice3.classList.add('remove')  
    diceSide1Dice4.classList.add('remove')
    diceSide2Dice4.classList.add('remove')
    diceSide3Dice4.classList.add('remove')
    diceSide4Dice4.classList.add('remove')
    diceSide5Dice4.classList.add('remove')
    diceSide6Dice4.classList.add('remove') 
    diceSide1Dice5.classList.add('remove')
    diceSide2Dice5.classList.add('remove')
    diceSide3Dice5.classList.add('remove')
    diceSide4Dice5.classList.add('remove')
    diceSide5Dice5.classList.add('remove')
    diceSide6Dice5.classList.add('remove')  
    diceSide1Dice6.classList.add('remove')
    diceSide2Dice6.classList.add('remove')
    diceSide3Dice6.classList.add('remove')
    diceSide4Dice6.classList.add('remove')
    diceSide5Dice6.classList.add('remove')
    diceSide6Dice6.classList.add('remove')  


    if (dice1Number === 1) {
        diceSide1Dice1.classList.remove('remove')
    }

    if (dice1Number === 2) {
        diceSide2Dice1.classList.remove('remove')
    }

    if (dice1Number === 3) {
        diceSide3Dice1.classList.remove('remove') 
    }

    if (dice1Number === 4) {
        diceSide4Dice1.classList.remove('remove')
    }

    if (dice1Number === 5) {
        diceSide5Dice1.classList.remove('remove')
    }

    if (dice1Number === 6) {
        diceSide6Dice1.classList.remove('remove')  
    }

    if (dice2Number === 1) {
        diceSide1Dice2.classList.remove('remove')
    }

    if (dice2Number === 2) {
        diceSide2Dice2.classList.remove('remove') 
    }

    if (dice2Number === 3) {
        diceSide3Dice2.classList.remove('remove') 
    }

    if (dice2Number === 4) {
        diceSide4Dice2.classList.remove('remove')
    }

    if (dice2Number === 5) {
        diceSide5Dice2.classList.remove('remove')
    }

    if (dice2Number === 6) {
        diceSide6Dice2.classList.remove('remove')  
    }

    if (dice3Number === 1) {
        diceSide1Dice3.classList.remove('remove') 
    }

    if (dice3Number === 2) {
        diceSide2Dice3.classList.remove('remove')
    }

    if (dice3Number === 3) {
        diceSide3Dice3.classList.remove('remove')
    }

    if (dice3Number === 4) {
        diceSide4Dice3.classList.remove('remove')
    }

    if (dice3Number === 5) {
        diceSide5Dice3.classList.remove('remove')
    }

    if (dice3Number === 6) {
        diceSide6Dice3.classList.remove('remove')  
    }

    if (dice4Number === 1) {
        diceSide1Dice4.classList.remove('remove')
    }

    if (dice4Number === 2) {
        diceSide2Dice4.classList.remove('remove') 
    }

    if (dice4Number === 3) {
        diceSide3Dice4.classList.remove('remove')
    }

    if (dice4Number === 4) {
        diceSide4Dice4.classList.remove('remove')
    }

    if (dice4Number === 5) {
        diceSide5Dice4.classList.remove('remove')
    }

    if (dice4Number === 6) {
        diceSide6Dice4.classList.remove('remove')  
    }

    if (dice5Number === 1) {
        diceSide1Dice5.classList.remove('remove')
    }

    if (dice5Number === 2) {
        diceSide2Dice5.classList.remove('remove') 
    }

    if (dice5Number === 3) {
        diceSide3Dice5.classList.remove('remove')
    }

    if (dice5Number === 4) {
        diceSide4Dice5.classList.remove('remove') 
    }

    if (dice5Number === 5) {
        diceSide5Dice5.classList.remove('remove')
    }

    if (dice5Number === 6) {
        diceSide6Dice5.classList.remove('remove')  
    }

    if (dice6Number === 1) {
        diceSide1Dice6.classList.remove('remove')
    }

    if (dice6Number === 2) {
        diceSide2Dice6.classList.remove('remove') 
    }

    if (dice6Number === 3) {
        diceSide3Dice6.classList.remove('remove')
    }

    if (dice6Number === 4) {
        diceSide4Dice6.classList.remove('remove')
    }

    if (dice6Number === 5) {
        diceSide5Dice6.classList.remove('remove')
    }

    if (dice6Number === 6) {
        diceSide6Dice6.classList.remove('remove')  
    }
}//end of function showDice

//beginng of function countScore
function countScore() {
    sameNumbersTotal = 0
    numberofFours = 0
    numberofPairs = 0
    numberofTriplets = 0
    for  (i = 1; i < 7; i = i + 1) {
        sameNumbers = 0
        if (dice1Number === i) {
            sameNumbers = sameNumbers + 1
            //console.log(`check Points 1: ${points} Samenumber: ${sameNumbers}`)
        }
        if (dice2Number === i) {
            sameNumbers = sameNumbers + 1
            //console.log(`check Points 2: ${points} Samenumber: ${sameNumbers}`)
        }
        if (dice3Number === i) {
            sameNumbers = sameNumbers + 1
            //console.log(`check Points 3: ${points} Samenumber: ${sameNumbers}`)
        }
        if (dice4Number === i) {
            sameNumbers = sameNumbers + 1
            //console.log(`check Points 4: ${points} Samenumber: ${sameNumbers}`)
        }
        if (dice5Number === i) {
            sameNumbers = sameNumbers + 1
            //console.log(`check Points 5: ${points} Samenumber: ${sameNumbers}`)
        }
        if (dice6Number === i) {
            sameNumbers = sameNumbers + 1
            //console.log(`check Points 6: ${points} Samenumber: ${sameNumbers}`)
        }
        if (sameNumbers === 3 && i === 1) {
            points = points + 300
            numberSetAside = numberSetAside + 3
            //console.log(`check 1 ${points}`)
        }
        if (sameNumbers === 3 && i === 2) {
            points = points + 200
            numberSetAside = numberSetAside + 3
            //console.log(`check 2 ${points}`) 
        }
        if (sameNumbers === 3 && i === 3) {
            points = points + 300
            numberSetAside = numberSetAside + 3
        }
        if (sameNumbers === 3 && i === 4) {
            points = points + 400
            numberSetAside = numberSetAside + 3
        }
        if (sameNumbers === 3 && i === 5) {
            points = points + 500
            numberSetAside = numberSetAside + 3
        }
        if (sameNumbers === 3 && i === 6) {
            points = points + 600
            numberSetAside = numberSetAside + 3
        }
        if (sameNumbers === 4) {
            points = points + 1000
            numberSetAside = numberSetAside + 4
            //console.log(`check 4 ${points}`)
        }
        if (sameNumbers === 5) {
            points = points + 2000
            numberSetAside = numberSetAside + 5
            //console.log(`check 5 ${points}`) 
        }
        if (sameNumbers === 6) {
            points = points + 3000
            numberSetAside = numberSetAside + 6
            //console.log(`check Points: ${points} Samenumber: ${sameNumbers}`)
        }
        if (i === 1 && sameNumbers <= 2) {
            points = points + 100 * sameNumbers
            console.log(`${points}`)
            numberSetAside = numberSetAside + sameNumbers
        }
        if (i === 5 && sameNumbers <= 2) {
            points = points + 50 * sameNumbers
            numberSetAside = numberSetAside + sameNumbers
            console.log(`${points} samenumbers: ${sameNumbers} i: ${i}`)
        }
        if (sameNumbers === 1) {
            sameNumbersTotal = sameNumbersTotal + 1
        }
        if (sameNumbers === 2) {
            numberofPairs = numberofPairs + 1
        }
        if (sameNumbers === 4) {
            numberofFours = numberofFours + 1
        }
        if (sameNumbers === 3) {
            numberofTriplets = numberofTriplets + 1
        }

    }//end of loop i
    console.log(`numberSetAside after loop: ${numberSetAside}`)
    console.log(`points after finishing loop: ${points}`)
    if (sameNumbersTotal === 6) {
        points = points + 1500
        console.log(`points after check 1: ${points}`)
        numberSetAside = numberSetAside + 6
    }
    if (numberofPairs === 3) {
        points = points + 1500
        console.log(`points after check 2: ${points}`)
        numberSetAside = numberSetAside + 6
        }
    if (numberofPairs === 1 && numberofFours === 1) {
    points = points + 1500
    console.log(`points after check 3: ${points}`)
    numberSetAside = numberSetAside + 2
    }
    if (numberofTriplets === 2) {
        points = points + 2500
        console.log(`points after check 4: ${points}`)
    }

    console.log(`Current Points: ${points}`)
    console.log(`Dice Put Aside: ${numberSetAside}`)
    scoretext.innerHTML = `Current Score: ${points}`
    if (numberSetAside === 6) {
        gameover.classList.remove('remove')
    }
}
//end of function countScore


diceroll.addEventListener('click', rollDice)