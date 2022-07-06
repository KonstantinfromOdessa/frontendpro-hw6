function setRaiting () {
    let i = 0;
    let numberEstimates;
    let raiting = [];
    while (i < Math.round(Math.random() * (10 - 5) + 5)) {
        raiting.push(Math.round(Math.random() * (12 - 1) + 1));
        i++;
    }
    return raiting;
}