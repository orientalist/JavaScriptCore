# JavaScript如何運作?
## 直譯/編譯式語言
1. 直譯式語言
   - 原始碼－(直譯器)－代碼生成－(運行)－應用程式
   - 錯誤直接反映在環境中(console)
   - 亦即**不處理非Runtime Exception**
   - 優點:
     1. 彈性較佳,不需定義型別
     2. 逐行執行,不需整份寫完就能測試
2. 編譯式語言
   - 撰寫原始碼－(預先編譯)－代碼生成－(運行)－應用程式
   - 預先編譯即可除錯(不是等到運行時報錯)－效能較佳
   - 亦即**會處理非Runtime Exception**
   - 優點
     1. 事前型別檢查,減少型別錯誤
     2. 整份代碼轉譯為機械碼,速度較快
***
## JavaScript直譯器轉換過程
1. 語法基本單元化(解析標點符號/詞彙)-Tokenizing
2. 抽象結構樹(定義原始碼結構)-Abstract Syntax Tree AST
3. 代碼生成
> [線上原始碼單元化](https://esprima.org/demo/parse.html)
```js
var ming='Xiao ming';
```
語法基本單元化-在這個步驟,只有單純地將程式碼逐步解析,`=`不會被視作指派,而是符號
```json
[
    {
        //var 被解析為關鍵字
        "type": "Keyword",
        "value": "var"
    },
    {
        //ming 被解析為識別符
        "type": "Identifier",
        "value": "ming"
    },
    {
        //＝被解析為符號
        "type": "Punctuator",
        "value": "="
    },
    {
        //'Xiao ming'被解析為字串
        "type": "String",
        "value": "'Xiao ming'"
    },
    {
        "type": "Punctuator",
        "value": ";"
    }
]
```
抽象結構樹化,注意,此時亦未執行代碼功能(賦值)
```json
{
    "type": "Program",
    "body": [
        //陣列每一元素皆為一組語意ㄞ
        {
            //解析出語意為變數宣告
            "type": "VariableDeclaration",
            "declarations": [
                {
                    //變數宣告者
                    "type": "VariableDeclarator",
                    "id": {
                        //變數辨識符
                        "type": "Identifier",
                        "name": "ming"
                    },
                    "init": {
                        //變數值
                        "type": "Literal",
                        "value": "Xiao ming",
                        "raw": "'Xiao ming'"
                    }
                }
            ],
            //變數定義方式
            "kind": "var"
        }
    ],
    "sourceType": "script"
}
```