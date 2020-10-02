import { EmailApi } from '../api'
import { Configuration } from '../configuration'

const config = new Configuration({basePath: 'http://mail.overbooru.world:5057'});
const emailApi = new EmailApi(config);

describe('email api', () => {

    it('getInboxFolders returns jobId', async () =>
    {
        const response =
            (await emailApi.getInboxFolders('a', 'b')).data;
        expect(response).toHaveProperty("jobId");
    })

    it('getEmail returns jobId', async () =>
    {
        const response =
            (await emailApi.getEmail('a', 'b', 'INBOX', 120)).data;
        expect(response).toHaveProperty("jobId");
    })

    it('getEmail returns jobId', async () =>
    {
        const response =
            (await emailApi.getUnseen('a', 'b', 10)).data;
        expect(response).toHaveProperty("jobId");
    })
})
