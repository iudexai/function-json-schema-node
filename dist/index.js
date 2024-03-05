"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  coerceFunctionJsonSchema: () => coerceFunctionJsonSchema,
  functionJsonSchema: () => functionJsonSchema,
  nullFunctionJson: () => nullFunctionJson
});
module.exports = __toCommonJS(src_exports);
var import_zod = require("zod");
var objectJsonSchema = import_zod.z.object({
  type: import_zod.z.literal("object"),
  properties: import_zod.z.record(import_zod.z.lazy(() => valueJsonSchema)),
  description: import_zod.z.string().optional(),
  required: import_zod.z.array(import_zod.z.string()).optional()
});
var recordJsonSchema = import_zod.z.object({
  type: import_zod.z.literal("object"),
  additionalProperties: import_zod.z.lazy(() => valueJsonSchema),
  description: import_zod.z.string().optional()
});
var arrayJsonSchema = import_zod.z.object({
  type: import_zod.z.literal("array"),
  items: import_zod.z.lazy(() => valueJsonSchema),
  description: import_zod.z.string().optional()
});
var tupleJsonSchema = import_zod.z.object({
  type: import_zod.z.literal("array"),
  prefixItems: import_zod.z.array(import_zod.z.string()),
  description: import_zod.z.string().optional()
});
var stringJsonSchema = import_zod.z.object({
  type: import_zod.z.literal("string"),
  enum: import_zod.z.array(import_zod.z.string()).optional(),
  description: import_zod.z.string().optional()
});
var numberJsonSchema = import_zod.z.object({
  type: import_zod.z.union([import_zod.z.literal("number"), import_zod.z.literal("integer")]),
  description: import_zod.z.string().optional(),
  minimum: import_zod.z.number().optional(),
  maximum: import_zod.z.number().optional()
});
var booleanJsonSchema = import_zod.z.object({
  type: import_zod.z.literal("boolean"),
  description: import_zod.z.string().optional()
});
var unionJsonSchema = import_zod.z.object({
  type: import_zod.z.array(import_zod.z.string()),
  description: import_zod.z.string().optional()
});
var realUnionJsonSchema = import_zod.z.object({
  anyOf: import_zod.z.array(import_zod.z.lazy(() => valueJsonSchema)),
  description: import_zod.z.string().optional()
});
var unknownJsonSchema = import_zod.z.object({
  type: import_zod.z.literal("unknown"),
  description: import_zod.z.string().optional()
});
var nullJsonSchema = import_zod.z.object({
  type: import_zod.z.literal("null"),
  description: import_zod.z.string().optional()
});
var refJsonSchema = import_zod.z.object({
  $ref: import_zod.z.string(),
  description: import_zod.z.string().optional()
});
var valueJsonSchema = import_zod.z.union([
  objectJsonSchema,
  recordJsonSchema,
  arrayJsonSchema,
  tupleJsonSchema,
  stringJsonSchema,
  numberJsonSchema,
  booleanJsonSchema,
  unionJsonSchema,
  realUnionJsonSchema,
  unknownJsonSchema,
  nullJsonSchema,
  refJsonSchema
]);
var functionJsonSchema = import_zod.z.object({
  name: import_zod.z.string(),
  description: import_zod.z.string(),
  parameters: import_zod.z.union([
    import_zod.z.object({
      type: import_zod.z.literal("object"),
      properties: import_zod.z.record(valueJsonSchema),
      description: import_zod.z.string().optional(),
      required: import_zod.z.array(import_zod.z.string()).optional()
    }),
    import_zod.z.array(valueJsonSchema)
  ]),
  returns: valueJsonSchema,
  usageExample: import_zod.z.string().optional(),
  returnsExample: import_zod.z.string().optional()
});
var nullFunctionJson = {
  name: "",
  description: "",
  parameters: [],
  returns: { type: "null" }
};
var coerceObjectJsonSchema = import_zod.z.object({
  type: import_zod.z.literal("object"),
  properties: import_zod.z.record(import_zod.z.lazy(() => coerceValueJsonSchema)),
  description: import_zod.z.coerce.string().optional(),
  required: import_zod.z.array(import_zod.z.coerce.string()).optional().catch([])
});
var coerceRecordJsonSchema = import_zod.z.object({
  type: import_zod.z.literal("object"),
  additionalProperties: import_zod.z.lazy(() => coerceValueJsonSchema),
  description: import_zod.z.string().optional()
});
var coerceArrayJsonSchema = import_zod.z.object({
  type: import_zod.z.literal("array"),
  items: import_zod.z.lazy(() => coerceValueJsonSchema),
  description: import_zod.z.coerce.string().optional()
});
var coerceTupleJsonSchema = import_zod.z.object({
  type: import_zod.z.literal("array"),
  prefixItems: import_zod.z.array(import_zod.z.coerce.string()),
  description: import_zod.z.coerce.string().optional()
});
var coerceStringJsonSchema = import_zod.z.object({
  type: import_zod.z.literal("string"),
  enum: import_zod.z.array(import_zod.z.string()).optional(),
  description: import_zod.z.coerce.string().optional()
});
var coerceNumberJsonSchema = import_zod.z.object({
  type: import_zod.z.union([import_zod.z.literal("number"), import_zod.z.literal("integer")]),
  description: import_zod.z.coerce.string().optional(),
  minimum: import_zod.z.number().optional(),
  maximum: import_zod.z.number().optional()
});
var coerceBooleanJsonSchema = import_zod.z.object({
  type: import_zod.z.literal("boolean"),
  description: import_zod.z.coerce.string().optional()
});
var coerceUnionJsonSchema = import_zod.z.object({
  type: import_zod.z.array(import_zod.z.coerce.string()),
  description: import_zod.z.coerce.string().optional()
});
var coerceRealUnionJsonSchema = import_zod.z.object({
  anyOf: import_zod.z.array(import_zod.z.lazy(() => valueJsonSchema)),
  description: import_zod.z.coerce.string().optional()
});
var coerceUnknownJsonSchema = import_zod.z.object({
  type: import_zod.z.literal("unknown"),
  description: import_zod.z.coerce.string().optional()
});
var coerceNullJsonSchema = import_zod.z.object({
  type: import_zod.z.literal("null"),
  description: import_zod.z.coerce.string().optional()
});
var coerceRefJsonSchema = import_zod.z.object({
  $ref: import_zod.z.string(),
  description: import_zod.z.coerce.string().optional()
});
var coerceValueJsonSchema = import_zod.z.union([
  coerceObjectJsonSchema,
  coerceRecordJsonSchema,
  coerceArrayJsonSchema,
  coerceTupleJsonSchema,
  coerceStringJsonSchema,
  coerceNumberJsonSchema,
  coerceBooleanJsonSchema,
  coerceUnionJsonSchema,
  coerceRealUnionJsonSchema,
  coerceUnknownJsonSchema,
  coerceNullJsonSchema,
  coerceRefJsonSchema
]);
var coerceFunctionJsonSchema = import_zod.z.object({
  name: import_zod.z.string(),
  description: import_zod.z.coerce.string(),
  parameters: import_zod.z.object({
    type: import_zod.z.literal("object").transform(() => "object"),
    properties: import_zod.z.record(
      coerceValueJsonSchema.catch({ type: "unknown", description: "" })
    ).catch({}),
    description: import_zod.z.string().optional().catch(void 0),
    required: import_zod.z.array(import_zod.z.string()).optional().catch(void 0)
  }).passthrough(),
  returns: coerceValueJsonSchema.catch({ type: "unknown", description: "" })
}).passthrough();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  coerceFunctionJsonSchema,
  functionJsonSchema,
  nullFunctionJson
});
//# sourceMappingURL=index.js.map