# Switch

[![Greenkeeper badge](https://badges.greenkeeper.io/entercosmos/switch.svg)](https://greenkeeper.io/)

[![npm package][npm-badge]][npm]

Used for making a choice between yes and no.

## Getting started

````
npm install @cmds/switch --save
````

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String |  | Unique identifier for the field |
| className | String |  | Add a className to the component |
| value | String | ✓ | Checked / unchecked value |
| width | Number |  | Set the width of the switch. Default: `46` |
| disabled | Boolean |  | Prevents the user from toggling the switch. Default: `false` |
| onChange | Function |  | Triggers when the value changes: `({id: string, value: string})` |

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/number-input.svg
[npm]: https://www.npmjs.org/package/@cmds/number-input
