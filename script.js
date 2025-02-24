/*const funcaoEsq = () => {
  console.log("Deu Certo ESQ");
};
const funcaoDir = () => {
  console.log("Deu Certo DIR");
};
*/

let lista= document.querySelectorAll('.item');
console.log(lista);

let next = document.getElementById('proximo');
let prev = document.getElementById ('anterior');

let contar = lista.length;
let ativo = 0
console.log (contar);

next.onclick = () =>{
    if (ativo >= contar -1){
        ativo = 0;
    }else{
        ativo = ativo +1
    }

    let desativar = document.querySelector('.ativo')
    desativar.classList.remove('ativo')
    lista[ativo].classList.add('ativo')

}

prev.onclick = () =>{
    let desativar = document.querySelector('.ativo')
    desativar.classList.remove('ativo')
    if(ativo <=0 ){
        ativo = 2
    }else{
        ativo = ativo -1
    }
    lista[ativo].classList.add('ativo')              
}