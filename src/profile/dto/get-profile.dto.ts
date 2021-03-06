import { UserRole, UserStatus } from 'user/user.entity';

import { ApiModelProperty } from '@nestjs/swagger';
import { IUser } from 'user/interface/user.interface';

export class GetProfileDto implements IUser {
  constructor(data: IUser) {
    this.id = data.id;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.email = data.email;
    this.role = data.role;
    this.status = data.status;
  }
  @ApiModelProperty() id: string;
  @ApiModelProperty() firstname: string;
  @ApiModelProperty() lastname: string;
  @ApiModelProperty() email: string;
  @ApiModelProperty() role: UserRole;
  @ApiModelProperty() status: UserStatus;
}
