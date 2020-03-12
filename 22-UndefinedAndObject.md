# 物件屬性與Undefined
1. 查詢物件不存在的屬性時會回傳undefined而不是not defined
2. 無法附加屬性給undefined的屬性
3. 運用:
   1. 若查詢到not defined屬性，會造成程式碼終止
   2. 透過查詢window.屬性名的方法避免上述問題