// x2 + 12x – 13 = 0
// Raiz = 1 e -13

function bhaskara(a, b, c) {
    let delta = (b*b) - (4*a*c)

    if(delta < 0) {
        return `A equação não possui raíz, pois o delta possui valor negativo (delta = ${delta})`
    }
    
    let raiz = []
    raiz[0] = (-b + Math.sqrt(delta)) / (2*a)
    raiz[1] = (-b - Math.sqrt(delta)) / (2*a)

    return raiz
}

console.log(bhaskara(1,12,-13))