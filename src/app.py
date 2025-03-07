from flask import Flask, render_template, request, redirect, jsonify  
import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()  

app = Flask(__name__)


db_config = {
    "host": os.getenv("DB_HOST", "localhost"),
    "user": os.getenv("DB_USER", "root"),
    "password": os.getenv("DB_PASSWORD", "root"),
    "database": os.getenv("DB_NAME", "citas_ortopedicas")
}

# Ruta principal que sirve el HTML
@app.route('/')
def home():
    return render_template('index.html')

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

        return redirect("https://chat.whatsapp.com/LyROmox4Poq159fyDFBCvx")

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

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=os.getenv("FLASK_DEBUG", False))