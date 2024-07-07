import { Robot } from './Robot';

// 一部だけモックにしたいので、jest.mock()はなし

describe('Robotのテスト', () => {
    test('クラスの一部だけモックになっているか', () => {
        // Robot.prototypeのhello関数をspyOnすることで、hello関数のモック化ができる
        const helloSpy = jest.spyOn(Robot.prototype, 'hello').mockReturnValue('piro piro');

        const robot = new Robot();
        expect(helloSpy).not.toHaveBeenCalled();

        expect(robot.name).toBe('C-3PO');
        expect(robot.hello()).toBe('piro piro');
        expect(helloSpy).toHaveBeenCalled();
    });
});