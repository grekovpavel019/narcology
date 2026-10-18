import type { Request } from "express";

export function createSession(
    req: Request,
    userId: string
): Promise<void> {
    return new Promise((resolve, reject) => {
        req.session.regenerate((err) => {
            if (err) {
                reject(err);
                return;
            }

            req.session.userId = userId;

            req.session.save((err) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve();
            })
        });
    })
}