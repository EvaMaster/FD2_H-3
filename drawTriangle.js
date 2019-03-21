function drawTriangle(a,b){
    let z='',
        i;
    if(b<3){
        b=3;
    };
    for(i=0;i<b;i++){
            z+=a;
            console.log(z);
    }
};
drawTriangle('#',6);


function toCapitalCase(text){
        let textCapitalCase =text.replace(/\b\w/g, l => l.toUpperCase());
        console.log(textCapitalCase);
    
    };
    
    toCapitalCase('Lorem ipsum dolor sit amet, consectetur adipisicing elit');