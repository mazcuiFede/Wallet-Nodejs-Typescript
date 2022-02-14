export interface Subscription {
    id: number
    code: string
    user_id: number
    ammount: number
    cron: string
    created_at: Date | null
    updated_at: Date | null
}