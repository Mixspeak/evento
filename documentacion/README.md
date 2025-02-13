# Aplicación de Invitación a Evento en AWS

## 📌 Descripción
Esta aplicación permite gestionar invitaciones a eventos, subir fotos y videos, y enviar notificaciones por WhatsApp.

## 🚀 Tecnologías Utilizadas
- **Frontend:** React.js
- **Backend:** Node.js con AWS Lambda
- **Base de Datos:** Amazon DynamoDB
- **Almacenamiento:** Amazon S3
- **Notificaciones:** Twilio WhatsApp API

## 📖 Pasos para Implementación
1. **Subir el backend a AWS Lambda.**
2. **Configurar API Gateway para conectarlo.**
3. **Crear un bucket en S3 para almacenamiento de imágenes y videos.**
4. **Configurar Twilio para el envío de WhatsApp.**
5. **Subir el frontend a AWS Amplify.**

## 📌 Configuración en AWS
- Crear una función Lambda y pegar el código de `backend/index.js`.
- Crear una API Gateway para exponer la función Lambda.
- Configurar Twilio para enviar mensajes de WhatsApp.

## 📌 Despliegue del Frontend
1. **Instalar dependencias:** `npm install`
2. **Ejecutar en local:** `npm start`
3. **Desplegar en AWS Amplify o S3.**

## 🚀 ¡Listo! Ahora tienes una aplicación de invitación a eventos en AWS.

