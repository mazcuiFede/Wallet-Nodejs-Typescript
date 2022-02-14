import { Subscription } from "./repositories/domain/subscription";
import { SubscriptionRepository } from "./repositories/subscription.repository";

export class SubscriptionService {
    constructor(private readonly subscriptionRepository: SubscriptionRepository) {}

    public async all(): Promise<Subscription[]> {
        return await this.subscriptionRepository.all()
    }

    public async find(id: Number): Promise<Subscription | null> {
        return await this.subscriptionRepository.find(id)
    }

    public async store(subscription: SubscriptionCreateDto): Promise<void>  {
        asd
    }

    public async update(subscription: SubscriptionUpdateDto): Promise<void>  {
        asd
    }

    public async remove(id: Number): Promise<void> {
        await this.subscriptionRepository.remove(id)    
    }
}