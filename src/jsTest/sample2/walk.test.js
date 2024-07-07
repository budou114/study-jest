import * as walkModule from './walk';

describe('walkFast関数のモック化テスト', () => {
    test('モック化できているか', () => {
        const walkSpy = jest.spyOn(walkModule, 'walkFast').mockReturnValueOnce('walk slow');

        expect(walkModule.walkFast()).toBe('walk slow');
        expect(walkSpy).toHaveBeenCalled();
    });
});