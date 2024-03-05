import { z } from 'zod';

/**
 * Recursive JSON object schema
 */
type ObjectJsonSchema = {
    type: 'object';
    properties: Record<string, ValueJsonSchema>;
    description?: string;
};
type RecordJsonSchema = {
    type: 'object';
    additionalProperties: ValueJsonSchema;
    description?: string;
};
type ArrayJsonSchema = {
    type: 'array';
    items: ValueJsonSchema;
    description?: string;
};
type RealUnionJsonSchema = {
    anyOf: ValueJsonSchema[];
    description?: string;
};
declare const valueJsonSchema: z.ZodUnion<[z.ZodType<ObjectJsonSchema, z.ZodTypeDef, ObjectJsonSchema>, z.ZodType<RecordJsonSchema, z.ZodTypeDef, RecordJsonSchema>, z.ZodType<ArrayJsonSchema, z.ZodTypeDef, ArrayJsonSchema>, z.ZodObject<{
    type: z.ZodLiteral<"array">;
    prefixItems: z.ZodArray<z.ZodString, "many">;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "array";
    prefixItems: string[];
    description?: string | undefined;
}, {
    type: "array";
    prefixItems: string[];
    description?: string | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"string">;
    enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "string";
    enum?: string[] | undefined;
    description?: string | undefined;
}, {
    type: "string";
    enum?: string[] | undefined;
    description?: string | undefined;
}>, z.ZodObject<{
    type: z.ZodUnion<[z.ZodLiteral<"number">, z.ZodLiteral<"integer">]>;
    description: z.ZodOptional<z.ZodString>;
    minimum: z.ZodOptional<z.ZodNumber>;
    maximum: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "number" | "integer";
    description?: string | undefined;
    minimum?: number | undefined;
    maximum?: number | undefined;
}, {
    type: "number" | "integer";
    description?: string | undefined;
    minimum?: number | undefined;
    maximum?: number | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"boolean">;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "boolean";
    description?: string | undefined;
}, {
    type: "boolean";
    description?: string | undefined;
}>, z.ZodObject<{
    type: z.ZodArray<z.ZodString, "many">;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: string[];
    description?: string | undefined;
}, {
    type: string[];
    description?: string | undefined;
}>, z.ZodType<RealUnionJsonSchema, z.ZodTypeDef, RealUnionJsonSchema>, z.ZodObject<{
    type: z.ZodLiteral<"unknown">;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "unknown";
    description?: string | undefined;
}, {
    type: "unknown";
    description?: string | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"null">;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "null";
    description?: string | undefined;
}, {
    type: "null";
    description?: string | undefined;
}>, z.ZodObject<{
    $ref: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    $ref: string;
    description?: string | undefined;
}, {
    $ref: string;
    description?: string | undefined;
}>]>;
type ValueJsonSchema = z.infer<typeof valueJsonSchema>;
/**
 * OpenAI function json schema
 */
