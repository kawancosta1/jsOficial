setInterval(data => {
    let dat = new Date()
    return dat.toLocaleDateString('pt-BR', {
        hour12:false
    });
})