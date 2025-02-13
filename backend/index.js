const AWS = require('aws-sdk');
const DynamoDB = new AWS.DynamoDB.DocumentClient();
const S3 = new AWS.S3();
const twilio = require('twilio');

const BUCKET_NAME = 'nombre-del-bucket-s3';
const client = new twilio('TU_TWILIO_SID', 'TU_TWILIO_AUTH_TOKEN');

exports.handler = async (event) => {
    let body = JSON.parse(event.body);
    
    let params = {
        TableName: "EventoAsistentes",
        Item: {
            id: body.id,
            nombre: body.nombre,
            confirmado: body.confirmado
        }
    };
    await DynamoDB.put(params).promise();

    let mensaje = `¡Hola ${body.nombre}, gracias por confirmar asistencia!`;
    await client.messages.create({
        body: mensaje,
        from: 'whatsapp:+14155238886',
        to: `whatsapp:${body.telefono}`
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Confirmación guardada y WhatsApp enviado" })
    };
};