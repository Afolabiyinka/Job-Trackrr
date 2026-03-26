import { TrackedJobs } from "../models/TrackedJobs";
import { User } from "../models/User";

export type models = {
    User: typeof User;
    TrackedJobs: typeof TrackedJobs

};