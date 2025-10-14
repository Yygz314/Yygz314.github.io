# <font color='pink'>python 编程从入门到实践</font>
---
## <font color=orange>第2章 变量和简单的数据类型</font>
### <font color="green">变量</font>
```py
message = "Hello python world!"
print(message)
```
### <font color="green">字符串</font>
>引号引起的都是字符串，可以是单引号或双引号
- **修改字符串大小写**
```py
name = "ada lovelace"
print(name.title())
# 运行结果：Ada Lovelace
```
>- .title()方法：将字符串中每个单词的第一个字母大写，其他字母都小写.
>- 方法是python可对数据执行的操作。格式为：`变量名.方法()`
- **使用方法`upper()`和`lower()`将字符串转换成大写或小写**

```py
name = "Ada Lovelace"
print(name.upper())
print(name.lower())
# 运行结果：
# ADA LOVELACE
# ada lovelace
```
- 在字符串中使用变量
>- `f"{变量名}"`
```py
first_name = "ada"
last_name = "lovelace"
full_name = f"{first_name} {last_name}"
print(full_name)
# 运行结果：
# ada lovelace
```
- 使用制表符或换行符来添加空白
>- `\t`制表符
>- `\n`换行符

- 删除空白
>- `strip()` 删除字符串开头和末尾的空白
>- `rstrip()` 删除字符串末尾的空白
>- `lstrip()` 删除字符串开头的空白

- 删除前缀
>- `removeprefix()`删除字符串的指定前缀

### <font color=green>数</font>
- 数中的下划线
>- `_`下划线不会影响数的数值
>- 可以使用下划线来分隔数字中的数位组，使其更易读
```py
universe_age = 14_000_000_000
print(universe_age)
# 运行结果：
# 14000000000
```
- 同时给多个变量赋值
```py
x,y,z = 0,0,0
```
- 常量
> 使用全大写字母（单词可用下划线分隔）来指出某个变量视为常量
```py
MAX_CONNECTIONS = 500
```

## <font color=orange>第三章 列表简介</font>
>- 用`[]`创建列表

```py
bicycles = ['trek', 'cannondale', 'redline', 'specialized']
message = f"My first bicycle was a {bicycles[0].title()}."
print(message)
# 运行结果：
# My first bicycle was a Trek.
```

- **修改列表元素**
    - 直接给相应位置的元素赋值即可
  
- **添加列表元素**
    - `.append('new')` 在列表末尾添加元素
    - `.insert(i,'new')` 在列表位置i处添加元素

- **删除列表元素**
    - `del` 删除元素（删除索引）
    - `.pop()` 删除末尾元素，并可以继续使用它（类比栈）
    - `.pop(i)` 删除位置i的元素，并可以继续使用它
    - `.remove('element')` 删除列表中第一个匹配的元素

- **管理列表**
    - `.sort()` 永久排序
    - `.sort(reverse=True)` 永久反向排序
    - `.sorted()` 临时排序
    - `.sorted(reverse=True)` 临时反向排序
    - `len()` 确定列表长度

## <font color=orange>第四章 操作列表</font>

### <font color='green'>遍历整个列表</font>
```py
bicycles = ['trek', 'cannondale', 'redline', 'specialized']
for bicycle in bicycles:    #注意冒号
    print(bicycle)  #注意缩进
# 运行结果：
# trek
# cannondale
# redline
# specialized
```

### <font color='green'>创建数值列表</font>
> range(start, stop, step) 函数
```py
for value in range(1, 5, 2):
    print(value)
# 运行结果：
# 1
# 3
```
- **使用`range()`创建数字列表**
> `list(range(start, stop, step))`

- **对数值列表执行简单的统计计算**
>`min()` `max()` `sum()`

- **列表推导式**
> `[expression for item in list]`
```py
squares = [value ** 2 for value in range(1, 11)]
print(squares)
# 运行结果：
# [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```
### <font color='green'>使用列表的一部分</font>
- **切片**
> - `list[start:stop]` 
> - `list[:stop]` 从开头开始切
> - `list[start:]` 从开始位置切到结尾
> - `list[-n:]` 从倒数第n个位置切到结尾
> - `list[:-n]` 从开头切到倒数第n个位置

- **复制列表**
> `list_copy = list[:]` 

### <font color='green'>元组</font>
>元组和列表一样，都是有序的集合，但是元组不可变
- **创建元组**
> - `tuple = (1, 2, 3)`
> - `tuple = (1,)` 只有一个元素的元组需要在元素后面加逗号

- **遍历元组**
> - `for item in tuple:`

- **修改元组变量**
> - `tuple = tuple + (4,)` 创建一个新的元组，然后赋给元组变量

## <font color=orange>第五章 if 语句</font>
> - `if condition:`
> - `elif condition:`
> - `else:`

## <font color=orange>第六章 字典</font>
> - `dictionary = {key: value, key: value}`

### <font color=green>使用字典</font>
- **访问字典中的值**
  > - `dictionary[key]`

- **添加键值对**
  > - `dictionary[key] = value`

- **修改字典中的值**
  > - `dictionary[key] = value`

- **删除字典中的键值对**
  > - `del dictionary[key]`

- **使用`get()`来访问值**  
  > `dictionary.get(key, default)` 考虑指定的值可能不存在

### <font color=green>遍历字典</font>

