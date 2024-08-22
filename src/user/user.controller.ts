import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";

import { User } from "@prisma/client";
import { AuthGuard } from "src/auth/guards/AuthGuard";
import { CreateUserDto } from "./dto/CreateUserDto";
import { UserService } from "./user.service";
import { UpdateUserDto } from "./dto/UpdateUserDto";
import { AdminGuard } from "src/auth/guards/AdminGuard";
import { CustomRequest } from "./interfaces/Request";

@Controller("/users")
@UseGuards(AdminGuard)
export class UserController {
  constructor(private readonly adminService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.adminService.findAll();
  }

  @Get("/:id")
  async findOne(@Param("id", ParseIntPipe) id: number): Promise<User> {
    return this.adminService.findOne(id);
  }

  @Post()
  async create(@Body(ValidationPipe) user: CreateUserDto): Promise<User> {
    return this.adminService.create(user);
  }

  @Put("/:id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body(ValidationPipe) user: UpdateUserDto,
  ): Promise<User> {
    return this.adminService.update(id, user);
  }

  @Delete("/:id")
  async delete(
    @Param("id", ParseIntPipe) id: number,
    @Req() req: CustomRequest,
  ): Promise<User> {
    if (req.user.sub === id) {
      throw new HttpException(
        "You can't delete yourself",
        HttpStatus.FORBIDDEN,
      );
    }

    return this.adminService.delete(id);
  }
}
