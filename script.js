window.addEventListener('load', function(){
    let block= document.getElementById('block');
    let scaleCoeff=1;
    let rotateDeg=0;



    //positon y
    let posY= document.getElementById('pos-y');
    posY.addEventListener('input', function(){
        block.style.top = posY.value+'px';
    })
    //position x
    let posx= document.getElementById('pos-x');
    posx.addEventListener('input', function(){
        block.style.left = posx.value+'px';
    })
    //size y 
    let size= document.getElementById('size-id');
    size.addEventListener('input', function(){
        scaleCoeff=size.value;
        block.style.transform = `scale(${scaleCoeff}) rotate(${rotateDeg}deg)`;
    })
    //opacity
    let opacity= document.getElementById('opacity-id');
    opacity.addEventListener('input', function(){
        block.style.opacity = opacity.value;
    })
    let selector= document.getElementById('shape-id');
    let okbutton= document.getElementById('ok-id');
    okbutton.addEventListener('click', function(){
        let option=selector.value;
        if(option==='1'){
            block.style.borderRadius='0';
            rotateDeg=0;
            block.style.transform = `scale(${scaleCoeff}) rotate(${rotateDeg}deg)`;


        }
        else if(option==='2'){
            block.style.borderRadius='50%';

            
        }
        else if(option==='3'){
            block.style.borderRadius='0';
            rotateDeg=45;
            block.style.transform = `scale(${scaleCoeff}) rotate(${rotateDeg}deg)`;
            
        }
    })
    let hex=document.getElementById('hex-id');
    hex.addEventListener('keyup',function(e){
        if(e.key==='Enter'){
            block.style.backgroundColor = `#${hex.value}`;
        }
    })

    let rgbaR=document.getElementById('r');
    let rgbaG=document.getElementById('g');
    let rgbaB=document.getElementById('b');
    let rgbaA=document.getElementById('a');

    let rgbainputs=document.querySelectorAll('.rgba-block input');
    rgbainputs.forEach(function(events){
        events.addEventListener('input',function(){
            block.style.backgroundColor = `rgba(${rgbaR.value},${rgbaG.value},${rgbaB.value},${rgbaA.value})`;
        })
    })


})