// Checks if the user has played before -> If not, cookies set to 0
if (! localStorage.getItem('cookieCount')) {
    localStorage.setItem('cookieCount', 0)
    localStorage.setItem('multiplier', 1)
    localStorage.setItem('upgradeClickerCost', 100)

    localStorage.setItem('autoclickerAmount', 0)
    localStorage.setItem('autoclickerCost', 15)

    localStorage.setItem('grandmaAmount', 0)
    localStorage.setItem('grandmaCost', 100)

    localStorage.setItem('farmAmount', 0)
    localStorage.setItem('farmCost', 1100)

    localStorage.setItem('mineAmount', 0)
    localStorage.setItem('mineCost', 12000)

    localStorage.setItem('factoryAmount', 0)
    localStorage.setItem('factoryCost', 130000)
}


let cookieCount = parseFloat(localStorage.getItem('cookieCount'))
let multiplier = parseFloat(localStorage.getItem('multiplier'))
let upgradeClickerCost = parseFloat(localStorage.getItem('upgradeClickerCost'))

let autoclickerAmount = parseFloat(localStorage.getItem('autoclickerAmount'))
let autoclickerCost = parseFloat(localStorage.getItem('autoclickerCost'))

let grandmaAmount = parseFloat(localStorage.getItem('grandmaAmount'))
let grandmaCost = parseFloat(localStorage.getItem('grandmaCost'))

let farmAmount = parseFloat(localStorage.getItem('farmAmount'))
let farmCost = parseFloat(localStorage.getItem('farmCost'))

let mineAmount = parseFloat(localStorage.getItem('mineAmount'))
let mineCost = parseFloat(localStorage.getItem('mineCost'))

let factoryAmount = parseFloat(localStorage.getItem('factoryAmount'))
let factoryCost = parseFloat(localStorage.getItem('factoryCost'))


const autoclickerCPS = 0.1
const grandmaCPS = 1
const farmCPS = 8
const mineCPS = 47
const factoryCPS = 260


const imgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
const imgNumber = 5
const audios = ['SFX 1.mp3', 'SFX 2.mp3', 'SFX 3 ALL.mp3', 'SFX 3 PART.mp3', 'SFX 4.mp3', 'SFX 5.mp3', 'SFX 6.mp3', 'SFX 7.mp3', 'SFX 8.mp3']
const audioNumber = 9



function cookieClicked() {
    cookieCount = cookieCount + multiplier

    localStorage.setItem('cookieCount', cookieCount)

    displayCookies()


    // 10% chance of getting a random img every click. Equal chance to get any img on the list
    // 10% chance of getting a random audio effect. Equal chance to get any audio on the list
    let i = Math.random()
    if (i >= 0.9) {
        // Img
        let cookieClickerImg = document.getElementById('cookie-clicker-img')
        cookieClickerImg.src = imgs[Math.floor(Math.random() * imgNumber)]
        
        // Audio
        let cookieClickerSurpriseAudio = document.getElementById('cookie-clicker-surprise-audio')
        cookieClickerSurpriseAudio.src = audios[Math.floor(Math.random() * audioNumber)]
        cookieClickerSurpriseAudio.play()
    }

    let cookieClickerAudio = document.getElementById('cookie-clicker-audio')
    cookieClickerAudio.play()
}


function displayCookies() {
    let displayCookies = document.getElementById('display-cookies')
    displayCookies.textContent = formatLargeNumber(Math.round(cookieCount))
}


function displayCPS() {
    let displayCPS = document.getElementById('display-cps')

    // Calculates the CPS
    displayCPS.innerHTML = 'Ronjaa sekunnissa: ' + Math.floor( ((autoclickerAmount * autoclickerCPS) + (grandmaAmount * grandmaCPS) + (farmAmount * farmCPS) + (mineAmount * mineCPS) + (factoryAmount * factoryCPS)) * 10) / 10
}


