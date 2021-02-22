const storedLang = localStorage.getItem('lang');

function checkBrowserLang() {
    const lang = navigator.language
    if(/^en.*/.test(lang)){
        localStorage.setItem('lang', 'en');
        window.location.href="en";
    } else if (/^fr.*/.test(lang)) {
        localStorage.setItem('lang', 'fr');
    }
}

switch (storedLang) {
    case 'en':
        window.location.href="en";
        break;
    case 'fr':
        break;
    default:
        checkBrowserLang()
        break;
}