# Notion Project Icon

Generate 280x280px colored SVG to be used as [Notion](https://www.notion.so) page icon.

## API

```
GET /icon.svg
```

| Query parameter | Required | Description                                                                                                              | Example                                       |
| --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| colors          | true     | Single or multiple colors. The resulting SVG is divided. Any CSS color value is valid as long as it is properly encoded. | `?colors=blue` / `?colors=blue&colors=%23c30` |
| rotate          | false    | Rotate resulting SVG so colors are divided heorzontally instead.                                                         | `?colors=blue&colors=%23c30&rotate=true`      |

## Development

`npx vercel dev`

## Deployment

`npx vercel --prod`
