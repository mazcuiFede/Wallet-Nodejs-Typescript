import {Request, Response} from "express"
import {route, GET, POST, PUT, DELETE} from "awilix-express"
import { SubscriptionService } from "../services/subscription.service"
import { BaseController } from "../common/controllers/base.controller"

@route('/subscriptions')
export class SubscriptionController extends BaseController {
    constructor(private readonly subscriptionService: SubscriptionService) {
        super()
    }


    @GET()
    public async all(req: Request, res: Response){
        try{
            res.send(
                await this.subscriptionService.all()
            )
        }
        catch (err){
            this.handleException(err, res)
        }
    }

    @route("/:id")
    @GET()
    public async find(req: Request, res: Response){
        try{
            const id = parseInt(req.params.id)
            const result = await this.subscriptionService.find(id)

            if (!result)
                res.status(404).send()
            
            res.send(result)
            
        }
        catch (err){
            this.handleException(err, res)
        }
    }

    @POST()
    public async store(req: Request, res: Response){
        try{
            await this.subscriptionService.store({
                user_id: req.body.user_id,
                code: req.body.code,
                amount: req.body.amount,
                cron: req.body.cron
            } as SubscriptionCreateDto)
            res.send()
        }
        catch (err){
            this.handleException(err, res)
        }
    }

    @route('/:id')
    @PUT()
    public async update(req: Request, res: Response){
        try{
            await this.subscriptionService.update(+req.params.id, {
                user_id: req.body.user_id,
                code: req.body.code,
                amount: req.body.amount,
                cron: req.body.cron
            } as SubscriptionUpdateDto)
            res.send()
        }
        catch (err){
            this.handleException(err, res)
        }
    }

    @route('/:id')
    @DELETE()
    public async remove(req: Request, res: Response){
        try{
            await this.subscriptionService.remove(+req.params.id)
            res.send()
        }
        catch (err){
            this.handleException(err, res)
        }
    }
    
}