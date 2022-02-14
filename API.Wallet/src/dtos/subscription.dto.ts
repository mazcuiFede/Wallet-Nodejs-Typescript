interface SubscriptionCreateDto {
    code: string
    user_id: number
    ammount: number
    cron: string
}

interface SubscriptionUpdateDto {
    code: string
    ammount: number
    cron: string
}