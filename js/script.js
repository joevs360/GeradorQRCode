p1 ="";
op ="";

function verificarNumero(str){
     return str.replaceAll(/[^0-9]/g,'')
}

function tirarEspaco(str){
     return str.replaceAll(' ','')
}
function telefoneConfig(){
    telefone = document.getElementById('texto');
    numero = verificarNumero(telefone.value);
    saida="";
    for(i =0 ; i <numero.length; i++){
        switch(i){
            case 0: saida = '('+numero[i]; break;
            case 1: saida += numero[i]+") "; break;
            case 5: 
                  if(numero.length < 11){
                    saida += numero[i]+'-'
                  }
                  else{
                    saida += numero[i]
                  }
                  break;
            case 6:  
                  if(numero.length == 11){
                    saida += numero[i]+'-'
                  }
                  else{
                    saida += numero[i]
                  }
                  ; break;
            default: saida += numero[i];
        }
    }
    document.getElementById('texto').value =saida;
}

function gerarQr(){
    p2 =  document.getElementById("texto").value;
    if(p2!= ""){
        if(op == '1' ){
            if(p2.includes("https")|| p2.includes("http")){p1=""; } 
            else{p1 = "https://"}
        }
        else if(op == '2'){
            p2 = tirarEspaco(p2);
        }
        else if(op == '3'){
            p2 = verificarNumero(p2);
        }
        else if(op == '4'){
            rad = document.getElementsByName("cript");
            p3 = document.getElementById("senha").value
            for(i = 0; i<rad.length;i++ ){
                if(rad[i].checked){
                    crip = rad[i].value;
                }
            }
            p2 ="WIFI:T:"+crip+";S:"+p2+";P:"+p3+";H:;"
            
        }
        conteudo=p1 + p2;
        qr = "<img src = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl="+conteudo+"' max-width='100%' width='300'/>";
        document.getElementById('qrcode').innerHTML = qr;
    }
    else{
        alert("Preencha os campos necessários");
    }
}
function selecionarOpcao(){
    v = "";
    op = document.getElementById("tipo").value;
    switch(op){
        case '1':
             v= "<input class='form-control' id='texto' rows='3' placeholder='www.seusite.com.br'></input>";
             p1 ="https://";
           break;
        case '2' :
           v= "<input class='form-control' id='texto' rows='3' placeholder='seu@email.com'></input>";
           p1 ="mailto:";
           break;
        case '3' :
           v= "<input class='form-control' id='texto' rows='3' placeholder='(00) 00000-0000'  onkeyup='telefoneConfig()' maxlength='15'></input>";
           p1 ="tel:";
           break;
        case '4' :
           v= "<label for='texto'>SSID</label>";
           v+= "<input class='form-control' id='texto' rows='3' placeholder='Nome da Rede'></input>";
           v+= "<label for='senha'>Senha</label>";
           v+= "<input class='form-control' id='senha' rows='3' placeholder='senha'></input>";
           v+= "<label for='senha'>Criptografia</label><br>";
           v+= "<div class='form-check form-check-inline'><input class='form-check-input' type='radio' name='cript' id='cript' value='nopass'>Nenhuma</div>";
           v+= "<div class='form-check form-check-inline'><input class='form-check-input' type='radio' name='cript' id='cript' value='WPA' checked>WPA/WPA2</div>";
           v+= "<div class='form-check form-check-inline'><input class='form-check-input' type='radio' name='cript' id='cript' value='WEP'>WEP</div>";
           p1 ="";
           break;
        default: 
           v= "<textarea class='form-control' id='texto' rows='3' placeholder='Texto...'></textarea>";
           break;
    }
    document.getElementById("divInformacao").innerHTML = v;
    document.getElementById("qrcode").innerHTML="";
}