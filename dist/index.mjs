// src/index.ts
import { z } from "zod";
var objectJsonSchema = z.object({
  type: z.literal("object"),
  properties: z.record(z.lazy(() => valueJsonSchema)),
  description: z.string().optional(),
  required: z.array(z.string()).optional()
});
var recordJsonSchema = z.object({
  type: z.literal("object"),
  additionalProperties: z.lazy(() => valueJsonSchema),
  description: z.string().optional()
});
var arrayJsonSchema = z.object({
  type: z.literal("array"),
  items: z.lazy(() => valueJsonSchema),
  description: z.string().optional()
});
var tupleJsonSchema = z.object({
  type: z.literal("array"),
  prefixItems: z.array(z.string()),
  description: z.string().optional()
});
var stringJsonSchema = z.object({
  type: z.literal("string"),
  enum: z.array(z.string()).optional(),
  description: z.string().optional()
});
var numberJsonSchema = z.object({
  type: z.union([z.literal("number"), z.literal("integer")]),
  description: z.string().optional(),
  minimum: z.number().optional(),
  maximum: z.number().optional()
});
var booleanJsonSchema = z.object({
  type: z.literal("boolean"),
  description: z.string().optional()
});
var unionJsonSchema = z.object({
  type: z.array(z.string()),
  description: z.string().optional()
});
var realUnionJsonSchema = z.object({
  anyOf: z.array(z.lazy(() => valueJsonSchema)),
  description: z.string().optional()
});
var unknownJsonSchema = z.object({
  type: z.literal("unknown"),
  description: z.string().optional()
});
var nullJsonSchema = z.object({
  type: z.literal("null"),
  description: z.string().optional()
});
var refJsonSchema = z.object({
  $ref: z.string(),
  description: z.string().optional()
});
var valueJsonSchema = z.union([
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
var functionJsonSchema = z.object({
  name: z.string(),
  description: z.string(),
  parameters: z.union([
    z.object({
      type: z.literal("object"),
      properties: z.record(valueJsonSchema),
      description: z.string().optional(),
      required: z.array(z.string()).optional()
    }),
    z.array(valueJsonSchema)
  ]),
  returns: valueJsonSchema,
  usageExample: z.string().optional(),
  returnsExample: z.string().optional()
});
var nullFunctionJson = {
  name: "",
  description: "",
  parameters: [],
  returns: { type: "null" }
};
var coerceObjectJsonSchema = z.object({
  type: z.literal("object"),
  properties: z.record(z.lazy(() => coerceValueJsonSchema)),
  description: z.coerce.string().optional(),
  required: z.array(z.coerce.string()).optional().catch([])
});
var coerceRecordJsonSchema = z.object({
  type: z.literal("object"),
  additionalProperties: z.lazy(() => coerceValueJsonSchema),
  description: z.string().optional()
});
var coerceArrayJsonSchema = z.object({
  type: z.literal("array"),
  items: z.lazy(() => coerceValueJsonSchema),
  description: z.coerce.string().optional()
});
var coerceTupleJsonSchema = z.object({
  type: z.literal("array"),
  prefixItems: z.array(z.coerce.string()),
  description: z.coerce.string().optional()
});
var coerceStringJsonSchema = z.object({
  type: z.literal("string"),
  enum: z.array(z.string()).optional(),
  description: z.coerce.string().optional()
});
var coerceNumberJsonSchema = z.object({
  type: z.union([z.literal("number"), z.literal("integer")]),
  description: z.coerce.string().optional(),
  minimum: z.number().optional(),
  maximum: z.number().optional()
});
var coerceBooleanJsonSchema = z.object({
  type: z.literal("boolean"),
  description: z.coerce.string().optional()
});
var coerceUnionJsonSchema = z.object({
  type: z.array(z.coerce.string()),
  description: z.coerce.string().optional()
});
var coerceRealUnionJsonSchema = z.object({
  anyOf: z.array(z.lazy(() => valueJsonSchema)),
  description: z.coerce.string().optional()
});
var coerceUnknownJsonSchema = z.object({
  type: z.literal("unknown"),
  description: z.coerce.string().optional()
});
var coerceNullJsonSchema = z.object({
  type: z.literal("null"),
  description: z.coerce.string().optional()
});
var coerceRefJsonSchema = z.object({
  $ref: z.string(),
  description: z.coerce.string().optional()
});
var coerceValueJsonSchema = z.union([
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
var coerceFunctionJsonSchema = z.object({
  name: z.string(),
  description: z.coerce.string(),
  parameters: z.object({
    type: z.literal("object").transform(() => "object"),
    properties: z.record(
      coerceValueJsonSchema.catch({ type: "unknown", description: "" })
    ).catch({}),
    description: z.string().optional().catch(void 0),
    required: z.array(z.string()).optional().catch(void 0)
  }).passthrough(),
  returns: coerceValueJsonSchema.catch({ type: "unknown", description: "" })
}).passthrough();
export {
  coerceFunctionJsonSchema,
  functionJsonSchema,
  nullFunctionJson
};
//# sourceMappingURL=index.mjs.map