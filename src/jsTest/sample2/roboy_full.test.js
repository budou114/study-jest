const { Robot } = require('./Robot');

jest.mock('./Robot');
const RobotMock = Robot;

describe('Robotのテスト', () => {
    test('クラス丸ごとモックになっているか', () => {
        RobotMock.mockImplementationOnce(() => {
            return {
                name: 'R2-D2',
                hello: () => {
                    return 'piro piro';
                },
            };
        });

        const robot = new Robot();
        expect(RobotMock).toHaveBeenCalled();
        expect(robot.name).toBe('R2-D2');
        expect(robot.hello()).toBe('piro piro');
    });
});