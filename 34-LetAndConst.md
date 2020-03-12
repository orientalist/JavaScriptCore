# Let與Const
1. var的問題
   - 在同一作用域,以var建立相同的變數,後者會覆蓋前者
   - for迴圈搭配var,該變數會變成全域變數
   - 在函式作用域內以var建立的變數會變成全域變數
2. let與const
   - 建立的變數都只存在建立變數的作用域內(block作用域{})
   - let變數值可修改,const不行
   - const指參考位置不變,而非子物件不可修改,要禁止子物件修改,使用Object.freeze();
     - const搭配.freeze()可以達到參考位置不變且內容不可修改的效果
   ```js
   const a={
       b:1,
       c:2
   };
   a.b=3;

   Object.freeze(a);
   a.b=5;//=>失敗
   ```
3. let與TDZ(Temporary Death Zone)
   - let變數亦會Hoisting,但不會賦予undefiend,亦無法呼叫
   ```js
   console.log(man);

   let man='Zhuang';
   ```