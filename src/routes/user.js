import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middleware/loginRequired";

const router = new Router();

router.get('/', loginRequired, userController.index)
router.get('/:id', userController.show)

router.post('/',loginRequired, userController.create)
// router.post('/', userController.create)
router.put('/',loginRequired, userController.update)
router.delete('/',loginRequired, userController.delete)

export default router;