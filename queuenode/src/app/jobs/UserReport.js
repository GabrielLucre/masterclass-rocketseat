export default {
    key: 'UserReport',
    async handle({ data }) {
        const { user: { name, email } } = data;

        console.log(data);
    }
};