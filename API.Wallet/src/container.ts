import express = require("express")
import {createContainer, asClass} from "awilix"
import { TestService } from "./services/test.service"
import { scopePerRequest } from "awilix-express"
import { SubscriptionMySQLRepository } from "./services/repositories/impl/mysql/Subscription.repository"

export default (app: express.Application) => {
    const container = createContainer({
        injectionMode: "CLASSIC"
    })
    
    container.register({
        //Repositories
        subscriptionRepository: asClass(SubscriptionMySQLRepository).scoped(),

        //Services
        testService: asClass(TestService).scoped()
    })

    app.use(scopePerRequest(container))
}