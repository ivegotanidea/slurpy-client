import { InboxApi } from '../api'
import { Configuration } from '../configuration'
import { v4 as uuidv4 } from 'uuid';

const config = new Configuration({basePath: 'http://mail.overbooru.world:5057'});
const inboxApi = new InboxApi(config);

describe('inbox api', () => {

    it('createRandomInbox returns jobId', async () =>
    {
        const response = (await inboxApi.createRandomInbox()).data;
        expect(response).toHaveProperty('jobId');
    })

    it('createInbox returns jobId', async () =>
    {
        const email = uuidv4();
        const pwd = "@brac@dab5rqw1!"
        const response = (await inboxApi.createInbox(email, pwd)).data;
        expect(response).toHaveProperty('jobId');
    })

    it('getInboxesList returns jobId', async () =>{
        const response = (await inboxApi.getInboxesList()).data;
        expect(response).toHaveProperty('jobId');
    })
})
