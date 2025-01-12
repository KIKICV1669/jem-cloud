const { request, response } = require('express');
const firebase = require('firebase');
require('firebase/auth');

// Controller to render the profile.hbs file and serve it on /profile request
const getProfile = ( req = request, res = response ) => {
    console.log(firebase.auth().currentUser)
    res.render('pages/profile', {
        nombre: 'Profile',
        profileState: 'active disabled'
    });
}

// Controller to render the folder.hbs file and serve it on /profile/folder request
const getFolder = ( req = request, res = response ) => {
    res.render('pages/folder', {
        nombre: 'Folder'
    });
}

// Controller to render the file.hbs file and serve it on /profile/file request
const getFile = ( req = request, res = response ) => {
    res.render('pages/file', {
        nombre: 'File'
    });
}


module.exports = {
    getProfile,
    getFolder,
    getFile
}
