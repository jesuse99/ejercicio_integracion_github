const listNav = document.querySelector(".navbar");

const buttonMenu = document.querySelector(".button-menu");
buttonMenu.addEventListener('click', function() {
    console.log(listNav.style.display);

    if (listNav.style.display == "none") {
        listNav.style.display = "block";    
    } else {
        listNav.style.display = "none";
    }
});

const titleChiste = document.querySelector(".title-chiste");
const textChiste = document.querySelector(".text-chiste");

listChistes = [
    '¿Sabes por qué no se puede discutir con un DJ? Porque siempre están cambiando de tema.',
    '¿Cómo se dice pañuelo en japonés? Saka-moko.',
    '¿Cómo se dice disparo en árabe? Ahí-va-la-bala.',
    '¿Qué le dice un gusano a otro gusano? Voy a dar una vuelta a la manzana.',
    'Sale el doctor después de un parto y el padre de la criatura le pregunta: "¿Cómo salió todo?". El doctor le dice: "Todo salió bien, pero tuvimos que colocarle oxígeno al bebé". El padre dice: "Pero doctor, nosotros queríamos ponerle Gabriel"',
    'Un pez le pregunta a otro pez: "¿Qué hace tu mamá?". Este le contesta: "Nada, ¿y la tuya qué hace?". "Nada también".',
    '¿Cuál es el colmo de Aladdín? Tener mal genio.',
    'Si se muere una pulga, ¿a dónde va? Al pulgatorio.',
    'Juanito le dice la maestra: "¿Qué harías si te estuvieses ahogando en la piscina?" Juanito responde: "Me pondría a llorar mucho para desahogarme"',
    '¿Qué le dice una impresora a otra? ¿Esta hoja es tuya o es impresión mía?'
]

let c = 0;
update();

function inc() {
    c++;
    if (c > 9) c=0;
    update();
}

function dec() {
    c--;
    if (c < 0) c=9;
    update();
}

function update() {
    titleChiste.textContent = "Chiste N"+(c+1);
    textChiste.textContent = listChistes[c];
}