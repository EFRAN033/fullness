$(document).ready(function() {
    $('.ui.checkbox').checkbox();
    $('.ui.form').form({
        fields: {
            nombre: 'empty',
            apellido: 'empty',
            dni: 'empty',
            telefono: 'empty',
            email: 'email',
            fecha_nacimiento: 'empty',
            password: ['minLength[6]', 'empty'],
            confirm_password: ['match[password]', 'empty']
        }
    });
});