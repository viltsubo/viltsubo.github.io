let cookieCount = 0

localStorage.setItem('cookieCount', 0)

function cookieClick() {
    let cookieCounter = document.getElementById('cookie-counter')

    let cookieCount = localStorage.getItem('cookieCount')
    cookieCount++

    localStorage.setItem('cookieCount', cookieCount)
    cookieCounter.textContent = cookieCount
}