# 不详细的功能介绍文档

## 介绍

没写，但是能了解部分按键做什么的(x)

## 目录

1. [介绍](#介绍)
   1. [按键介绍](#按键介绍)
      1. [启动器设置](#启动器设置)
         1. [全局游戏设置](#全局游戏设置)
         2. [启动器设置](#启动器设置)
         3. [社区选项](#社区选项)
      2. [布局管理](#布局管理)
         1. [编辑布局信息](#编辑布局信息)
         2. [编辑布局方案](#编辑布局方案)
         3. [控件事件](#控件事件)
2. [署名](#署名)

---

### 按键介绍

在“按键介绍”部分，您将了解如何配置和使用FCL中的左侧栏按键功能。以下是每个按键的对应图标及其功能描述：

| 按键         | 图标                                                                                 | 描述                                                                                      |
|--------------|--------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| **首页按钮** | ![首页按钮](img/fcl_home.svg)                                                        | 点击此按钮返回主页。                                                                         |
| **游戏管理** | ![游戏管理](img/fcl_configuration.svg)                                               | 用于管理和配置游戏设置与资源文件。                                                                     |
| **下载资源** | ![下载资源](img/fcl_download.svg)                                                    | 下载游戏资源和相关文件。                                                                     |
| **布局管理** | ![布局管理](img/fcl_push_button.svg)                                                 | 管理操控布局和布局下载。                                                                     |
| **启动器设置** | ![启动器设置](img/fcl_settings.svg)                                                  | 修改启动器的相关设置。                                                                      |
| **返回按钮** | ![返回按钮](img/fcl_return.svg)                                                      | 返回上一级菜单或关闭FCL。                                                                |

---

### 启动器设置

在“启动器设置”部分，你可以获取到部分配置项目的相关选项。

#### 全局游戏设置

| 设置项                                      | 默认值     | 说明                                                                                   |
|-------------------------------------------|----------|----------------------------------------------------------------------------------------|
| **Java版本**                               | 自动选择    | 启动游戏时可选择使用特定的Java版本。                                                              |
| **版本隔离**                               | 关闭       | 启用后，游戏文件和启动游戏时，游戏主要文件会放在`.minecraft/versions`目录中。                |
| **游戏内存**                               | 自动分配内存 | 可取消自动内存分配，手动设置内存大小。                                                       |
| **窗口分辨率**                             | 100%       | 调整游戏启动时的显示分辨率，降低分辨率可以牺牲画质提升来帧率。                                        |
| **服务器地址**                             | 空         | -                                                                                      |
| **控制**                                   | 默认       |启动游戏时使用的默认控制布局。                                                                                      |
| **基岩版触控手势**                          | 开启       | -                                                                                      |
| **允许Zink使用系统Vulkan驱动**              | 关闭       | -                                                                                      |
| **渲染器**                                 | Holy-GL4ES | -                                                                                      |
| **强制渲染器在大核上运行 (Pojav后端)**      | 关闭       | -                                                                                      |

::: warning
注意：如果内存超过手机的可用内存但未达到设置值，可能导致游戏崩溃。
:::

#### 启动器设置

| 设置项                                      | 默认值     | 说明                                                                                   |
|-------------------------------------------|----------|----------------------------------------------------------------------------------------|
| **动画速度**                               | 800MS      | 调整启动器UI动画速度，越高越慢。                                                                |
| **下载源**                                | 自动选择    | 选择加载速度快的下载源。                                                                |
| **下载**                                  | 自动选择并发数 | 自动选择并发数以优化下载速度。                                                            |

#### 社区选项

| 选项     | 描述                                                                                               |
|----------|----------------------------------------------------------------------------------------------------|
| **Discord** | Discord 是一款国外聊天软件，您可以通过Play商店下载其应用，或在浏览器中直接访问它。<br>注意：使用Discord时需要科学上网。 |
| **QQ群**   | 如页面提示，您需要在爱发电平台赞助10元并在备注中提供QQ号，然后申请加入QQ群。<br>请耐心等待，可能需要一些时间请耐心等待。 |

---

### 布局管理

在“布局管理”部分，您将查看如何管理和调整FCL的布局设置。以下是一些常见的布局管理功能：

| 功能         | 描述                                                                                   |
|--------------|--------------------------------------------------------------------------------------|
| **布局配置** | 配置并调整FCL的布局，支持多种排列方式和自定义选项。                                               |
| **布局下载** | 从云端下载新的布局，以适应不同的需求和使用场景。                                             |

#### 编辑布局信息

| 项目        | 默认值     | 描述                                                         |
|-------------|-----------|--------------------------------------------------------------|
| **名称**     | 空        | 自定义布局的名称。                                           |
| **版本**     | 空        | 布局的版本信息。                                             |
| **版本号**   | 空        | 布局的具体版本号。                                           |
| **作者**     | 空        | 布局的作者信息。                                             |

#### 编辑布局方案

在此部分，您可以编辑不同的布局方案，适应不同的控制需求和使用场景。

#### 控件事件

在此部分，您将了解控件的事件功能，允许您配置按钮的不同触发方式和行为。

| 控件         | 图标                                                                                 | 描述                                                                                      |
|--------------|--------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| **按钮**     | ![按钮](img/fcl_keyboard.svg)                                                       | 配置按键的触发事件和行为。                                                                   |

##### 按钮事件功能

| 功能                    | 描述                                                                                 |
|-------------------------|--------------------------------------------------------------------------------------|
| **指针跟随手指**         | 按下按键后滑动指针也可操控。                                                           |
| **可移动**               | 按键可以移动，用户可以拖动按钮到任意位置。                                               |
| **按压方式**             | 按下按键后的触发方式，包括：按压、长按、点击、双击。                                      |
| **自动保持**             | 按键按下后，保持其状态，直到手动释放。                                                   |
| **自动点击**             | 按钮将自动进行点击操作，无需额外操作。                                                   |
| **打开菜单**             | 打开菜单界面。                                                                         |
| **切换触控手势模式**     | 切换触控手势的使用模式。                                                               |
| **切换鼠标控制模式**     | 切换为鼠标控制模式。                                                                   |
| **呼出输入法**           | 呼出系统输入法界面，允许输入文字。                                                       |
| **打开快捷输入**         | 打开快捷输入界面，提供快捷的文本输入功能。                                               |
| **发送文本**             | 发送指定的文本信息。                                                                   |
| **呼出键值**             | 呼出按钮的键值，便于进行其他操作。                                                     |
| **切换控件可视性**       | 切换控件的可视性状态，隐藏或显示控件。                                                   |

---

## 署名

**编辑作者：** [后天盼蕾](https://github.com/hotianbexuanto)  
**创建时间：** 2024.12.10  
**修改时间：** 2024.12.11  

---

<style scoped>
  img {
    background-color: #444;
    padding: 5px;
    border-radius: 5px;
  }

  @media (prefers-color-scheme: dark) {
    img {
      background-color: #555;
    }
  }
</style>