- **遍历所有的键值对** 
    > `for key, value in dictionary.items():`
- **遍历所有的键**
    > `for key in dictionary.keys():`
- **遍历所有的值**
    > `for value in dictionary.values():`

## <font color=orange>第七章 用户输入和while循环</font>
### <font color=green>`input()`函数工作原理</font>
> `input()`函数会暂停程序的执行，并等待用户输入一个值，然后返回该值
- **使用`int()`来获取数值输入**
    > `age = int(input("How old are you?"))`

### <font color=green>`while` 循环简介</font>
```py
current_number = 1
while current_number <= 5:
    print(current_number)
    current_number += 1
```

### <font color=green>使用`while`循环处理列表和字典</font>
- **在列表之间移动的元素**
```py
unconfirmed_users = ['alice', 'brian', 'candace']
confirmed_users = []
while unconfirmed_users:
    current_user = unconfirmed_users.pop()
    print(f"Verifying user: {current_user.title()}")
    confirmed_users.append(current_user)
```

- **删除包含特定值的所有列表元素**
```py
pets = ['dog', 'cat', 'dog', 'goldfish', 'cat', 'rabbit', 'cat']
while 'cat' in pets:
    pets.remove('cat')
print(pets)
```

- **使用用户输入来填充字典**
```py
responses = {}
while True:
    name = input("\nWhat is your name? ")
    response = input("Which mountain would you like to climb someday? ")
    responses[name] = response
    repeat = input("Would you like to let another person respond? (yes/ no) ")
    if repeat == 'no':
        break
    elif repeat == 'yes':
        continue
    else:
        print("I don't understand your response. Please enter 'yes' or 'no'.")
        continue
print(responses)
```

## <font color=orange>第八章 函数</font>
```py
def greet_user(username):
    """显示简单的问候语"""
    print(f"Hello!,{username.title()}!")
greet_user()
```

- **传递任意数量的参数**
> *toppings是一个名为toppings的元组，收集函数调用中传递的所有参数。

```py
def make_pizza(*toppings):
    """打印顾客点的所有配料"""
    print(toppings)
make_pizza('pepperoni')
make_pizza('mushrooms', 'green peppers', 'extra cheese')
```

### <font color=green>将函数存储在模块中</font>
> -模块是扩展名为.py的文件，包含定义的函数。
- **导入整个模块**
```py
# pizza.py
def make_pizza(size, *toppings):
    """打印顾客点的所有配料"""
    print(f"\nMaking a {size}-inch pizza with the following toppings:")
    for topping in toppings:
        print(f"- {topping}")
```
```py
import pizza
pizza.make_pizza(16, 'pepperoni')
pizza.make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
```
- **导入模块中的特定函数**
>  `from module import function`

- **使用as给函数指定别名**
>  `from module import function as alias`

- **使用as给模块指定别名**
>  `import module as alias`

- **导入模块中的所有函数**
>  `from module import *`

## <font color=orange>第九章 类</font>

### <font color=green>创建和使用类</font>
- **创建`Dog`类**
```py
class Dog:
    """表示小狗的类"""
    def __init__(self, name, age):
        """初始化属性name和age"""
        self.name = name
        self.age = age
    def sit(self):
        """模拟小狗收到命令时坐下"""
        print(f"{self.name} is now sitting.")
    def roll_over(self):
        """模拟小狗收到命令时打滚"""
        print(f"{self.name} rolled over!")
```
> - 类中的函数称为方法
> - `__init__()`方法是一个特殊方法，当创建对象时，Python会自动调用它。
> - `self`参数表示创建的实例本身，`self`参数必须位于参数列表的开头。
```py
my_dog = Dog('Willie',6)
print(f"My dog's name is {my_dog.name}.")
print(f"My dog is {my_dog.age} years old.")

my_dog.sit()
my_dog.roll_over()
```

### <font color=green>继承</font>
- **子类的方法`__init__()`**
```py
class SARDog(Dog):
    """表示一种特殊的小狗"""
    def __init__(self, name, age):
        """初始化父类的属性"""
        super().__init__(name, age)
```
> - `super()`函数的作用是将子类的实例与父类的实例关联起来。
> - `super().__init__(name, age)`将调用父类的方法

## <font color=orange>第十章 文件和异常</font>
> - `pathlib`模块的作用是将文件路径作为对象进行处理。

### <font color=green>存储数据</font>
- **使用`json.dumps()`和`json.loads()`函数存储和读取数据**
>- `json.dumps()`函数将数据转换为JSON格式的字符串。(可以将其写入数据文件)
>- `json.loads()`函数将JSON格式的字符串转换为数据。
- **保存和读取用户生成的数据**
```py
from pathlib import Path
import json

def get_stored_username(path):
    if path.exists():   
        contents=path.read_text()
        username=json.loads(contents)
    else:
        return None

def get_new_username(path):
    username = input("What is your name?")
    contents=json.dumps(username)   #将username转换为JSON格式的字符串
    path.write_text(contents)   #将字符串写入文件
    return username

def greet_user():
    path=Path('Practice/Python-leaning/username.json')
    username=get_stored_username(path)
    if username:
        print(f"Welcome back, {username}!")
    else:
        username=get_new_username(path)
        print(f"We'll remember you when you come back, {username}!")
greet_user()
```

## <font color=orange>第十一章 测试代码</font>
