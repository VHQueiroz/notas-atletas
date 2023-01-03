let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
    
   function resultadoDosAtletas(atletas){
   let nomesAtletas;
   let notasTotais;
   for(let i = 0; i < atletas.length; i++){
   
       nomesAtletas = atletas.map(function(atleta){
           return atleta.nome;
       })
       notasTotais = atletas.map(function(nota){
         let total = nota.notas;
         total.sort(function(a,b){
           return a-b
         })
         return total
       })
   }
   for(let i = 0; i < atletas.length; i++){
       switch(i){
           case i:
               console.log(`Atleta: ${nomesAtletas[i]}`)
               console.log(`Notas Obtidas: ${notasTotais[i]}`)
               let notasAtletas = notasTotais[i].slice(1, notasTotais[i].length-1)
               let soma = notasAtletas.reduce(function(total,atual){
                   return (total + atual)
               })
               let media = soma/notasAtletas.length
               console.log(`Média Válida: ${media.toFixed(2)}`)
               console.log()
               break
           default:
               console.log("Atleta não cadastrado");
           }
   }
   }
   
   console.log(resultadoDosAtletas(atletas))