declare const functionJsonSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    parameters: z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"object">;
        properties: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodType<ObjectJsonSchema, z.ZodTypeDef, ObjectJsonSchema>, z.ZodType<RecordJsonSchema, z.ZodTypeDef, RecordJsonSchema>, z.ZodType<ArrayJsonSchema, z.ZodTypeDef, ArrayJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"array">;
            prefixItems: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"string">;
            enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodUnion<[z.ZodLiteral<"number">, z.ZodLiteral<"integer">]>;
            description: z.ZodOptional<z.ZodString>;
            minimum: z.ZodOptional<z.ZodNumber>;
            maximum: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"boolean">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "boolean";
            description?: string | undefined;
        }, {
            type: "boolean";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: string[];
            description?: string | undefined;
        }, {
            type: string[];
            description?: string | undefined;
        }>, z.ZodType<RealUnionJsonSchema, z.ZodTypeDef, RealUnionJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"unknown">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "unknown";
            description?: string | undefined;
        }, {
            type: "unknown";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"null">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "null";
            description?: string | undefined;
        }, {
            type: "null";
            description?: string | undefined;
        }>, z.ZodObject<{
            $ref: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            $ref: string;
            description?: string | undefined;
        }, {
            $ref: string;
            description?: string | undefined;
        }>]>>;
        description: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        type: "object";
        properties: Record<string, ObjectJsonSchema | RecordJsonSchema | ArrayJsonSchema | {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        } | {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        } | {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        } | {
            type: "boolean";
            description?: string | undefined;
        } | {
            type: string[];
            description?: string | undefined;
        } | RealUnionJsonSchema | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "null";
            description?: string | undefined;
        } | {
            $ref: string;
            description?: string | undefined;
        }>;
        description?: string | undefined;
        required?: string[] | undefined;
    }, {
        type: "object";
        properties: Record<string, ObjectJsonSchema | RecordJsonSchema | ArrayJsonSchema | {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        } | {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        } | {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        } | {
            type: "boolean";
            description?: string | undefined;
        } | {
            type: string[];
            description?: string | undefined;
        } | RealUnionJsonSchema | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "null";
            description?: string | undefined;
        } | {
            $ref: string;
            description?: string | undefined;
        }>;
        description?: string | undefined;
        required?: string[] | undefined;
    }>, z.ZodArray<z.ZodUnion<[z.ZodType<ObjectJsonSchema, z.ZodTypeDef, ObjectJsonSchema>, z.ZodType<RecordJsonSchema, z.ZodTypeDef, RecordJsonSchema>, z.ZodType<ArrayJsonSchema, z.ZodTypeDef, ArrayJsonSchema>, z.ZodObject<{
        type: z.ZodLiteral<"array">;
        prefixItems: z.ZodArray<z.ZodString, "many">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    }, {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"string">;
        enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    }, {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodUnion<[z.ZodLiteral<"number">, z.ZodLiteral<"integer">]>;
        description: z.ZodOptional<z.ZodString>;
        minimum: z.ZodOptional<z.ZodNumber>;
        maximum: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    }, {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"boolean">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "boolean";
        description?: string | undefined;
    }, {
        type: "boolean";
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodArray<z.ZodString, "many">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: string[];
        description?: string | undefined;
    }, {
        type: string[];
        description?: string | undefined;
    }>, z.ZodType<RealUnionJsonSchema, z.ZodTypeDef, RealUnionJsonSchema>, z.ZodObject<{
        type: z.ZodLiteral<"unknown">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "unknown";
        description?: string | undefined;
    }, {
        type: "unknown";
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"null">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "null";
        description?: string | undefined;
    }, {
        type: "null";
        description?: string | undefined;
    }>, z.ZodObject<{
        $ref: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        $ref: string;
        description?: string | undefined;
    }, {
        $ref: string;
        description?: string | undefined;
    }>]>, "many">]>;
    returns: z.ZodUnion<[z.ZodType<ObjectJsonSchema, z.ZodTypeDef, ObjectJsonSchema>, z.ZodType<RecordJsonSchema, z.ZodTypeDef, RecordJsonSchema>, z.ZodType<ArrayJsonSchema, z.ZodTypeDef, ArrayJsonSchema>, z.ZodObject<{
        type: z.ZodLiteral<"array">;
        prefixItems: z.ZodArray<z.ZodString, "many">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    }, {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"string">;
        enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    }, {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodUnion<[z.ZodLiteral<"number">, z.ZodLiteral<"integer">]>;
        description: z.ZodOptional<z.ZodString>;
        minimum: z.ZodOptional<z.ZodNumber>;
        maximum: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    }, {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"boolean">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "boolean";
        description?: string | undefined;
    }, {
        type: "boolean";
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodArray<z.ZodString, "many">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: string[];
        description?: string | undefined;
    }, {
        type: string[];
        description?: string | undefined;
    }>, z.ZodType<RealUnionJsonSchema, z.ZodTypeDef, RealUnionJsonSchema>, z.ZodObject<{
        type: z.ZodLiteral<"unknown">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "unknown";
        description?: string | undefined;
    }, {
        type: "unknown";
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"null">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "null";
        description?: string | undefined;
    }, {
        type: "null";
        description?: string | undefined;
    }>, z.ZodObject<{
        $ref: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        $ref: string;
        description?: string | undefined;
    }, {
        $ref: string;
        description?: string | undefined;
    }>]>;
    usageExample: z.ZodOptional<z.ZodString>;
    returnsExample: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    description: string;
    name: string;
    parameters: ((ObjectJsonSchema | RecordJsonSchema | ArrayJsonSchema | {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    } | {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    } | {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    } | {
        type: "boolean";
        description?: string | undefined;
    } | {
        type: string[];
        description?: string | undefined;
    } | RealUnionJsonSchema | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "null";
        description?: string | undefined;
    } | {
        $ref: string;
        description?: string | undefined;
    })[] | {
        type: "object";
        properties: Record<string, ObjectJsonSchema | RecordJsonSchema | ArrayJsonSchema | {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        } | {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        } | {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        } | {
            type: "boolean";
            description?: string | undefined;
        } | {
            type: string[];
            description?: string | undefined;
        } | RealUnionJsonSchema | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "null";
            description?: string | undefined;
        } | {
            $ref: string;
            description?: string | undefined;
        }>;
        description?: string | undefined;
        required?: string[] | undefined;
    }) & ((ObjectJsonSchema | RecordJsonSchema | ArrayJsonSchema | {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    } | {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    } | {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    } | {
        type: "boolean";
        description?: string | undefined;
    } | {
        type: string[];
        description?: string | undefined;
    } | RealUnionJsonSchema | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "null";
        description?: string | undefined;
    } | {
        $ref: string;
        description?: string | undefined;
    })[] | {
        type: "object";
        properties: Record<string, ObjectJsonSchema | RecordJsonSchema | ArrayJsonSchema | {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        } | {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        } | {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        } | {
            type: "boolean";
            description?: string | undefined;
        } | {
            type: string[];
            description?: string | undefined;
        } | RealUnionJsonSchema | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "null";
            description?: string | undefined;
        } | {
            $ref: string;
            description?: string | undefined;
        }>;
        description?: string | undefined;
        required?: string[] | undefined;
    } | undefined);
    returns: ObjectJsonSchema | RecordJsonSchema | ArrayJsonSchema | {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    } | {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    } | {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    } | {
        type: "boolean";
        description?: string | undefined;
    } | {
        type: string[];
        description?: string | undefined;
    } | RealUnionJsonSchema | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "null";
        description?: string | undefined;
    } | {
        $ref: string;
        description?: string | undefined;
    } | (ObjectJsonSchema & RecordJsonSchema) | (ObjectJsonSchema & {
        type: string[];
        description?: string | undefined;
    }) | (ObjectJsonSchema & RealUnionJsonSchema) | (ObjectJsonSchema & {
        $ref: string;
        description?: string | undefined;
    }) | (RecordJsonSchema & ObjectJsonSchema) | (RecordJsonSchema & {
        type: string[];
        description?: string | undefined;
    }) | (RecordJsonSchema & RealUnionJsonSchema) | (RecordJsonSchema & {
        $ref: string;
        description?: string | undefined;
    }) | (ArrayJsonSchema & {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    }) | (ArrayJsonSchema & {
        type: string[];
        description?: string | undefined;
    }) | (ArrayJsonSchema & RealUnionJsonSchema) | (ArrayJsonSchema & {
        $ref: string;
        description?: string | undefined;
    }) | ({
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    } & ArrayJsonSchema) | ({
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    } & {
        type: string[];
        description?: string | undefined;
    }) | ({
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    } & RealUnionJsonSchema) | ({
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    } & {
        $ref: string;
        description?: string | undefined;
    }) | ({
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    } & {
        type: string[];
        description?: string | undefined;
    }) | ({
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    } & RealUnionJsonSchema) | ({
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    } & {
        $ref: string;
        description?: string | undefined;
    }) | ({
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    } & {
        type: string[];
        description?: string | undefined;
    }) | ({
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    } & RealUnionJsonSchema) | ({
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    } & {
        $ref: string;
        description?: string | undefined;
    }) | ({
        type: "boolean";
        description?: string | undefined;
    } & {
        type: string[];
        description?: string | undefined;
    }) | ({
        type: "boolean";
        description?: string | undefined;
    } & RealUnionJsonSchema) | ({
        type: "boolean";
        description?: string | undefined;
    } & {
        $ref: string;
        description?: string | undefined;
    }) | ({
        type: string[];
        description?: string | undefined;
    } & ObjectJsonSchema) | ({
        type: string[];
        description?: string | undefined;
    } & RecordJsonSchema) | ({
        type: string[];
        description?: string | undefined;
    } & ArrayJsonSchema) | ({
        type: string[];
        description?: string | undefined;
    } & {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    }) | ({
        type: string[];
        description?: string | undefined;
    } & {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    }) | ({
        type: string[];
        description?: string | undefined;
    } & {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    }) | ({
        type: string[];
        description?: string | undefined;
    } & {
        type: "boolean";
        description?: string | undefined;
    }) | ({
        type: string[];
        description?: string | undefined;
    } & RealUnionJsonSchema) | ({
        type: string[];
        description?: string | undefined;
    } & {
        type: "unknown";
        description?: string | undefined;
    }) | ({
        type: string[];
        description?: string | undefined;
    } & {
        type: "null";
        description?: string | undefined;
    }) | ({
        type: string[];
        description?: string | undefined;
    } & {
        $ref: string;
        description?: string | undefined;
    }) | (RealUnionJsonSchema & ObjectJsonSchema) | (RealUnionJsonSchema & RecordJsonSchema) | (RealUnionJsonSchema & ArrayJsonSchema) | (RealUnionJsonSchema & {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    }) | (RealUnionJsonSchema & {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    }) | (RealUnionJsonSchema & {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    }) | (RealUnionJsonSchema & {
        type: "boolean";
        description?: string | undefined;
    }) | (RealUnionJsonSchema & {
        type: string[];
        description?: string | undefined;
    }) | (RealUnionJsonSchema & {
        type: "unknown";
        description?: string | undefined;
    }) | (RealUnionJsonSchema & {
        type: "null";
        description?: string | undefined;
    }) | (RealUnionJsonSchema & {
        $ref: string;
        description?: string | undefined;
    }) | ({
        type: "unknown";
        description?: string | undefined;
    } & {
        type: string[];
        description?: string | undefined;
    }) | ({
        type: "unknown";
        description?: string | undefined;
    } & RealUnionJsonSchema) | ({
        type: "unknown";
        description?: string | undefined;
    } & {
        $ref: string;
        description?: string | undefined;
    }) | ({
        type: "null";
        description?: string | undefined;
    } & {
        type: string[];
        description?: string | undefined;
    }) | ({
        type: "null";
        description?: string | undefined;
    } & RealUnionJsonSchema) | ({
        type: "null";
        description?: string | undefined;
    } & {
        $ref: string;
        description?: string | undefined;
    }) | ({
        $ref: string;
        description?: string | undefined;
    } & ObjectJsonSchema) | ({
        $ref: string;
        description?: string | undefined;
    } & RecordJsonSchema) | ({
        $ref: string;
        description?: string | undefined;
    } & ArrayJsonSchema) | ({
        $ref: string;
        description?: string | undefined;
    } & {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    }) | ({
        $ref: string;
        description?: string | undefined;
    } & {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    }) | ({
        $ref: string;
        description?: string | undefined;
    } & {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    }) | ({
        $ref: string;
        description?: string | undefined;
    } & {
        type: "boolean";
        description?: string | undefined;
    }) | ({
        $ref: string;
        description?: string | undefined;
    } & {
        type: string[];
        description?: string | undefined;
    }) | ({
        $ref: string;
        description?: string | undefined;
    } & RealUnionJsonSchema) | ({
        $ref: string;
        description?: string | undefined;
    } & {
        type: "unknown";
        description?: string | undefined;
    }) | ({
        $ref: string;
        description?: string | undefined;
    } & {
        type: "null";
        description?: string | undefined;
    });
    usageExample?: string | undefined;
    returnsExample?: string | undefined;
}, {
    description: string;
    name: string;
    parameters: ((ObjectJsonSchema | RecordJsonSchema | ArrayJsonSchema | {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    } | {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    } | {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    } | {
        type: "boolean";
        description?: string | undefined;
    } | {
        type: string[];
        description?: string | undefined;
    } | RealUnionJsonSchema | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "null";
        description?: string | undefined;
    } | {
        $ref: string;
        description?: string | undefined;
    })[] | {
        type: "object";
        properties: Record<string, ObjectJsonSchema | RecordJsonSchema | ArrayJsonSchema | {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        } | {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        } | {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        } | {
            type: "boolean";
            description?: string | undefined;
        } | {
            type: string[];
            description?: string | undefined;
        } | RealUnionJsonSchema | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "null";
            description?: string | undefined;
        } | {
            $ref: string;
            description?: string | undefined;
        }>;
        description?: string | undefined;
        required?: string[] | undefined;
    }) & ((ObjectJsonSchema | RecordJsonSchema | ArrayJsonSchema | {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    } | {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    } | {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    } | {
        type: "boolean";
        description?: string | undefined;
    } | {
        type: string[];
        description?: string | undefined;
    } | RealUnionJsonSchema | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "null";
        description?: string | undefined;
    } | {
        $ref: string;
        description?: string | undefined;
    })[] | {
        type: "object";
        properties: Record<string, ObjectJsonSchema | RecordJsonSchema | ArrayJsonSchema | {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        } | {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        } | {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        } | {
            type: "boolean";
            description?: string | undefined;
        } | {
            type: string[];
            description?: string | undefined;
        } | RealUnionJsonSchema | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "null";
            description?: string | undefined;
        } | {
            $ref: string;
            description?: string | undefined;
        }>;
        description?: string | undefined;
        required?: string[] | undefined;
    } | undefined);
    returns: ObjectJsonSchema | RecordJsonSchema | ArrayJsonSchema | {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    } | {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    } | {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    } | {
        type: "boolean";
        description?: string | undefined;
    } | {
        type: string[];
        description?: string | undefined;
    } | RealUnionJsonSchema | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "null";
        description?: string | undefined;
    } | {
        $ref: string;
        description?: string | undefined;
    } | (ObjectJsonSchema & RecordJsonSchema) | (ObjectJsonSchema & RealUnionJsonSchema) | (RecordJsonSchema & ObjectJsonSchema) | (RecordJsonSchema & RealUnionJsonSchema) | (ArrayJsonSchema & RealUnionJsonSchema) | (RealUnionJsonSchema & ObjectJsonSchema) | (RealUnionJsonSchema & RecordJsonSchema) | (RealUnionJsonSchema & ArrayJsonSchema) | (ObjectJsonSchema & {
        type: string[];
        description?: string | undefined;
    }) | (ObjectJsonSchema & {
        $ref: string;
        description?: string | undefined;
    }) | (RecordJsonSchema & {
        type: string[];
        description?: string | undefined;
    }) | (RecordJsonSchema & {
        $ref: string;
        description?: string | undefined;
    }) | (ArrayJsonSchema & {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    }) | (ArrayJsonSchema & {
        type: string[];
        description?: string | undefined;
    }) | (ArrayJsonSchema & {
        $ref: string;
        description?: string | undefined;
    }) | ({
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    } & ArrayJsonSchema) | ({
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    } & {
        type: string[];
        description?: string | undefined;
    }) | ({
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    } & RealUnionJsonSchema) | ({
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    } & {
        $ref: string;
        description?: string | undefined;
    }) | ({
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    } & {
        type: string[];
        description?: string | undefined;
    }) | ({
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    } & RealUnionJsonSchema) | ({
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    } & {
        $ref: string;
        description?: string | undefined;
    }) | ({
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    } & {
        type: string[];
        description?: string | undefined;
    }) | ({
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    } & RealUnionJsonSchema) | ({
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    } & {
        $ref: string;
        description?: string | undefined;
    }) | ({
        type: "boolean";
        description?: string | undefined;
    } & {
        type: string[];
        description?: string | undefined;
    }) | ({
        type: "boolean";
        description?: string | undefined;
    } & RealUnionJsonSchema) | ({
        type: "boolean";
        description?: string | undefined;
    } & {
        $ref: string;
        description?: string | undefined;
    }) | ({
        type: string[];
        description?: string | undefined;
    } & ObjectJsonSchema) | ({
        type: string[];
        description?: string | undefined;
    } & RecordJsonSchema) | ({
        type: string[];
        description?: string | undefined;
    } & ArrayJsonSchema) | ({
        type: string[];
        description?: string | undefined;
    } & {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    }) | ({
        type: string[];
        description?: string | undefined;
    } & {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    }) | ({
        type: string[];
        description?: string | undefined;
    } & {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    }) | ({
        type: string[];
        description?: string | undefined;
    } & {
        type: "boolean";
        description?: string | undefined;
    }) | ({
        type: string[];
        description?: string | undefined;
    } & RealUnionJsonSchema) | ({
        type: string[];
        description?: string | undefined;
    } & {
        type: "unknown";
        description?: string | undefined;
    }) | ({
        type: string[];
        description?: string | undefined;
    } & {
        type: "null";
        description?: string | undefined;
    }) | ({
        type: string[];
        description?: string | undefined;
    } & {
        $ref: string;
        description?: string | undefined;
    }) | (RealUnionJsonSchema & {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    }) | (RealUnionJsonSchema & {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    }) | (RealUnionJsonSchema & {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    }) | (RealUnionJsonSchema & {
        type: "boolean";
        description?: string | undefined;
    }) | (RealUnionJsonSchema & {
        type: string[];
        description?: string | undefined;
    }) | (RealUnionJsonSchema & {
        type: "unknown";
        description?: string | undefined;
    }) | (RealUnionJsonSchema & {
        type: "null";
        description?: string | undefined;
    }) | (RealUnionJsonSchema & {
        $ref: string;
        description?: string | undefined;
    }) | ({
        type: "unknown";
        description?: string | undefined;
    } & {
        type: string[];
        description?: string | undefined;
    }) | ({
        type: "unknown";
        description?: string | undefined;
    } & RealUnionJsonSchema) | ({
        type: "unknown";
        description?: string | undefined;
    } & {
        $ref: string;
        description?: string | undefined;
    }) | ({
        type: "null";
        description?: string | undefined;
    } & {
        type: string[];
        description?: string | undefined;
    }) | ({
        type: "null";
        description?: string | undefined;
    } & RealUnionJsonSchema) | ({
        type: "null";
        description?: string | undefined;
    } & {
        $ref: string;
        description?: string | undefined;
    }) | ({
        $ref: string;
        description?: string | undefined;
    } & ObjectJsonSchema) | ({
        $ref: string;
        description?: string | undefined;
    } & RecordJsonSchema) | ({
        $ref: string;
        description?: string | undefined;
    } & ArrayJsonSchema) | ({
        $ref: string;
        description?: string | undefined;
    } & {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    }) | ({
        $ref: string;
        description?: string | undefined;
    } & {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    }) | ({
        $ref: string;
        description?: string | undefined;
    } & {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    }) | ({
        $ref: string;
        description?: string | undefined;
    } & {
        type: "boolean";
        description?: string | undefined;
    }) | ({
        $ref: string;
        description?: string | undefined;
    } & {
        type: string[];
        description?: string | undefined;
    }) | ({
        $ref: string;
        description?: string | undefined;
    } & RealUnionJsonSchema) | ({
        $ref: string;
        description?: string | undefined;
    } & {
        type: "unknown";
        description?: string | undefined;
    }) | ({
        $ref: string;
        description?: string | undefined;
    } & {
        type: "null";
        description?: string | undefined;
    });
    usageExample?: string | undefined;
    returnsExample?: string | undefined;
}>;
type FunctionJson = z.infer<typeof functionJsonSchema>;
declare const nullFunctionJson: FunctionJson;
/**
 * Coerces object into function json schema.
 * Defaults values for bad fields when possible.
 */
