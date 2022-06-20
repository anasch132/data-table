# Vue-Data-Table

## A data table to visualize and interact with data

DataTable is used to present data in tabular form.
It provides the following benefits:

- display multiple rows
- take basic styling options by row, column or cell
- have 1-level nested sub-rows (a parent row can have children rows)

## How it works

You can import the component and pass the data as props, also it is customizable wich mean you can style it as you want by passing directly the styles to the component, or if you want to style the by row or by column or by cell , you can pass the desired classes from the json directly.

to make the component work perfectly you should respect this schema of json file:

```sh
{
    "headers": [
    {
      "text": "text to be shown on the header",
      "id": __ID__,
      "value": "The value to be mapped from body data",
      "__classes__": ["Array of classes to be used for the column part"]
    },
    ],
    "body": [
    {
      "__classes__": {
        "__all__": ["Array of classes to be added for the row"],
        "key_for_header_value": ["Array of classes to apply style for only this cell"]
      },
      "key": "ID of the row",
      "editable": Boolean,
      "key_for_header_value": "Value to be showed on the td element of the table",
      "__children__": [
        {
          "__classes__": {
            "__all__": ["Array of classes to be added for the child row"],
            "key_for_header_value": ["Array of classes to apply style for only this child cell"]
          },
          "editable": Boolean,
          "key_for_header_value": "Value to be showed on the TD child element of the table",
        },
      ]
    },
    ]
}
```

This is an example of data in Json file

```sh
{
  "headers": [
    {
      "text": "Food Items (Nutrition 100g)",
      "id": 1,
      "value": "name",
      "__classes__": ["bg-red-200"]
    },
    { "text": "Energy", "value": "energy", "id": 2 },
    { "text": "Protein", "value": "protein", "id": 3 },
    { "text": "Fat", "value": "fat", "id": 4},
    { "text": "Carbohydrate", "value": "carbohydrate", "id": 5 },
    { "text": "Sodium", "value": "sodium", "id": 6 }
  ],
  "body": [
    {
      "__classes__": {
        "__all__": ["bg-yellow-200"],
        "fat": [""]
      },
      "key": "key1",
      "editable": true,
      "name": "parent",
      "energy": 201,
      "protein": 5.0,
      "fat": 34,
      "carbohydrate": 5.5,
      "sodium": "1.5%",
      "__children__": [
        {
          "__classes__": {
            "__all__": ["bg-yellow-200"],
            "name": ["bg-green-200"]
          },
          "editable": true,
          "name": "child",
          "energy": 201,
          "protein": 5.0,
          "fat": 34,
          "carbohydrate": 5.5,
          "sodium": "1.5%"
        },
        {
            "name": "child",
            "energy": 201,
            "protein": 5.0,
            "fat": 34,
            "carbohydrate": 5.5,
            "sodium": "1.5%"
          },
          {
            "name": "child",
            "energy": 201,
            "protein": 5.0,
            "fat": 34,
            "carbohydrate": 5.5,
            "sodium": "1.5%"
          }
      ]
    },
    {
      "key": "key2",
      "editable": true,
      "name": "Wholegrain Rolled Oats",
      "energy": 301,
      "protein": 3.0,
      "fat": 54,
      "carbohydrate": 3.5,
      "sodium": "2.5%"
    },
    {
      "key": "key3",
      "editable": true,
      "name": "Almond Milk",
      "energy": 130,
      "protein": 6.0,
      "fat": 24,
      "carbohydrate": 3.9,
      "sodium": "3.5%"
    },
    {
      "key": "key4",
      "editable": true,
      "name": "Firm Tofu",
      "energy": 101,
      "protein": 2.0,
      "fat": 25,
      "carbohydrate": 2.1,
      "sodium": "0.5%"
    },
    {
      "key": "key5",
      "editable": true,
      "name": "Hummus",
      "energy": 201,
      "protein": 8.4,
      "fat": 10.8,
      "carbohydrate": 4.6,
      "sodium": "2.5%"
    },
    {
      "name": "Peanut Butter",
      "energy": 2580,
      "protein": 28,
      "fat": 50,
      "carbohydrate": 12,
      "sodium": "3.5%"
    },
    {
      "name": "Tahini",
      "energy": 2760,
      "protein": 25.0,
      "fat": 57.3,
      "carbohydrate": 12,
      "sodium": "7.0%"
    },
    {
      "name": "Butter Beans",
      "energy": 384,
      "protein": 7.4,
      "fat": 0.9,
      "carbohydrate": 15.2,
      "sodium": "3.1%"
    },
    {
      "name": "Chickpeas",
      "energy": 391,
      "protein": 5.0,
      "fat": 34,
      "carbohydrate": 5.5,
      "sodium": "2.3%"
    },
    {
      "name": "Lentils",
      "energy": 290,
      "protein": 4.2,
      "fat": 0.9,
      "carbohydrate": 15,
      "sodium": "1.0%"
    }
  ]
}
```

## Emmited events

When the data is changed on the table by the user, the table emits an event called `save`.

you can then make your backend call to change the data and also apply the changes, also the table rerender the changed data.

## Running for test

Install the dependencies and start the server test.

```sh
cd data-table
npm i
npm run serve
```
