/*inicializálás*/

var d =new Date();
function kezdet()
{
    document.getElementById('ko').innerHTML = '<img src="img/ko.png" alt="Kő" ondblclick="valaszt(\'ko\')">';
    document.getElementById('ollo').innerHTML = '<img src="img/ollo.png" alt="Ollo" ondblclick="valaszt(\'ollo\')">';
    document.getElementById('papir').innerHTML = '<img src="img/papir.png" alt="Papir" ondblclick="valaszt(\'papir\')">';
        for (var i = 0; i < 3; i++){
            document.getElementsByTagName('img')[i].style.height = '100px';
            document.getElementsByTagName('img')[i].style.width = 'auto';
        }
        document.getElementById('aktdatum').innerHTML = "Idő: " + d.getFullYear() + "." + (d.getMonth() + 1) + "." +
        d.getDate() + ".\t"+d.getHours()+" óra, "+ d.getMinutes()+ " perc"  ;
		
		nyertj = 0;
		nyertsz = 0;
}

kezdet();

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function valaszt(jkep)
{
    var nyertj = 0;
    var nyertsz = 0;
    var gkep = "";
    var eredmeny;
    var gepvalasz = getRndInteger(1, 3)
    switch (gepvalasz) {
        case 1:
        gkep ="ko";
        break;
        case 2:
        gkep ="ollo";
        break;
        case 3:
        gkep ="papir";
        break;
    }    
    


    
    /* és 3 között választ*/
    /*inicializálás*/
	
    /*switch case...*/
    
    var jatekos = '<br><img src="img/' + jkep + '.png" alt="JátékosVálasza">';
    var gep = '<br><img src="img/' + gkep + '.png" alt="GépVálasza">';
    
    document.getElementById('gvalaszt').innerHTML = 'Gép választása: '+gep;
    document.getElementById('jvalaszt').innerHTML = 'Játékos választása: '+jatekos;
    
    /*eredmény kiértékelése*/
}



function vegsoeredmeny()
{
    var szoveg="Nyertes játszmák: \nJátékos: "+nyertj+"\nGép "+nyertsz;
    alert(szoveg);
}