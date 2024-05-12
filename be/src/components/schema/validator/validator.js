const Ajv = require("ajv")

const ajv = new Ajv()

const autoclickerSchema = {
    type: "object",
    properties: {
        gameStateId: { type: "string" },
        clickerName: { type: "string" },
        stats: { type: "string" },
    },
    required: ["gameStateId", "clickerName", "stats"],
}

const validateAutoclicker = ajv.compile(autoclickerSchema)

const gameStateSaveSchema = {
    type: "object",
    properties: {
        gameStateId: { type: "string" },
        cookieCount: { type: "number", minimum: 0 },
        clickValue: { type: "number", minimum: 0 }
    },
    required: ["gameStateId", "cookieCount", "clickValue"]
}

const validateGameStateSave = ajv.compile(gameStateSaveSchema)

const gameStateCreateSchema = {
    type: "object",
    properties: {
        userId: { type: "string" } 
    },
    required: ["userId"]
}

const validateGameStateCreate = ajv.compile(gameStateCreateSchema)

const userCreateSchema = {
    type: "object",
    properties: {
        nickname: { type: "string" }
    },
    required: ["nickname"]
}

const validateUserCreate = ajv.compile(userCreateSchema)

const validateGetAllUsers = ajv.compile({})

const userGetSchema = {
    type: "object",
    properties: {
        id: { type: "string" }
    },
    required: ["id"]
}

const validateUserGet = ajv.compile(userGetSchema)

const gameStateGetSchema = {
    type: "object",
    properties: {
        id: { type: "string" }
    },
    required: ["id"]
}

const validateGameStateGet = ajv.compile(gameStateGetSchema)

const autoClickerGetSchema = {
    type: "object",
    properties: {
        id: { type: "string" }
    },
    required: ["id"]
}

const validateAutoClickerGet = ajv.compile(autoClickerGetSchema)

module.exports = { validateAutoclicker, validateGameStateSave, validateGameStateCreate, validateUserCreate, validateGetAllUsers, validateUserGet, validateGameStateGet, validateAutoClickerGet }