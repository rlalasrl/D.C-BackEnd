export enum ErrorNames {
  Not_User = 'Not_User',
  Not_Found = 'Not_Found',
  Database_Error = 'Database_Error',
  Wrong_Request = 'Wrong_Request',
  Wrong_FileExtension = 'Wrong_FileExtension',
  Limit_File_Size = 'Limit_File_Size',
  Wrong_Data = 'Wrong_Data',
  Unhandled_Error = 'Unhandled_Error',
  Exist_User = 'Exist_User',
  Token_Expired = 'Token_Expired',
  Forbidden = 'Forbidden',
  Exist_Data = 'Exist_Data',
  Not_Found_Board = 'Not_Found_Board',
  Not_Found_Comment = 'Not_Found_Comment',
}

export type Field = 
  | 'Hacking'
  | 'Web FrontEnd Development'
  | 'Web BackEnd Develpment'
  | 'Android Development'
  | 'Desingner'
;