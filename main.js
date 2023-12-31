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
    localStorage.setItem('factoryCost', 35000)

    localStorage.setItem('accessGranted', 0)
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

let surpriseCost = 150000


const autoclickerCPS = 0.5
const grandmaCPS = 2
const farmCPS = 11
const mineCPS = 62
const factoryCPS = 260


const imgs = ['imgs/1.jpg', 'imgs/2.jpg', 'imgs/3.jpg', 'imgs/4.jpg', 'imgs/5.jpg', 'imgs/6.jpg', 'imgs/7.jpg', 'imgs/8.jpg', 'imgs/9.jpg', 'imgs/10.jpg', 'imgs/11.jpg', 'imgs/12.jpg', 'imgs/13.jpg', 'imgs/14.jpg', 'imgs/15.jpg', 'imgs/16.jpg', 'imgs/17.jpg', 'imgs/18.jpg', 'imgs/19.jpg', 'imgs/20.jpg', 'imgs/21.jpg', 'imgs/22.jpg', 'imgs/23.jpg', 'imgs/24.jpg', 'imgs/25.jpg', 'imgs/26.jpg', 'imgs/27.jpg', 'imgs/28.jpg', 'imgs/29.jpg', 'imgs/30.jpg', 'imgs/31.jpg', 'imgs/32.jpg', 'imgs/33.jpg', 'imgs/34.jpg', 'imgs/35.jpg', 'imgs/36.jpg', 'imgs/37.jpg', 'imgs/38.jpg', 'imgs/39.jpg', 'imgs/40.jpg', 'imgs/41.jpg', 'imgs/42.jpg', 'imgs/43.jpg', 'imgs/44.jpg', 'imgs/45.jpg', 'imgs/46.jpg', 'imgs/47.jpg', 'imgs/48.jpg', 'imgs/49.jpg']
const imgNumber = 49
const audios = ['audio/SFX 1.mp3', 'audio/SFX 2.mp3', 'audio/SFX 3 ALL.mp3', 'audio/SFX 3 PART.mp3', 'audio/SFX 4.mp3', 'audio/SFX 5.mp3', 'audio/SFX 6.mp3', 'audio/SFX 7.mp3', 'audio/SFX 8.mp3', 'audio/SFX 9.mp3', 'audio/SFX 10.mp3', 'audio/SFX 11.mp3', 'audio/SFX 12.mp3', 'audio/SFX 13.mp3', 'audio/SFX 14.mp3', 'audio/SFX 15.mp3', 'audio/SFX 16.mp3', 'audio/SFX 17.mp3', 'audio/SFX 18.mp3', 'audio/SFX 19.mp3', 'audio/SFX 20.mp3', 'audio/SFX 21.mp3', 'audio/SFX 22.mp3', 'audio/SFX 23.mp3', 'audio/SFX 24.mp3']
const audioNumber = 25


// Handles when cookie is clicked
function cookieClicked() {

    // Adds multiplier amount of cookies to the total count, saves it and displays it
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
        
        // Plays the surprise audio
        let cookieClickerSurpriseAudio = new Audio(audios[Math.floor(Math.random() * audioNumber)])
        cookieClickerSurpriseAudio.play()
    }

    // Plays audio every time cookie is clicked
    let cookieClickerAudio = new Audio('audio/SFX 1.mp3')
    cookieClickerAudio.play()
}


// Updates the display of total cookies
function displayCookies() {
    let displayCookies = document.getElementById('display-cookies')
    displayCookies.textContent = formatLargeNumber(Math.round(cookieCount))
}


// Updates the display of CPS
function displayCPS() {
    let displayCPS = document.getElementById('display-cps')

    // Calculates the CPS
    displayCPS.innerHTML = 'Ronjan läpsäisyä sekunnissa: ' + Math.floor( ((autoclickerAmount * autoclickerCPS) + (grandmaAmount * grandmaCPS) + (farmAmount * farmCPS) + (mineAmount * mineCPS) + (factoryAmount * factoryCPS)) * 10) / 10
}


// Kaikki clicked funktiot menevät saman kaavan mukaan
function upgradeClickerClicked() {
    // Tarkista, onko tarpeeksi keksejä
    if (cookieCount >= upgradeClickerCost) {

        // Tee matikka uusien keksien määräksi, uudeksi hinnaksi ja uudeksi tuotteiden määräksi
        cookieCount -= upgradeClickerCost
        multiplier *= 2
        upgradeClickerCost *= 10

        // Tallenna uudet tiedot ja päivitä keksien määrä
        localStorage.setItem('cookieCount', cookieCount)
        localStorage.setItem('multiplier', multiplier)
        localStorage.setItem('upgradeClickerCost', upgradeClickerCost)
        displayCookies()

        // Päivitä hinta ja tuotteiden lukumäärä kauppaan
        let displayUpgradeClicker = document.getElementById('display-upgrade-clicker')
        displayUpgradeClicker.innerHTML = "Hinta: " + formatLargeNumber(upgradeClickerCost)

        let displayUpgradeClickerMultiplier = document.getElementById('display-upgrade-clicker-multiplier')
        displayUpgradeClickerMultiplier.innerHTML = multiplier + 'X lyönti'

        // Play a sound of purchase
        let purchaseAudio = new Audio('audio/SFX BUY.mp3')
        purchaseAudio.play()
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

        let purchaseAudio = new Audio('audio/SFX BUY.mp3')
        purchaseAudio.play()

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

        let purchaseAudio = new Audio('audio/SFX BUY.mp3')
        purchaseAudio.play()

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

        let purchaseAudio = new Audio('audio/SFX BUY.mp3')
        purchaseAudio.play()

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

        let purchaseAudio = new Audio('audio/SFX BUY.mp3')
        purchaseAudio.play()

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

        let purchaseAudio = new Audio('audio/SFX BUY.mp3')
        purchaseAudio.play()

        displayCPS()
    }
}


// Handles the surprise button click
function surpriseClicked() {
    let aG = parseFloat(localStorage.getItem('accessGranted'))
    if (aG > 5) {
        // Play a celebratory sound
        let celebratoryAudio = new Audio('audio/SFX SURPRISE.mp3')
        celebratoryAudio.play()

        // Time for the audio to play
        setTimeout(function() {
            window.location.href = "/slideshow.html"
        }, 6000)

    } else if (cookieCount >= surpriseCost) {
        // Check if there is enough cookies (above), do the math and save the values
        cookieCount -= surpriseCost

        localStorage.setItem('cookieCount', cookieCount)
        localStorage.setItem('accessGranted', 10)
        displayCookies()

        // Play a celebratory sound
        let celebratoryAudio = new Audio('audio/SFX SURPRISE.mp3')
        celebratoryAudio.play()

        // Time for the audio to play
        setTimeout(function() {
            window.location.href = "/slideshow.html"
        }, 6000)
    }
}


// Handles the autoclick incrementation to the total cookie count
setInterval(function() {
    // Counts the CPS (tried in separated function but got errors)
    cookieCount = cookieCount + (autoclickerAmount * autoclickerCPS) + (grandmaAmount * grandmaCPS) + (farmAmount * farmCPS) + (mineAmount * mineCPS) + (factoryAmount * factoryCPS)

    // Saves the values and updates the view
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
