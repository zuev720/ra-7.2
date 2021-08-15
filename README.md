[![Build status](https://ci.appveyor.com/api/projects/status/10e2t2cyonrfb9sw?svg=true)](https://ci.appveyor.com/project/zuev720/ra-7-2)


[GitHub-pages](https://zuev720.github.io/ra-7.2/)



Подсвечивание блоков
===

На нашем сайте есть блоки со статьями и с видео записями. 

![Highlight](https://github.com/netology-code/ra16-homeworks/raw/master/hoc/highlight/assets/highlight.png)

Мы решили улучшить отображение наших блоков таким образом, 
чтобы популярные статьи и видео (1000+ прочтений/просмотров) 
оборачивались в компонент `Popular`, а с количеством до 
100 в компонент `New`. Эти компоненты будут менять внешний 
облик блоков привлекая внимание посетителей.

## Реализация

Используя HOC обернуть `Video` и `Article` таким образом, чтобы при отображении в компоненте `List` они помещались внутрь требуемого компонента `Popular` или `New`.
