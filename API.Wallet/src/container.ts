import express = require("express")
import {createContainer, asClass} from "awilix"
import { TestService } from "./services/test.service"
import { scopePerRequest } from "awilix-express"
import { SubscriptionMySQLRepository } from "./services/repositories/impl/mysql/Subscription.repository"
import { SubscriptionService } from "./services/subscription.service"
import { MovementMySQLRepository } from "./services/repositories/impl/mysql/movement.repository"
import { BalanceMysqlRepository } from "./services/repositories/impl/mysql/balance.repository"
import { MovementService } from "./services/movement.service"

export default (app: express.Application) => {
    const container = createContainer({
        injectionMode: "CLASSIC"
    })
    
    container.register({
        //Repositories
        subscriptionRepository: asClass(SubscriptionMySQLRepository).scoped(),
        movementRepository: asClass(MovementMySQLRepository).scoped(),
        balanceRpository: asClass(BalanceMysqlRepository).scoped(),


        //Services
        subscriptionService: asClass(SubscriptionService).scoped(),
        movementService: asClass(MovementService).scoped(),
        testService: asClass(TestService).scoped()
    })

    app.use(scopePerRequest(container))
}