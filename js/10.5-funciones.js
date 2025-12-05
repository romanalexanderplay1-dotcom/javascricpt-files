const login = {
    registrarUsuario: function(nombreUsuario, contrasena) {
        console.log("Usuario registrado: " + nombreUsuario);
    },
    iniciarSesion: function(nombreUsuario, contrasena) {
        console.log("Usuario inició sesión: " + nombreUsuario);   
    },
    cerrarSesion: function(nombreUsuario) {
        console.log("Usuario cerró sesión: " + nombreUsuario);
    },
    cambiarContrasena: function(nombreUsuario, nuevaContrasena) {
        console.log("Contraseña cambiada para el usuario: " + nombreUsuario);
    },
    recuperarContrasena: function(nombreUsuario) {
        console.log("Instrucciones para recuperar la contraseña enviadas a: " + nombreUsuario);
    }
}
registrarUsuario=login.registrarUsuario('juan123', 'miContrasenaSegura');
iniciarSesion=login.iniciarSesion('juan123', 'miContrasenaSegura');
cerrarSesion=login.cerrarSesion('juan123');
cambiarContrasena=login.cambiarContrasena('juan123', 'nuevaContrasenaSegura');
recuperarContrasena=login.recuperarContrasena('juan123');