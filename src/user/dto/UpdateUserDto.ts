import { Role, Status } from "@prisma/client";
import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEnum([Status.ACTIVE, Status.INACTIVE], {
    message: "Invalid status",
  })
  status: Status;

  @IsEnum([Role.ADMIN, Role.COORDINATOR])
  role: Role;
}
