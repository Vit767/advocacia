// Importar módulo 'got' para realizar solicitações HTTP
const got = require('got');

// Função principal
exports.handler = async function (event, context) {
    try {
        // Obter dados do corpo da solicitação
        const data = JSON.parse(event.body);

        // Configurar parâmetros para envio de e-mail (substitua com seus próprios dados)
        const mailgunApiKey = 'sua_api_key';
        const mailgunDomain = 'seu_dominio';
        const mailgunEndpoint = `https://api.mailgun.net/v3/${mailgunDomain}/messages`;

        // Configurar dados para enviar e-mail
        const emailData = {
            from: `${data.nome} <${data.email}>`,
            to: 'fodavic84@gmail.com',
            subject: 'Nova mensagem do site',
            text: data.mensagem
        };

        // Realizar solicitação HTTP para o serviço de envio de e-mails (Mailgun, por exemplo)
        const response = await got.post(mailgunEndpoint, {
            json: emailData,
            auth: `api:${mailgunApiKey}`
        });

        // Responder ao cliente com sucesso
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Mensagem enviada com sucesso!' })
        };
    } catch (error) {
        // Responder ao cliente com erro
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Erro ao enviar mensagem.' })
        };
    }
};