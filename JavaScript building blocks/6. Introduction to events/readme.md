## Introduction to events

이벤트란 프로그래밍중인 시스템에서 발생하는 동작이나 발생을 말하며, 시스템에서 그에 대해 알려주므로 원하는 경우 사용자가 어떤 방식으로든 이에 응답 할 수 있습니다. 예를 들어 사용자가 웹 페이지에서 버튼을 클릭하면 정보 상자를 표시하여 해당 작업에 응답 할 수 있습니다. 이 마지막 문서에서는 이벤트를 둘러싼 몇 가지 중요한 개념에 대해 이야기하고 브라우저에서 어떻게 작동하는지 살펴 보겠습니다.

|     |                  내용                  |              폴더(파일)명              |
| :-: | :------------------------------------: | :------------------------------------: |
|  1  | Event handler properties, Event Object | random-color-eventhandlerproperty.html |
|  2  |      Preventing default behavoir       |     preventdefault-validation.html     |
|  3  |       Event bubbling and capture       |          show-video-box.html           |
|  4  |            Event delegation            |         event-delegation.html          |

### **Bubbling** and **capturing** explained

- [Source](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

When an event is fired on an element that has parent elements (in this case, the "video" has the "div" as a parent), modern browsers run two different phases — the capturing phase and the bubbling phase.

In the **capturing phase**

- The browser checks to see if the element's outer-most ancestor (html) has an onclick event handler registered on it for the capturing phase, and runs it if so.
- Then it moves on to the next element inside "html" and does the same thing, then the next one, and so on until it reaches the element that was actually selected.

In the **bubbling phase**, the exact opposite occurs

- The browser checks to see if the element selected has an onclick event handler registered on it for the bubbling phase, and runs it if so.
- Then it moves on to the next immediate ancestor element and does the same thing, then the next one, and so on until it reaches the "html" element.

![bubbling-capturing](https://user-images.githubusercontent.com/46748131/108507273-6a42ff00-72fd-11eb-95f7-aab28a454d10.png)
