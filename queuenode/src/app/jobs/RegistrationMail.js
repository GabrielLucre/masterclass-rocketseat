import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    async handle({ data }) {
        const { user: { name, email } } = data;

        await Mail.sendMail({
            from: `Queue Test <queue@queuetests.com>`,
            to: `${name} <${email}>`,
            subject: `Cadastro de usuário`,
            html: `Olá, ${name}! Bem vindo ao sistema de filas da Rocketseat! :D`
        });
    }
};