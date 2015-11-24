var AutoLaunch = require('auto-launch');

var nwAppLauncher = new AutoLaunch({
    name: 'My node webkit app yao'
});


var addClickHandler = function(id, callback){
    document.getElementById(id).addEventListener('click', callback);
};

addClickHandler('check', function(){
    nwAppLauncher.isEnabled(function(isEnabled){
        alert(isEnabled ? 'enabled': 'disabled');
    });
});

addClickHandler('enable', function(){
    nwAppLauncher.enable(function(error){
        if(error){
            console.error(error);
            alert('Error, check console');
        }
        else {
            alert('enable done')
        }
    });
});

addClickHandler('disable', function(){
    nwAppLauncher.disable(function(error){
        if(error){
            console.error(error);
            alert('Error, check console');
        }
        else {
            alert('disable done')
        }
    });
});