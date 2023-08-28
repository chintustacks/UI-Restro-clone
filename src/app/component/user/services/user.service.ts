import { BaseService } from "../../base/base.service";
import { UserModel } from "../../base/models/user.model";
import { user } from "../model/user.model";

export class UserServices extends BaseService{

    async getprofile(user:user): Promise<UserModel>{
     let resp=await this.get<UserModel>(user.emial) 
     return resp;
    }
}