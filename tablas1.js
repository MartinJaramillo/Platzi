var banco_cliente= true
var cuenta_cliente= true
var saldo_cliente= 2
var banco_destino= false
var cuenta_destino= false
var hora_de_transferencia= 7
if(banco_cliente == true)

{
    alert("en un momento le atiendo")
    if(cuenta_cliente == true )
    {
        alert("primero debemos de verifircar la otra cuenta espereme un momentoo")
        if(cuenta_destino == false)
        {
            alert("por las politicas de este banco no podemos sacar todo su dinero entonces dejeme ver si su saldo es mayor al monto que va a transferir")
            if(saldo_cliente == 2)
            {
                alert("al tranferir su dinero a otro banco tenemos una comision pero si es el mismo no le cobraremos nada")
                if(banco_destino == true)
                {
                    alert("perfecto no le cobraremos nada")
                }
                else(banco_destino == false)
                {
                    alert("le cobraremos 0.5 de su dinero")
                    saldo_cliente - 0.5
                    if(hora_de_transferencia < 13)
                    {
                        alert("su transderencia se ha completado")
                        alert("hola se a completado muy bien su deposito")
 
                    }
                    else(hora_de_transferencia > 13)
                    {
                        Cajero("lo sentimos estamos cerrado")
                    }
                }
            }
            else(saldo_cliente ==1 )
            {
                Cajero("lo sentimos no podemos transferir todo su dinero")
            }
        }

        else(!cuenta_destino == false)
        {
            Cajero("lo sentimos pero no esta verificada la cuenta se podria tratar de una estafa")
        }
    }
    else(!cuenta_cliente == true)
    {
        Cajero("lo sentimos esta no es su cuenta")
    }
}
else(!banco_cliente == true )
{
    Cajero("lo siento pero no eres tu")
}
