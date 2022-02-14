import {Subscription} from './../repositories/domain/subscription'

export interface SubscriptionRepository {
    all(): Promise<Subscription[]>
    find(id: Number): Promise<Subscription | null>
    store(subscription: Subscription): Promise<void> 
    update(subscription: Subscription): Promise<void> 
    remove(id: Number): Promise<void>
}