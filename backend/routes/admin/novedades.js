var express = require('express');
const session = require('express-session');
var router = express.Router();
var novedadesModel = require('./../../models/novedadesModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function (req, res, next) {

    var novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedad => {
        if (novedad.img_id) {
            const imagen = cloudinary.image(novedad.img_id, {
                uidth: 100,
                height: 100,
                crop: 'fill'
            });
            return {
                ...novedad,
                imagen
            }
        }
        else {
            return {
                ...novedad,
                imagen: ''
            }
        }
    });

    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
    });
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

router.post('/agregar', async (req, res, next) => {

    try {
        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedad({
                ...req.body,
                img_id
            });

            res.redirect('/admin/novedades')
        }
        else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true, message: 'Error: Todos los campos son requeridos!'
            })
        }
    }
    catch (error) {
        console.log(error);
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'Error al almacenar.'
        });
    }
});

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    let novedad = await novedadesModel.getNovedadById(id);
    if (novedad.img_id) {
        await (destroy(novedad.img_id));
    }

    await novedadesModel.deleteNovedadById(id);
    res.redirect('/admin/novedades');

});

router.get('/editar/:id', async (req, res, next) => {
    let id = req.params.id;
    let novedad = await novedadesModel.getNovedadById(id);
    res.render('admin/editar', {
        layout: 'admin/layout',
        novedad
    });
});

router.post('/editar', async (req, res, next) => {
    try {
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;
        if (req.body.img_delete === "1") {
            img_id = null;
            borrar_img_vieja = true;            
        }
        else{
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;                
            }
        }
        console.log('valores de borrar img vieja y img original')
        console.log(req.body.img_original)
        console.log('fin valores')
        if (borrar_img_vieja && req.body.img_original){
            console.log('entra a destroy')
            await (destroy(req.body.img_original));
        }

        let obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo,
            img_id
        }
        await novedadesModel.editNovedadById(obj, req.body.id);
        res.redirect('/admin/novedades');
    }
    catch (error) {
        console.log(error);
        res.render('admin/editar', {
            layout: admin / layout,
            error: true,
            message: "No se pudo guardar los cambios"
        });
    }
})

module.exports = router;