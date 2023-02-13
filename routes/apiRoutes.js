const express = require('express')
const router = express.Router()
const presidentesArg = require('../api/presidentesArg.json')

router.get('/', ( req,res )=>{
    res.render('index')
    // req.url
})

router.get('/api', ( req,res ) => {
        res.json(presidentesArg)
    }
)

router.get('/api/:name', (req,res)=>{

    const valor = req.params.name.toLocaleLowerCase()
    const presidente = Number(valor) || valor

    if(typeof presidente === 'string'){
        res.json(presidentesArg[presidente])
    }else if(Number.isInteger(presidente)){
        const year = presidente
        let key = 0
        for (let value in presidentesArg) {
            const inicio = presidentesArg[value]['inicio-fin'][0]
            const fin = presidentesArg[value]['inicio-fin'][1]
            key++

            if(inicio <= year && fin >= year){
                res.json(presidentesArg[ value ] )
                break;
            }

            if(Object.keys(presidentesArg).length == key){
                res.json(presidentesArg['unknown'])
            }
        }
    }else{
        throw new Error('Dato Invalido')
    }
})

module.exports = router