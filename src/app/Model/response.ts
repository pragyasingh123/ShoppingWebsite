export class  ResponseData{
    // IsSuccess: boolean;
     ResponseMessage: string;
     ResponseCode: Number;
     data: any;
     Error:string;
     sessionCode:string;
   }

   export class RhResponse{
    rhresponse:WorldLineRespone;
   }

  export class WorldLineRespone{
    clienttransactionid:string;
    statuscode:string;
    errors:Errors[];

  }

  export class Errors{
    errorcode:string;
    errordesc:string;
  }
  