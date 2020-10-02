import { InboxApi, JobsApi } from '../api'
import { Configuration } from '../configuration'

const config = new Configuration({basePath: 'http://mail.overbooru.world:5057'});
const inboxApi = new InboxApi(config);
const jobsApi = new JobsApi(config);

describe('jobs api', () => {

    it('getJobResult contains state and result props', async () =>{
        const response = (await inboxApi.createRandomInbox()).data;
        expect(response).toHaveProperty('jobId');

        const result = (await jobsApi.getJobResult(response.jobId)).data
        expect(result).toHaveProperty('state')
        expect(result).toHaveProperty('result')
    })
})
