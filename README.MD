# 前端简史
## web1.0时代
- 浏览器端看到的所有东西, 都属于前端.
- 为了方便科学论文交流, 发明了mosaic浏览器, 服务器返回html静态页面
- PHP出现, 页面可以嵌入数据
- MVC
    - Controller: 处于下层, 通常进行数据的管理
    - Model: 数据的业务逻辑
    - View: 数据的呈现, model的更新引起view的更新, View与前端的关系比较大
## web2.0
前端可独立进行数据处理, 不再仅仅是后端的模板
- 1995 Netscape发布了JavaScript; ajax, 允许局部页面刷新.  
前端架构基本形成: html + css + JavaScript
- jQuery(2006): 用于操作dom的JavaScript库, 简化了html和JavaScript的交互操作
    ```
    $(document).ready(function(){
        ...
    })
    ```
- nodejs(2009): 可在服务端运行JavaScript的跨平台运行环境  
三大前端框架产生, 逐渐取代jQuery
    - angular:
    - react:
    - vue: 唯一一个由中国人制作的框架
webpack: 让前端可以工程化的构建, 像gradle一样自动配置依赖库  
- mvvm模型: view <--双向绑定--> viewmodel <--更新--读取--> model  
优点: 低耦合, 可重用, 独立开发, 可测试性
    - view: ui和ui逻辑
    - viewmodel: 展示逻辑和状态
    - model: 业务逻辑和数据

# react基础
- 用来构建用户界面
    - 声明式渲染: 先画轮廓, 再填细节
    - 组件化: 组件的嵌套和组装构成复杂UI, 组件独立管理
    - 一次学习, 随处编写: 在已有代码上直接编写, 不用从头开始
- props vs state
    - props 主要用于父子组件间的通信(react数据是单向流动, 只能由父组件流向子组件)
    - state 用于组件保存, 控制, 修改自己的可变状态
- 函数式组件  
又称为无状态组件(Stateless Component)
- jSX基础  
JavaScript XML, 将HTML直接卸载JavaScript中
    - 与html一样, 直接写标签
    - 使用大括号{}传递JavaScript的值
    - 使用引号传递字符串值

- 虚拟dom  
用js对象表现dom结构, 根据js对象重建dom结构, 处理速度更快, 更简单
    ```
        var element = {
            tagName: 'ul' 
            props: {
                id: 'list'
            },
            children: []
        }
    ```  






