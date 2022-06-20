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

## Emmited events

When the data is changed on the table by the user, the table emits an event called ``` save ```.

you can then make your backend call to change the data and also apply the changes, also the table rerender the changed data.

## Installation

Install the dependencies and start the server test.

```sh
cd data-table
npm i
npm run serve
```

