let iconPath = "/img/favicon_c5088e888c97ad440a61d247596f88e5.png";

let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        document.querySelector('#favicon').setAttribute('href', iconPath);
    })
})

observer.observe(document.querySelector('head'), {
    childList: true
});