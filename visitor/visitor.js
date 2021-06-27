function exportAuto(auto) {
    if(auto instanceof Tesla) {
        auto.export = console.log(`Exported data: ${ auto.info() }`)
    } 
    if(auto instanceof Bmw) {
        auto.export = console.log(`Exported data: ${ auto.info() }`)
    }
    if(auto instanceof Lada) {
        auto.export = console.log(`Exported data: ${ auto.info() }`)
    }
}