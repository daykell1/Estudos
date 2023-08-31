const mouse ={
     cor:' red',
     marcar: ' dazz'

}

mouse.vlocidade = 5000
mouse.trocarDPI = function (){
     console.log(' mudndo DPI');
}
 delete mouse.vlocidade;
 delete mouse.trocarDPI;
 console.log(mouse);

 