declare const coerceFunctionJsonSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    parameters: z.ZodObject<{
        type: z.ZodEffects<z.ZodLiteral<"object">, "object", "object">;
        properties: z.ZodCatch<z.ZodRecord<z.ZodString, z.ZodCatch<z.ZodUnion<[z.ZodType<ObjectJsonSchema, z.ZodTypeDef, ObjectJsonSchema>, z.ZodType<RecordJsonSchema, z.ZodTypeDef, RecordJsonSchema>, z.ZodType<ArrayJsonSchema, z.ZodTypeDef, ArrayJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"array">;
            prefixItems: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"string">;
            enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodUnion<[z.ZodLiteral<"number">, z.ZodLiteral<"integer">]>;
            description: z.ZodOptional<z.ZodString>;
            minimum: z.ZodOptional<z.ZodNumber>;
            maximum: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"boolean">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "boolean";
            description?: string | undefined;
        }, {
            type: "boolean";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: string[];
            description?: string | undefined;
        }, {
            type: string[];
            description?: string | undefined;
        }>, z.ZodType<RealUnionJsonSchema, z.ZodTypeDef, RealUnionJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"unknown">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "unknown";
            description?: string | undefined;
        }, {
            type: "unknown";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"null">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "null";
            description?: string | undefined;
        }, {
            type: "null";
            description?: string | undefined;
        }>, z.ZodObject<{
            $ref: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            $ref: string;
            description?: string | undefined;
        }, {
            $ref: string;
            description?: string | undefined;
        }>]>>>>;
        description: z.ZodCatch<z.ZodOptional<z.ZodString>>;
        required: z.ZodCatch<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodEffects<z.ZodLiteral<"object">, "object", "object">;
        properties: z.ZodCatch<z.ZodRecord<z.ZodString, z.ZodCatch<z.ZodUnion<[z.ZodType<ObjectJsonSchema, z.ZodTypeDef, ObjectJsonSchema>, z.ZodType<RecordJsonSchema, z.ZodTypeDef, RecordJsonSchema>, z.ZodType<ArrayJsonSchema, z.ZodTypeDef, ArrayJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"array">;
            prefixItems: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"string">;
            enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodUnion<[z.ZodLiteral<"number">, z.ZodLiteral<"integer">]>;
            description: z.ZodOptional<z.ZodString>;
            minimum: z.ZodOptional<z.ZodNumber>;
            maximum: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"boolean">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "boolean";
            description?: string | undefined;
        }, {
            type: "boolean";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: string[];
            description?: string | undefined;
        }, {
            type: string[];
            description?: string | undefined;
        }>, z.ZodType<RealUnionJsonSchema, z.ZodTypeDef, RealUnionJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"unknown">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "unknown";
            description?: string | undefined;
        }, {
            type: "unknown";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"null">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "null";
            description?: string | undefined;
        }, {
            type: "null";
            description?: string | undefined;
        }>, z.ZodObject<{
            $ref: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            $ref: string;
            description?: string | undefined;
        }, {
            $ref: string;
            description?: string | undefined;
        }>]>>>>;
        description: z.ZodCatch<z.ZodOptional<z.ZodString>>;
        required: z.ZodCatch<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodEffects<z.ZodLiteral<"object">, "object", "object">;
        properties: z.ZodCatch<z.ZodRecord<z.ZodString, z.ZodCatch<z.ZodUnion<[z.ZodType<ObjectJsonSchema, z.ZodTypeDef, ObjectJsonSchema>, z.ZodType<RecordJsonSchema, z.ZodTypeDef, RecordJsonSchema>, z.ZodType<ArrayJsonSchema, z.ZodTypeDef, ArrayJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"array">;
            prefixItems: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"string">;
            enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodUnion<[z.ZodLiteral<"number">, z.ZodLiteral<"integer">]>;
            description: z.ZodOptional<z.ZodString>;
            minimum: z.ZodOptional<z.ZodNumber>;
            maximum: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"boolean">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "boolean";
            description?: string | undefined;
        }, {
            type: "boolean";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: string[];
            description?: string | undefined;
        }, {
            type: string[];
            description?: string | undefined;
        }>, z.ZodType<RealUnionJsonSchema, z.ZodTypeDef, RealUnionJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"unknown">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "unknown";
            description?: string | undefined;
        }, {
            type: "unknown";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"null">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "null";
            description?: string | undefined;
        }, {
            type: "null";
            description?: string | undefined;
        }>, z.ZodObject<{
            $ref: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            $ref: string;
            description?: string | undefined;
        }, {
            $ref: string;
            description?: string | undefined;
        }>]>>>>;
        description: z.ZodCatch<z.ZodOptional<z.ZodString>>;
        required: z.ZodCatch<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    }, z.ZodTypeAny, "passthrough">>;
    returns: z.ZodCatch<z.ZodUnion<[z.ZodType<ObjectJsonSchema, z.ZodTypeDef, ObjectJsonSchema>, z.ZodType<RecordJsonSchema, z.ZodTypeDef, RecordJsonSchema>, z.ZodType<ArrayJsonSchema, z.ZodTypeDef, ArrayJsonSchema>, z.ZodObject<{
        type: z.ZodLiteral<"array">;
        prefixItems: z.ZodArray<z.ZodString, "many">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    }, {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"string">;
        enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    }, {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodUnion<[z.ZodLiteral<"number">, z.ZodLiteral<"integer">]>;
        description: z.ZodOptional<z.ZodString>;
        minimum: z.ZodOptional<z.ZodNumber>;
        maximum: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    }, {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"boolean">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "boolean";
        description?: string | undefined;
    }, {
        type: "boolean";
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodArray<z.ZodString, "many">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: string[];
        description?: string | undefined;
    }, {
        type: string[];
        description?: string | undefined;
    }>, z.ZodType<RealUnionJsonSchema, z.ZodTypeDef, RealUnionJsonSchema>, z.ZodObject<{
        type: z.ZodLiteral<"unknown">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "unknown";
        description?: string | undefined;
    }, {
        type: "unknown";
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"null">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "null";
        description?: string | undefined;
    }, {
        type: "null";
        description?: string | undefined;
    }>, z.ZodObject<{
        $ref: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        $ref: string;
        description?: string | undefined;
    }, {
        $ref: string;
        description?: string | undefined;
    }>]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    name: z.ZodString;
    description: z.ZodString;
    parameters: z.ZodObject<{
        type: z.ZodEffects<z.ZodLiteral<"object">, "object", "object">;
        properties: z.ZodCatch<z.ZodRecord<z.ZodString, z.ZodCatch<z.ZodUnion<[z.ZodType<ObjectJsonSchema, z.ZodTypeDef, ObjectJsonSchema>, z.ZodType<RecordJsonSchema, z.ZodTypeDef, RecordJsonSchema>, z.ZodType<ArrayJsonSchema, z.ZodTypeDef, ArrayJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"array">;
            prefixItems: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"string">;
            enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodUnion<[z.ZodLiteral<"number">, z.ZodLiteral<"integer">]>;
            description: z.ZodOptional<z.ZodString>;
            minimum: z.ZodOptional<z.ZodNumber>;
            maximum: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"boolean">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "boolean";
            description?: string | undefined;
        }, {
            type: "boolean";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: string[];
            description?: string | undefined;
        }, {
            type: string[];
            description?: string | undefined;
        }>, z.ZodType<RealUnionJsonSchema, z.ZodTypeDef, RealUnionJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"unknown">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "unknown";
            description?: string | undefined;
        }, {
            type: "unknown";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"null">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "null";
            description?: string | undefined;
        }, {
            type: "null";
            description?: string | undefined;
        }>, z.ZodObject<{
            $ref: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            $ref: string;
            description?: string | undefined;
        }, {
            $ref: string;
            description?: string | undefined;
        }>]>>>>;
        description: z.ZodCatch<z.ZodOptional<z.ZodString>>;
        required: z.ZodCatch<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodEffects<z.ZodLiteral<"object">, "object", "object">;
        properties: z.ZodCatch<z.ZodRecord<z.ZodString, z.ZodCatch<z.ZodUnion<[z.ZodType<ObjectJsonSchema, z.ZodTypeDef, ObjectJsonSchema>, z.ZodType<RecordJsonSchema, z.ZodTypeDef, RecordJsonSchema>, z.ZodType<ArrayJsonSchema, z.ZodTypeDef, ArrayJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"array">;
            prefixItems: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"string">;
            enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodUnion<[z.ZodLiteral<"number">, z.ZodLiteral<"integer">]>;
            description: z.ZodOptional<z.ZodString>;
            minimum: z.ZodOptional<z.ZodNumber>;
            maximum: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"boolean">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "boolean";
            description?: string | undefined;
        }, {
            type: "boolean";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: string[];
            description?: string | undefined;
        }, {
            type: string[];
            description?: string | undefined;
        }>, z.ZodType<RealUnionJsonSchema, z.ZodTypeDef, RealUnionJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"unknown">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "unknown";
            description?: string | undefined;
        }, {
            type: "unknown";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"null">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "null";
            description?: string | undefined;
        }, {
            type: "null";
            description?: string | undefined;
        }>, z.ZodObject<{
            $ref: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            $ref: string;
            description?: string | undefined;
        }, {
            $ref: string;
            description?: string | undefined;
        }>]>>>>;
        description: z.ZodCatch<z.ZodOptional<z.ZodString>>;
        required: z.ZodCatch<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodEffects<z.ZodLiteral<"object">, "object", "object">;
        properties: z.ZodCatch<z.ZodRecord<z.ZodString, z.ZodCatch<z.ZodUnion<[z.ZodType<ObjectJsonSchema, z.ZodTypeDef, ObjectJsonSchema>, z.ZodType<RecordJsonSchema, z.ZodTypeDef, RecordJsonSchema>, z.ZodType<ArrayJsonSchema, z.ZodTypeDef, ArrayJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"array">;
            prefixItems: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"string">;
            enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodUnion<[z.ZodLiteral<"number">, z.ZodLiteral<"integer">]>;
            description: z.ZodOptional<z.ZodString>;
            minimum: z.ZodOptional<z.ZodNumber>;
            maximum: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"boolean">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "boolean";
            description?: string | undefined;
        }, {
            type: "boolean";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: string[];
            description?: string | undefined;
        }, {
            type: string[];
            description?: string | undefined;
        }>, z.ZodType<RealUnionJsonSchema, z.ZodTypeDef, RealUnionJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"unknown">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "unknown";
            description?: string | undefined;
        }, {
            type: "unknown";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"null">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "null";
            description?: string | undefined;
        }, {
            type: "null";
            description?: string | undefined;
        }>, z.ZodObject<{
            $ref: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            $ref: string;
            description?: string | undefined;
        }, {
            $ref: string;
            description?: string | undefined;
        }>]>>>>;
        description: z.ZodCatch<z.ZodOptional<z.ZodString>>;
        required: z.ZodCatch<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    }, z.ZodTypeAny, "passthrough">>;
    returns: z.ZodCatch<z.ZodUnion<[z.ZodType<ObjectJsonSchema, z.ZodTypeDef, ObjectJsonSchema>, z.ZodType<RecordJsonSchema, z.ZodTypeDef, RecordJsonSchema>, z.ZodType<ArrayJsonSchema, z.ZodTypeDef, ArrayJsonSchema>, z.ZodObject<{
        type: z.ZodLiteral<"array">;
        prefixItems: z.ZodArray<z.ZodString, "many">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    }, {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"string">;
        enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    }, {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodUnion<[z.ZodLiteral<"number">, z.ZodLiteral<"integer">]>;
        description: z.ZodOptional<z.ZodString>;
        minimum: z.ZodOptional<z.ZodNumber>;
        maximum: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    }, {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"boolean">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "boolean";
        description?: string | undefined;
    }, {
        type: "boolean";
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodArray<z.ZodString, "many">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: string[];
        description?: string | undefined;
    }, {
        type: string[];
        description?: string | undefined;
    }>, z.ZodType<RealUnionJsonSchema, z.ZodTypeDef, RealUnionJsonSchema>, z.ZodObject<{
        type: z.ZodLiteral<"unknown">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "unknown";
        description?: string | undefined;
    }, {
        type: "unknown";
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"null">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "null";
        description?: string | undefined;
    }, {
        type: "null";
        description?: string | undefined;
    }>, z.ZodObject<{
        $ref: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        $ref: string;
        description?: string | undefined;
    }, {
        $ref: string;
        description?: string | undefined;
    }>]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    name: z.ZodString;
    description: z.ZodString;
    parameters: z.ZodObject<{
        type: z.ZodEffects<z.ZodLiteral<"object">, "object", "object">;
        properties: z.ZodCatch<z.ZodRecord<z.ZodString, z.ZodCatch<z.ZodUnion<[z.ZodType<ObjectJsonSchema, z.ZodTypeDef, ObjectJsonSchema>, z.ZodType<RecordJsonSchema, z.ZodTypeDef, RecordJsonSchema>, z.ZodType<ArrayJsonSchema, z.ZodTypeDef, ArrayJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"array">;
            prefixItems: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"string">;
            enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodUnion<[z.ZodLiteral<"number">, z.ZodLiteral<"integer">]>;
            description: z.ZodOptional<z.ZodString>;
            minimum: z.ZodOptional<z.ZodNumber>;
            maximum: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"boolean">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "boolean";
            description?: string | undefined;
        }, {
            type: "boolean";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: string[];
            description?: string | undefined;
        }, {
            type: string[];
            description?: string | undefined;
        }>, z.ZodType<RealUnionJsonSchema, z.ZodTypeDef, RealUnionJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"unknown">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "unknown";
            description?: string | undefined;
        }, {
            type: "unknown";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"null">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "null";
            description?: string | undefined;
        }, {
            type: "null";
            description?: string | undefined;
        }>, z.ZodObject<{
            $ref: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            $ref: string;
            description?: string | undefined;
        }, {
            $ref: string;
            description?: string | undefined;
        }>]>>>>;
        description: z.ZodCatch<z.ZodOptional<z.ZodString>>;
        required: z.ZodCatch<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodEffects<z.ZodLiteral<"object">, "object", "object">;
        properties: z.ZodCatch<z.ZodRecord<z.ZodString, z.ZodCatch<z.ZodUnion<[z.ZodType<ObjectJsonSchema, z.ZodTypeDef, ObjectJsonSchema>, z.ZodType<RecordJsonSchema, z.ZodTypeDef, RecordJsonSchema>, z.ZodType<ArrayJsonSchema, z.ZodTypeDef, ArrayJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"array">;
            prefixItems: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"string">;
            enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodUnion<[z.ZodLiteral<"number">, z.ZodLiteral<"integer">]>;
            description: z.ZodOptional<z.ZodString>;
            minimum: z.ZodOptional<z.ZodNumber>;
            maximum: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"boolean">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "boolean";
            description?: string | undefined;
        }, {
            type: "boolean";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: string[];
            description?: string | undefined;
        }, {
            type: string[];
            description?: string | undefined;
        }>, z.ZodType<RealUnionJsonSchema, z.ZodTypeDef, RealUnionJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"unknown">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "unknown";
            description?: string | undefined;
        }, {
            type: "unknown";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"null">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "null";
            description?: string | undefined;
        }, {
            type: "null";
            description?: string | undefined;
        }>, z.ZodObject<{
            $ref: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            $ref: string;
            description?: string | undefined;
        }, {
            $ref: string;
            description?: string | undefined;
        }>]>>>>;
        description: z.ZodCatch<z.ZodOptional<z.ZodString>>;
        required: z.ZodCatch<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodEffects<z.ZodLiteral<"object">, "object", "object">;
        properties: z.ZodCatch<z.ZodRecord<z.ZodString, z.ZodCatch<z.ZodUnion<[z.ZodType<ObjectJsonSchema, z.ZodTypeDef, ObjectJsonSchema>, z.ZodType<RecordJsonSchema, z.ZodTypeDef, RecordJsonSchema>, z.ZodType<ArrayJsonSchema, z.ZodTypeDef, ArrayJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"array">;
            prefixItems: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }, {
            type: "array";
            prefixItems: string[];
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"string">;
            enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }, {
            type: "string";
            enum?: string[] | undefined;
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodUnion<[z.ZodLiteral<"number">, z.ZodLiteral<"integer">]>;
            description: z.ZodOptional<z.ZodString>;
            minimum: z.ZodOptional<z.ZodNumber>;
            maximum: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }, {
            type: "number" | "integer";
            description?: string | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"boolean">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "boolean";
            description?: string | undefined;
        }, {
            type: "boolean";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodArray<z.ZodString, "many">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: string[];
            description?: string | undefined;
        }, {
            type: string[];
            description?: string | undefined;
        }>, z.ZodType<RealUnionJsonSchema, z.ZodTypeDef, RealUnionJsonSchema>, z.ZodObject<{
            type: z.ZodLiteral<"unknown">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "unknown";
            description?: string | undefined;
        }, {
            type: "unknown";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"null">;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "null";
            description?: string | undefined;
        }, {
            type: "null";
            description?: string | undefined;
        }>, z.ZodObject<{
            $ref: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            $ref: string;
            description?: string | undefined;
        }, {
            $ref: string;
            description?: string | undefined;
        }>]>>>>;
        description: z.ZodCatch<z.ZodOptional<z.ZodString>>;
        required: z.ZodCatch<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    }, z.ZodTypeAny, "passthrough">>;
    returns: z.ZodCatch<z.ZodUnion<[z.ZodType<ObjectJsonSchema, z.ZodTypeDef, ObjectJsonSchema>, z.ZodType<RecordJsonSchema, z.ZodTypeDef, RecordJsonSchema>, z.ZodType<ArrayJsonSchema, z.ZodTypeDef, ArrayJsonSchema>, z.ZodObject<{
        type: z.ZodLiteral<"array">;
        prefixItems: z.ZodArray<z.ZodString, "many">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    }, {
        type: "array";
        prefixItems: string[];
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"string">;
        enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    }, {
        type: "string";
        enum?: string[] | undefined;
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodUnion<[z.ZodLiteral<"number">, z.ZodLiteral<"integer">]>;
        description: z.ZodOptional<z.ZodString>;
        minimum: z.ZodOptional<z.ZodNumber>;
        maximum: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    }, {
        type: "number" | "integer";
        description?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"boolean">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "boolean";
        description?: string | undefined;
    }, {
        type: "boolean";
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodArray<z.ZodString, "many">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: string[];
        description?: string | undefined;
    }, {
        type: string[];
        description?: string | undefined;
    }>, z.ZodType<RealUnionJsonSchema, z.ZodTypeDef, RealUnionJsonSchema>, z.ZodObject<{
        type: z.ZodLiteral<"unknown">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "unknown";
        description?: string | undefined;
    }, {
        type: "unknown";
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"null">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "null";
        description?: string | undefined;
    }, {
        type: "null";
        description?: string | undefined;
    }>, z.ZodObject<{
        $ref: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        $ref: string;
        description?: string | undefined;
    }, {
        $ref: string;
        description?: string | undefined;
    }>]>>;
}, z.ZodTypeAny, "passthrough">>;
type CoercedFunctionJson = z.infer<typeof coerceFunctionJsonSchema>;

export { type CoercedFunctionJson, type FunctionJson, type ObjectJsonSchema, type ValueJsonSchema, coerceFunctionJsonSchema, functionJsonSchema, nullFunctionJson };
