var name=prompt("Qual o seu nome?");
    
        if (confirm ("Quer abrir a calculadora?")){
        
        var num1=prompt("Digite o primeiro número");
        var num2=prompt("Digite o segundo número");
        var soma=parseFloat(num1)+parseFloat(num2);
        var subtracao=parseFloat(num1)-parseFloat(num2);
        var divisao=parseFloat(num1)/parseFloat(num2);
        var multiplicacao=parseFloat(num1)*parseFloat(num2);

        document.write("Olá " + name +("!") + "<br>");
        document.write("A soma dos números é: " + soma + "<br>");
        document.write("A subtração dos números é: " + subtracao + "<br>");
        document.write("A divisão dos números é: " + divisao + "<br>");
        document.write("A multiplicação dos números é: " + multiplicacao + "<br>");
        }else{alert("certo, volte quando quiser!")}
