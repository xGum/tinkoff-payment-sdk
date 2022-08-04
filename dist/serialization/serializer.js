"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeData = void 0;
const lodash_1 = require("lodash");
const schema_1 = require("./schema");
const boolean_1 = require("./serializers/boolean");
const date_1 = require("./serializers/date");
const integer_1 = require("./serializers/integer");
const money_1 = require("./serializers/money");
// eslint-disable-next-line @typescript-eslint/ban-types
function serializeData(options) {
    const { schema, ignoreMissing, } = options;
    // Shallow cloning the data
    const data = Object.assign({}, options.data);
    for (const { property, type, optional } of schema) {
        try {
            let value = lodash_1.get(data, property);
            // Checking missing value
            if (value === undefined) {
                if (!optional && !ignoreMissing) {
                    // noinspection ExceptionCaughtLocallyJS
                    throw new Error('Required property is missing');
                }
                else {
                    continue;
                }
            }
            switch (type) {
                case schema_1.SchemaPropertyType.MoneyToPenny:
                    value = money_1.moneyToPennyOrThrow(value);
                    break;
                case schema_1.SchemaPropertyType.MoneyFromPenny:
                    value = money_1.moneyFromPennyOrThrow(value);
                    break;
                case schema_1.SchemaPropertyType.DateToString:
                    value = date_1.dateToStringOrThrow(value);
                    break;
                case schema_1.SchemaPropertyType.DateFromString:
                    value = date_1.dateFromStringOrThrow(value);
                    break;
                case schema_1.SchemaPropertyType.ExpDateFromString:
                    value = date_1.expDateFromStringOrThrow(value);
                    break;
                case schema_1.SchemaPropertyType.BooleanToString:
                    value = boolean_1.booleanToString(value);
                    break;
                case schema_1.SchemaPropertyType.BooleanFromString:
                    value = boolean_1.booleanFromString(value);
                    break;
                case schema_1.SchemaPropertyType.IntegerToString:
                    value = integer_1.integerToString(value);
                    break;
                case schema_1.SchemaPropertyType.IntegerFromString:
                    value = integer_1.integerFromString(value);
                    break;
            }
            lodash_1.set(data, property, value);
        }
        catch (error) {
            throw new Error(`Failed to serialize property "${property}": ${error.message} ` +
                `using "${type}" serializer`);
        }
    }
    return data;
}
exports.serializeData = serializeData;
//# sourceMappingURL=serializer.js.map