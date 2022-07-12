/* eslint-disable prettier/prettier */
import { AuthService } from "./auth.service";
import { Controller, Post, Body } from "@nestjs/common";
import { AuthDto } from "./dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signin")
  signin(): { msg: string } {
    return this.authService.signin();
  }

  @Post("signup")
  signup(@Body() dto: AuthDto): { msg: string } {
    console.log({
      dto,
    });
    return this.authService.signup();
  }
}
