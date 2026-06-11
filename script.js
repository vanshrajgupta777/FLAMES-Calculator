const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
button=document.getElementById('button');

an=document.getElementById('an');
button.addEventListener('mousedown',function(){
    this.textContent='❤️❤️❤️❤️';
});
button.addEventListener('mouseleave',function(){
    this.textContent='CHECK My Flames!';
});
button.addEventListener('mouseup',function(){
    this.textContent='CHECK My Flames!';
});
button.addEventListener('click',async function(){
    let boy=document.getElementById('boy').value.toLowerCase().replace(/\s+/g,'');
    let girl=document.getElementById('girl').value.toLowerCase().replace(/\s+/g,'');
    let B=boy.split('');
    let G=girl.split('');
    for(let i=0;i<B.length;i++){
        let match=G.indexOf(B[i]);
        if(match!==-1){
            B.splice(i,1);
            G.splice(match,1);
            i--;
        }
    }
    let n=B.length+G.length;
    let F=['F','L','A','M','E','S'];
    let i=-1;
    let N=0;
    let index = 0;
    an.textContent = F.join(' ');

    while (F.length > 1) {
        // Find the index of the letter to remove
        index = (index + n - 1) % F.length;
        
        // Handle negative index if n % F.length was 0
        if (index < 0) {
            index = F.length - 1;
        }
        await sleep(300);
        // Remove the letter
        F.splice(index, 1);
        an.textContent = F.join(' ');
        
        
    }
    await sleep(1000);
    an.textContent = `✨ ${F[0]} ✨`;
});