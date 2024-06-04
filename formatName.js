let b;
function capitalize(b) {
    if (b){
        let c = b.replace(/\b\w/g, s => s.toUpperCase())
        console.log(c)
    } else {
        console.log('argument must be a letter')
    }
}

capitalize('ohia chimdinma kennedy')