### /server => yarn dev

#### 190. Testing Surveys Endpoint in console

```
axios.get('/api/surveys')
```

```
Promise {<pending>}
__proto__
:
Promise
[[PromiseStatus]]
:
"resolved"
[[PromiseValue]]
:
Object
```

##### in Network :

surveys Preview:

```
[{yes: 0, no: 0, _id: "5aa236fc9f466919f48b68d3", title: "Campaign #10",…},…]
0:{yes: 0, no: 0, _id: "5aa236fc9f466919f48b68d3", title: "Campaign #10",…}
1:{yes: 0, no: 0, _id: "5aa23a192f680c1f1d04b30a", title: "Campaign #11", subject: "New Campaign 11",…}
2:{yes: 0, no: 0, _id: "5aa296cc2667785e283d0c16", title: "test survey", subject: "gwgwd",…}
3:{yes: 1, no: 0, _id: "5aa3a525e3d4b045df62aa4b", title: "super final test",…}
4:{yes: 1, no: 0, _id: "5aa3a90d6eed344a4dc4aa91", title: "lastResponded r$test",…}
```
