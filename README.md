<hr>

## **_Tour Management API_**

<hr>

Here I use

<ul>
<li>Node Js - for server running</li>
<li>Express Js - for create API easily</li>
<li>Dotenv - for environement varriable</li>
<li>Cors - for middleware</li>
<li>Colors - for colorful message</li>
<li>Mongoose - for use mongoDB easily</li>
<li>Nodemon - for simply restarts node application</li>
</ul>

In this application has 6 API end-point

Application URL

```bash
https://acc-node-mongo-assignment-02.onrender.com
```

<ol>
<li>

### _Get all tour package or specifice tour package as your query API_

```bash
https://acc-node-mongo-assignment-02.onrender.com/tours
```

This get api end-point provide all tours package or specific tours package as your query. Here dafault limit 3 which means in one page show only 3 tour package. Your can query by fields, limit, sort, page, logical operation like as greater then or less then etc., and data many more. Query perameter link like this

```bash
https://acc-node-mongo-assignment-02.onrender.com/tours?sort=-price&fields=name,price&limit=4&page=3&price[gt]=2000
```

</li>
<li>

### _Create tour package API_

```bash
https://acc-node-mongo-assignment-02.onrender.com/tours
```

This post api create new tour package given body data. This body data is validate by mongoose schema. Schema design is

```javascript
{
  "name": "String",
  "description": "String",
  "price": number,
  "duration": number,
  "maxPeople": number,
  "status": "String",
  "view": number,
  "image": "String"
}
```

Give the example below:-

```bash
{
  "name": "Tour name",
  "description": "This is a wonderfull tour for you or your family. In this tour your visit saint martin",
  "price": 15000,
  "duration": 2,
  "maxPeople": 1,
  "status": "available",
  "view": 0,
  "image": "https://i.ibb.co/W54XBqJ/tourthum.jpg"
}
```

</li>
<li>

### _Get the specific tour package API end-point_

```bash
https://acc-node-mongo-assignment-02.onrender.com/tours/:id
```

Example API

```bash
https://acc-node-mongo-assignment-02.onrender.com/tours/63447220777caa014cf7b3c8
```

Get a given id tour package information and that package is count a view in each end-point hitting

</li>
<li>

### _Update the specific tour package API end-point_

```bash
https://acc-node-mongo-assignment-02.onrender.com/tour/:id
```

Example API

```bash
https://acc-node-mongo-assignment-02.onrender.com/tour/63447220777caa014cf7b3c8
```

This api get the id form url params and get the update data from the req body. Body example like this

```bash
{
  "status": "unavailable"
}
```

</li>

<li>

### _Get top 3 viewed tour package API end-point_

```bash
https://acc-node-mongo-assignment-02.onrender.com/tour/trending
```

</li>
<li>

### _Get top 3 cheapest tour package API end-point_

```bash
https://acc-node-mongo-assignment-02.onrender.com/tour/cheapest
```

</li>
</ol>

[Visit My Website](https://imshama.com)
