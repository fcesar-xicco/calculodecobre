function verificar(){
    //window.alert("deu certo")
    var qtdmetros = window.document.getElementById("qtdmetro")
    var resp = window.document.getElementById("resp")
    //resp.innerText ='Oi'

    var valorkg = 89.90
    var valordescont = 84.90
    var valorkgp = 84.90
    var valordescontp = 79.90
  
   if(qtdmetros.value.length == 0){
     window.alert("[ERROR] digite todas as informações corretamente")
   }
   else {
     var respbit = window.document.getElementsByClassName("cbit")
     if(respbit[0].checked){
        var bitselect = '1/4'
        var pesoselec = 0.130
      }else if(respbit[1].checked){
       var bitselect = '3/8'
        var pesoselec = 0.200
     }else if(respbit[2].checked){
        var bitselect = '1/2'
        var pesoselec = 0.270
     }else if(respbit[3].checked){
        var bitselect = '5/8'
        var pesoselec = 0.350
     }else if(respbit[4].checked) {
        var bitselect = '3/4'
        var pesoselec = 0.410
     }
   

   if(Number(qtdmetros.value) * pesoselec < 3.7){
      var valorkg = 89.90
      var valordescont = 84.90
      
   }else{
      var valorkg = 84.90
      var valordescont = 79.90
   }
        
      var qtdmetros = window.document.getElementById("qtdmetro")
      var total = Number(qtdmetros.value) * pesoselec
      resp.innerText = 
        `${Number(qtdmetros.value)} metros de cano de cobre ${bitselect}.
        Peso Total: ${total.toFixed(2)}kg
        
        Valor a prazo: R$ ${(total*valorkg).toFixed(2)}
        Valor a vista: R$ ${(total*valordescont).toFixed(2)}
        
        *Valor do metro sai por: ${(pesoselec * valorkg).toFixed(2)}`

        resp.style.background = "white"
        resp.style.borderRadius = "10px"
        resp.style.border = "solid black 2px"
        resp.style.padding = "15px 10px"
        resp.style.fontWeight = "700"
        resp.style.textAlign = 'center'
     
      } 
  }