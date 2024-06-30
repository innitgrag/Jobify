import express from "express";
import {jobseekerDeleteApplication , jobseekerGetAllApplication,employerGetAllApplication, postApplication} from  "../controller/applicationController.js"
import {isAuthorised} from "../middleware/auth.js"

const router = express.Router();
router.delete("/delete/:id",isAuthorised ,jobseekerDeleteApplication );
router.get("/employer/getall" , isAuthorised,employerGetAllApplication);
router.get("/jobseeker/getall",isAuthorised, jobseekerGetAllApplication);
router.post("/post",isAuthorised,postApplication);

export default router;