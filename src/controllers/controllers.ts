import { Request, Response , NextFunction } from "express";

export function getIndex(req: Request, res: Response) {
   res.render("partials/index", {
     title: "Mind Up",
     onAdmin: true
   });
}