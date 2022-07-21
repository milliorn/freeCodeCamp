/* eslint-disable prettier/prettier */
import { AuthService } from "./auth.service";
import { Controller, Post, Body, ParseIntPipe } from "@nestjs/common";
import { AuthDto } from "./dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  signup(@Body() dto: AuthDto) {
    return this.authService.signup();
  }

  @Post("signin")
  signin(): { msg: string } {
    return this.authService.signin();
  }
}
