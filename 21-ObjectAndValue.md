# 物件與純值
1. javaScrip中僅有物件與純值兩型別
2. 純值(int/string...)非物件,不可新增屬性
3. 但若為包裹物件,則可以附加屬性
4. 意味無法新增屬性即為純值
5. typeof(function(){})雖為`function`,但function其實為Object子型別,因此function亦可新增屬性