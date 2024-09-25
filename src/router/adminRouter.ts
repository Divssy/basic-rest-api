import { Router } from "express";
import { authentication, createAdmin, deleteAdmin, readAdmin, updateAdmin } from "../controller/adminController";
import { authValidation, createValidation, updateValidation } from "../middleware/adminValidation";
import { verifyToken } from "../middleware/authorization";

const router = Router()

router.post(`/`,[verifyToken, createValidation], createAdmin)
router.get(`/`, [verifyToken], readAdmin)
router.put(`/:id`,[verifyToken, updateValidation], updateAdmin)
router.delete('/:id', [verifyToken], deleteAdmin)
router.post(`/auth`, [verifyToken, authValidation], authentication)

export default router