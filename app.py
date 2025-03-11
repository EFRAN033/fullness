from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_wtf.csrf import CSRFProtect
import os
from dotenv import load_dotenv
from serverless_wsgi import handle_request

load_dotenv()

app = Flask(__name__,
            static_folder="static",
            template_folder="templates")

# Configuración de seguridad
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'fallback-secret-key')
csrf = CSRFProtect(app)

# Configuración de la base de datos
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Cita(db.Model):
    __tablename__ = 'citas'
    id = db.Column(db.Integer, primary_key=True)
    tipo_paciente = db.Column(db.String(50), nullable=False)
    nombre = db.Column(db.String(100), nullable=False)
    apellido = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    distrito = db.Column(db.String(100), nullable=False)
    celular = db.Column(db.String(20), nullable=False)
    ubicacion = db.Column(db.String(200), nullable=False)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/guardar_cita', methods=['POST'])
def guardar_cita():
    try:
        data = request.form
        required_fields = ['tipo-paciente', 'nombre', 'apellido', 
                         'email', 'distrito', 'celular', 'ubicacion']
        
        # Validación de campos
        for field in required_fields:
            if not data.get(field):
                return jsonify({"error": f"Campo requerido faltante: {field}"}), 400

        # Crear nueva cita
        nueva_cita = Cita(
            tipo_paciente=data['tipo-paciente'],
            nombre=data['nombre'],
            apellido=data['apellido'],
            email=data['email'],
            distrito=data['distrito'],
            celular=data['celular'],
            ubicacion=data['ubicacion']
        )

        db.session.add(nueva_cita)
        db.session.commit()

        return jsonify({
            "status": "success",
            "message": "Cita guardada exitosamente",
            "cita_id": nueva_cita.id
        }), 200

    except Exception as e:
        db.session.rollback()
        app.logger.error(f"Error al guardar cita: {str(e)}")
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500

def vercel_handler(request):
    return handle_request(app, request)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
