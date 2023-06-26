import { Request, Response, NextFunction } from "express";

export function getIndex(req: Request, res: Response) {
  res.render("partials/index", {
    title: "Mind Up",
    onIndex: true,
  });
}
export function getLogin(req: Request, res: Response) {
  res.render("auth/register", {
    title: "Login",
    loginOn:true
  });
}
export function getTest(req: Request, res: Response) {
  res.render("Home/quiz", {
    title: "Mind Up",
    quizOn :true
  });
}
export function getResult(req: Request, res: Response) {
  res.render("Home/result", {
    title: "Mind Up",
    resultOn :true
  });
}
export function getSetting(req: Request, res: Response) {
  res.render("Home/setting", {
    title: "Mind Up",
    settingOn :true
  });
}
export function getBalls(req: Request, res: Response) {
  res.render("Home/balls", {
    title: "Mind Up",
    ballsOn :true
  });
}
export function getBlog(req: Request, res: Response) {
  res.render("Home/blog", {
    title: "Mind Up",
    blogOn :true
  });
}
export function getSearch(req: Request, res: Response) {
  res.render("Home/search", {
    title: "Mind Up"
  });
}
