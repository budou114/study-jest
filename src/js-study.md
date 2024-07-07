# JSの学習

## 比較演算子
三重等号```(===)```よりもさらに厳しく比較をした良い場合は、```Object.is(a, b)```を使用する

## UIテストはjsdom

## Jestで等価性を比較したい場合
 - toBe (プリミティブ値比較用)
 - toEqual (オブジェクト比較用)
 ※ 使うのはこれで良さそう
 - toStrictEqual (Object以外の独自のクラスでs生成されたオブジェクトを返す関数テスト用)

### toBeのような比較を真偽値で行う場合
 - toBeTruthy
 - toBeFalsy

 ### toBeのような比較をnullとundefinedでも行う場合
 - toBeNull
 - toBeUndefined

 ### 曖昧な結果の評価
 - expect.anything(null or undefined以外か検証)
 - expect.any(型が一致しているか)

 ### 数値の比較
 - toBeGreaterThan
 - toBeGreaterThanOrEqual
 - toBeLessThan
 - toBeLessThanOrEqual

 ### 文字列の比較
  - expect.stringContaining
  - expect.stringMatching
  - toMatch

### 配列の部分一致

### オブジェクトの部分一致

### Errorがthrowされたことの評価
 - toThrowError

### 注意点
 - コールバック関数を使用している場合は、```done関数```を使用する(Jest は終了を
 検知できないため)

### describeでテストをグループ化する
### パラメタライズ度テスト()test.each


### Jestのモック
 - jest.fn()
 - jest.mock()
 - jest.spyOn()


 外部モジュールのモック
 APIを実際に実行せずにテスト可能
 ```
 // users.test.ts

import axios from 'axios'
import Users from './users'

jest.mock('axios')

test('should fetch all users', async () => {
  const users = [{ name: 'Bob' }]
  const resp = { data: users }

  ;(axios as jest.Mocked<typeof axios>).get.mockResolvedValue(resp)
  // axios.get.mockImplementation(() => Promise.resolve(resp)) // 上記のmockResolvedValueと同じ設定

  await expect(Users.search()).resolves.toEqual(users)
})


 ```