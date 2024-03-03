const button=document.querySelector('button');
let res=document.createElement('div');
res.id='result';
document.getElementById('wrapper').appendChild(res);
button.addEventListener('click',displaystats);
function displaystats(){
    const input=document.getElementById("input");
    const city=input.options[input.selectedIndex].value;
    let pop=0,lit=0,lang=0,con=0;
    switch(city){
        case 'Bangalore':
            con='Indian';
            pop=9284928;
            lit=89.88;
            lang='Kannada';
            break;
        case 'NYC':
            con='American';
            pop=284928;
            lit=70.08;
            lang='English';
            break;
        case 'Berlin':
            con='German';
            pop=73726;
            lit=98.08;
            lang='Deutsch';
            break;
        case 'Barcelona':
            con='Spain';
            pop=937482;
            lit=95.76;
            lang='Espanol';
            break;
    }
    let text =`The ${con} city of ${city} has a population of ${pop}. Language spoken is ${lang} and literacy rate is ${lit}%.`;
    document.getElementById('result').innerHTML=text;
}
