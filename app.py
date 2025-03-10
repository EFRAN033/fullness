from flask import Flask, render_template, request, redirect, jsonify
import os
from dotenv import load_dotenv
from serverless_wsgi import handle_request  # Necesario para Vercel

# Cargar variables de entorno
load_dotenv()

app = Flask(__name__,
            static_folder="static",
            template_folder="templates")

# 🔹 Rutas de la aplicación
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/guardar_cita', methods=['POST'])
def guardar_cita():
    """
    Esta función guardará una cita en la base de datos.
    Por ahora, solo devuelve un mensaje de prueba hasta que agreguemos la BD.
    """
    data = request.form
    required_fields = ['tipo-paciente', 'nombre', 'apellido', 'email', 'distrito', 'celular', 'ubicacion']

    for field in required_fields:
        if field not in data or not data[field]:
            return jsonify({"error": f"Campo requerido faltante: {field}"}), 400

    return jsonify({"message": "Cita guardada exitosamente (simulado, sin base de datos aún)."}), 200

# 🔹 Configuración para Vercel
def vercel_handler(request):
    return handle_request(app, request)

# 🔹 Modo local
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
