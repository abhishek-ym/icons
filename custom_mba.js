document.getElementById('ym-notification').style.bottom = '70px';
var observer = new MutationObserver(function(mutations) {
    document.getElementById('ym-notification').style.bottom = '70px'; 
});
var target = document.getElementById('ym-notification');
observer.observe(target, { attributes : true, attributeFilter : ['style'] });
