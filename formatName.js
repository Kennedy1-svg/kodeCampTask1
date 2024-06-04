let b;
function formatName(b) {
    if (b){
        let c = b.replace(/\b\w/g, s => s.toUpperCase())
        console.log(c)
    } else {
        console.log('argument must be a letter')
    }
}

formatName('ohia chimdinma kennedy')