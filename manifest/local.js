window.addEventListener('load', function(e) {
    window.applicationCache.addEventListener('updateready', function (e) {      //manifest有更新，则把相应的appCache重置
        console.log(window.applicationCache.status);
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY){
            window.applicationCache.swapCache();
            if(confirm('A new version of this site is available.Load it?')){
                window.location.reload();
            }
        }
        else{
            console.log('manifest didn\'t change');
        }
    },false);
}, false);