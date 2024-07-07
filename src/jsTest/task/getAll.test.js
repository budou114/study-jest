const Tasks = require('../api/Tasks');

jest.mock('../api/Tasks', () => {
	return {
		getData: () => {
			return mockedResponse;
		}
	}
});
// const tasksMock = Tasks;

describe('Tasksテスト', () => {
	test('APIからデータを正常に取得できるか', async () => {
		const mockData = { id: 1, name: 'Mock Data' };
		const mockedResponse = { data: mockData };

		const tasks = new Tasks();
        expect(tasks.getData).toBe(mockedResponse);
	});
});