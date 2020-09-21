var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
window.router = new Navigo(root, useHash, hash);

window.router.on('/old-girl-friend', function() {
    console.log('bạn vừa gặp lại nyc');
}).resolve();

window.router.on('/crush', function(){
    console.log('bạn vừa gặp crush. Muốn tỏ tình ko🧡🧡');
}).resolve();