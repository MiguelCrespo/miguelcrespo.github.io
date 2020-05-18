---
title: Rendering list with ReasonReact
date: "2020-05-18T20:12:03.284Z"
description: "Rendering a list with ReasonReact can be difficult while starting"
tags: ["react", "reasonml", "note"]
---

I was testing ReasonML the other day and although I think it is a great language, I sadly stumbled on a lot of problems and cryptic messages.

Once of those was when I tried to render a simple list with `react` . I got this error:

```reason
[undefined] [E] Error: This expression has type list(React.element)
       but an expression was expected of type React.element
```

And let me tell you it was a loong run to find how to solve because apparently the language has changed a lot during the last year(s).

This basically was me trying to find the answer (18:01):

<iframe width="930" height="523" src="https://www.youtube.com/embed/6MSksJhPcVA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>
After googling a long time for examples, I found this solution:

```reason
ReasonReact.array(...your code...)
```

<br>
I tried with my code:

```reason
{ReasonReact.array(todos |> List.map(item => <Todo key={item.text} item />))}
```

<br>

Then another error: 😨

```reason
[undefined] [E] Error: This expression has type list(React.element)
       but an expression was expected of type array(ReasonReact.reactElement)
```

# Final Solution:

```reason
{ReasonReact.array(
   Array.of_list(
     todos |> List.map(item => <Todo key={item.text} item />),
   ),
 )}
```

<br>