function upgradeClickerClicked() {
    if (cookieCount >= upgradeClickerCost) {

        cookieCount -= upgradeClickerCost
        multiplier *= 2
        upgradeClickerCost *= 10

        localStorage.setItem('cookieCount', cookieCount)
        localStorage.setItem('multiplier', multiplier)
        localStorage.setItem('upgradeClickerCost', upgradeClickerCost)
        displayCookies()

        let displayUpgradeClicker = document.getElementById('display-upgrade-clicker')
        displayUpgradeClicker.innerHTML = "Upgrade clicker cost: " + formatLargeNumber(upgradeClickerCost)
    }
}


function autoclickerClicked() {
    if (cookieCount >= autoclickerCost) {

        cookieCount -= autoclickerCost
        autoclickerAmount += 1
        autoclickerCost = Math.round(1.15 * autoclickerCost)

        localStorage.setItem('cookieCount', cookieCount)
        localStorage.setItem('autoclickerAmount', autoclickerAmount)
        localStorage.setItem('autoclickerCost', autoclickerCost)
        displayCookies()

        let displayAutoclicker = document.getElementById('display-autoclicker')
        displayAutoclicker.innerHTML = 'Autoclicker cost: ' + formatLargeNumber(autoclickerCost)

        displayCPS()
    }
}

function grandmaClicked() {
    if (cookieCount >= grandmaCost) {

        cookieCount -= grandmaCost
        grandmaAmount += 1
        grandmaCost = Math.round(1.15 * grandmaCost)

        localStorage.setItem('cookieCount', cookieCount)
        localStorage.setItem('grandmaAmount', grandmaAmount)
        localStorage.setItem('grandmaCost', grandmaCost)
        displayCookies()

        let displayGrandma = document.getElementById('display-grandma')
        displayGrandma.innerHTML = 'Grandma cost: ' + formatLargeNumber(grandmaCost)

        displayCPS()
    }
}

function farmClicked() {
    if (cookieCount >= farmCost) {

        cookieCount -= farmCost
        farmAmount += 1
        farmCost = Math.round(1.15 * farmCost)

        localStorage.setItem('cookieCount', cookieCount)
        localStorage.setItem('farmAmount', farmAmount)
        localStorage.setItem('farmCost', farmCost)
        displayCookies()

        let displayFarm = document.getElementById('display-farm')
        displayFarm.innerHTML = 'Farm cost: ' + formatLargeNumber(farmCost)

        displayCPS()
    }
}

function mineClicked() {
    if (cookieCount >= mineCost) {

        cookieCount -= mineCost
        mineAmount += 1
        mineCost = Math.round(1.15 * mineCost)

        localStorage.setItem('cookieCount', cookieCount)
        localStorage.setItem('mineAmount', mineAmount)
        localStorage.setItem('mineCost', mineCost)
        displayCookies()

        let displayMine = document.getElementById('display-mine')
        displayMine.innerHTML = 'Mine cost: ' + formatLargeNumber(mineCost)

        displayCPS()
    }
}

function factoryClicked() {
    if (cookieCount >= factoryCost) {

        cookieCount -= factoryCost
        factoryAmount += 1
        factoryCost = Math.round(1.15 * factoryCost)

        localStorage.setItem('cookieCount', cookieCount)
        localStorage.setItem('factoryAmount', factoryAmount)
        localStorage.setItem('factoryCost', factoryCost)
        displayCookies()

        let displayFactory = document.getElementById('display-factory')
        displayFactory.innerHTML = 'Factory cost: ' + formatLargeNumber(factoryCost)

        displayCPS()
    }
}


// Handles the autoclick incrementation to the total cookie count
setInterval(function() {
    // Counts the CPS (tried in separated function but got errors)
    cookieCount = cookieCount + (autoclickerAmount * autoclickerCPS) + (grandmaAmount * grandmaCPS) + (farmAmount * farmCPS) + (mineAmount * mineCPS) + (factoryAmount * factoryCPS)

    localStorage.setItem('cookieCount', cookieCount)
    displayCookies()
    displayCPS()
}, 1000)


// ChatGPT made a number formatter
function formatLargeNumber(number) {
    const numberString = String(number);
    const chunks = [];

    for (let i = numberString.length; i > 0; i -= 3) {
        chunks.unshift(numberString.slice(Math.max(0, i - 3), i));
    }

    return chunks.join(' ');
}