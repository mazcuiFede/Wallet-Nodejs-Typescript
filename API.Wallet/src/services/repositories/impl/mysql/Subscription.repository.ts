import { Subscription } from '../../domain/subscription'
import { SubscriptionRepository } from '../../subscription.repository'
import connector from './../../../../common/persistence/mysql.persistence'

export class SubscriptionMySQLRepository implements SubscriptionRepository{
    public async all(): Promise<Subscription[]>{
        const [rows] = await connector.execute(
            "select * from wallet_subscription order by id desc"
        )

        return rows as Subscription[]
    }

    public async find(id: Number): Promise<Subscription | null>{
        const [rows]: any[] = await connector.execute(
            "select * from wallet_subscription where id = ?",
            [id]
        )

        if (rows.length > 0)
            return rows[0] as Subscription
        
        return null
    }

    public async store(subscription: Subscription): Promise<void> {
        connector.execute(
            "insert into wallet_subscription(user_id, code, amount, cron, created_at) values (?, ?, ?, ?, ?)",
            [subscription.user_id, subscription.code, subscription.ammount, subscription.cron, new Date()]
        )
    }

    public async update(subscription: Subscription): Promise<void> {
        connector.execute(
            "update wallet_subscription set code = ?, amount = ?, cron = ?, updated_at = ? where id = ?",
            [subscription.code, subscription.ammount, subscription.cron, new Date(), subscription.id]
        )
    }

    public async remove(id: Number): Promise<void> {
        connector.execute(
            "delete from wallet_subscription where id = ?",
            [id]
        )
    }
}