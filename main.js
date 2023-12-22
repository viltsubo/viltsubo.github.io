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


const imgs = ['imgs/1.jpg', 'imgs/2.jpg', 'imgs/3.jpg', 'imgs/4.jpg', 'imgs/5.jpg', 'imgs/6.jpg', 'imgs/7.jpg', 'imgs/8.jpg', 'imgs/9.jpg', 'imgs/10.jpg', 'imgs/11.jpg', 'imgs/12.jpg', 'imgs/13.jpg', 'imgs/14.jpg', 'imgs/15.jpg', 'imgs/16.jpg', 'imgs/17.jpg', 'imgs/18.jpg', 'imgs/19.jpg', 'imgs/20.jpg', 'imgs/21.jpg', 'imgs/22.jpg', 'imgs/23.jpg', 'imgs/24.jpg', 'imgs/25.jpg', 'imgs/26.jpg', 'imgs/27.jpg', 'imgs/28.jpg', 'imgs/29.jpg', 'imgs/30.jpg', 'imgs/31.jpg', 'imgs/32.jpg', 'imgs/33.jpg', 'imgs/34.jpg', 'imgs/35.jpg', 'imgs/36.jpg', 'imgs/37.jpg', 'imgs/38.jpg', 'imgs/39.jpg', 'imgs/40.jpg', 'imgs/41.jpg', 'imgs/42.jpg', 'imgs/43.jpg', 'imgs/44.jpg', 'imgs/45.jpg', 'imgs/46.jpg', 'imgs/47.jpg', 'imgs/48.jpg']
const imgNumber = 48
const audios = ['audio/SFX 1.mp3', 'audio/SFX 2.mp3', 'audio/SFX 3 ALL.mp3', 'audio/SFX 3 PART.mp3', 'audio/SFX 4.mp3', 'audio/SFX 5.mp3', 'audio/SFX 6.mp3', 'audio/SFX 7.mp3', 'audio/SFX 8.mp3']
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
    displayCPS.innerHTML = 'Ronjan läpsäisyä sekunnissa: ' + Math.floor( ((autoclickerAmount * autoclickerCPS) + (grandmaAmount * grandmaCPS) + (farmAmount * farmCPS) + (mineAmount * mineCPS) + (factoryAmount * factoryCPS)) * 10) / 10
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
        displayUpgradeClicker.innerHTML = "Hinta: " + formatLargeNumber(upgradeClickerCost)

        let displayUpgradeClickerMultiplier = document.getElementById('display-upgrade-clicker-multiplier')
        displayUpgradeClickerMultiplier.innerHTML = multiplier + 'X lyönti'
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
        displayAutoclicker.innerHTML = 'Hinta: ' + formatLargeNumber(autoclickerCost)

        let displayAutoclickerAmount = document.getElementById('display-autoclicker-amount')
        displayAutoclickerAmount.innerHTML = 'Level: ' + autoclickerAmount

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
        displayGrandma.innerHTML = 'Hinta: ' + formatLargeNumber(grandmaCost)

        let displayGrandmaAmount = document.getElementById('display-grandma-amount')
        displayGrandmaAmount.innerHTML = 'Level: ' + grandmaAmount

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
        displayFarm.innerHTML = 'Hinta: ' + formatLargeNumber(farmCost)

        let displayFarmAmount = document.getElementById('display-farm-amount')
        displayFarmAmount.innerHTML = 'Level: ' + farmAmount

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
        displayMine.innerHTML = 'Hinta: ' + formatLargeNumber(mineCost)

        let displayMineAmount = document.getElementById('display-mine-amount')
        displayMineAmount.innerHTML = 'Level: ' + mineAmount

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
        displayFactory.innerHTML = 'Hinta: ' + formatLargeNumber(factoryCost)

        let displayFactoryAmount = document.getElementById('display-factory-amount')
        displayFactoryAmount.innerHTML = 'Level: ' + factoryAmount

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


// ChatGPT made a navbar
function toggleNavbar() {
    var navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.style.left = navbarLinks.style.left === '0%' ? '-100%' : '0%';
}