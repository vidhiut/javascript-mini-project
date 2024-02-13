var addfrnd=document.querySelector('#add');
var remfrnd=null;


addfrnd.addEventListener('click',function(){

    addfrnd.innerHTML='Following';

    // Check if "Remove" button already exists
    if(!remfrnd)
    {
        // Create a "Remove" button if it doesn't exist
        remfrnd=document.createElement('button');
        remfrnd.id='remove';
        remfrnd.textContent='Remove';
        //parent of remove frnd button is follow-btn
        var parentfollow=document.querySelector('#follow-btn');
        parentfollow.appendChild(remfrnd);
        remove.style.backgroundColor='#BFD8AF';
        remove.style.color='#3C3633';

        //remove button remove
        remfrnd.addEventListener('click',function(){
        addfrnd.innerHTML='Follow';
        parentfollow.removeChild(remfrnd);
        // Reset remfrnd variable to null
        remfrnd = null;
        });
    }
});



