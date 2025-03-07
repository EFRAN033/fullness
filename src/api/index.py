from flask import Flask, render_template, request, redirect, jsonify
import mysql.connector
from dotenv import load_dotenv
import os
from http.server import BaseHTTPRequestHandler, HTTPServer
import threading

# Cargar variables de entorno
load_dotenv()

# Inicializar la aplicación Flask
app = Flask(__name__)

# Configuración de la base de datos
db_config = {
    "host": os.getenv("DB_HOST", "localhost"),
    "user": os.getenv("DB_USER", "root"),
    "password": os.getenv("DB_PASSWORD", "root"),
    "database": os.getenv("DB_NAME", "citas_ortopedicas")
}

# Ruta principal que sirve el HTML con Flask
@app.route('/')
def home():
    return render_template('index.html')

# Ruta para guardar una cita en la base de datos
@app.route('/guardar_cita', methods=['POST'])
def guardar_cita():
    try:
        data = request.form
        required_fields = ['tipo-paciente', 'nombre', 'apellido', 'email', 'distrito', 'celular', 'ubicacion']

        # Validar campos requeridos
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({"error": f"Campo requerido faltante: {field}"}), 400

        # Conexión a la base de datos
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()

        # Query parametrizado para seguridad
        sql = """INSERT INTO citas 
                (tipo_paciente, nombre, apellido, email, distrito, celular, servicio)
                VALUES (%s, %s, %s, %s, %s, %s, %s)"""
        values = (
            data['tipo-paciente'],
            data['nombre'],
            data['apellido'],
            data['email'],
            data['distrito'],
            data['celular'],
            data['ubicacion']
        )

        cursor.execute(sql, values)
        conn.commit()

        # Redirigir a WhatsApp tras el registro
        return redirect("https://chat.whatsapp.com/LyROmox4Poq159fyDFBCvx", code=302)

    except mysql.connector.Error as err:
        app.logger.error(f"Error de base de datos: {err}")
        return jsonify({"error": "Error al procesar la solicitud"}), 500

    except Exception as e:
        app.logger.error(f"Error inesperado: {e}")
        return jsonify({"error": "Error interno del servidor"}), 500

    finally:
        if 'conn' in locals() and conn.is_connected():
            cursor.close()
            conn.close()

# Servidor HTTP nativo para servir index.html como respaldo
class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/":
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            try:
                with open('src/templates/index.html', 'r', encoding='utf-8') as file:
                    self.wfile.write(file.read().encode())
            except FileNotFoundError:
                self.wfile.write(b"<h1>404 - Index.html no encontrado</h1>")
        else:
            self.send_response(404)
            self.end_headers()

# Iniciar servidor HTTP en un hilo secundario (para pruebas en local)
def run_http_server():
    server_address = ('', 8080)
    httpd = HTTPServer(server_address, Handler)
    print("Servidor HTTP ejecutándose en http://localhost:8080")
    httpd.serve_forever()

# Código para correr en Vercel
def handler(event, context):
    return app(event, context)

# Para ejecutar localmente
if __name__ == '__main__':
    # Iniciar Flask en un hilo
    flask_thread = threading.Thread(target=lambda: app.run(host='0.0.0.0', port=5000, debug=True))
    flask_thread.start()

    # Iniciar el servidor HTTP alternativo (opcional)
    run_http_server()
