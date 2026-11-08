import { type Request, type Response, Router } from 'express';
import { requireAuth } from '../../middleware/requireAuth.middleware.js';
import trylogAction from './actions.services.js';

const actionsRouter = Router();

actionsRouter.post("/page-view", requireAuth, (req: Request, res: Response) => {
    
    const path = req.body.path;

    if (req.session.userId !== undefined) {
        trylogAction({
            userId: Number(req.session.userId),
            action: "page_view",
            ip: req.ip ?? null,
            target: `page:${path}`
        }) 
    }
    
});