type MiddlewareGroupType = "custom" | "base"

declare export type MiddlewareGroupsInstance = {
    type: MiddlewareGroupType,
    middlewares: Array<Function>
}
