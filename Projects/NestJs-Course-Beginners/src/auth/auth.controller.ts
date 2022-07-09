/* eslint-disable prettier/prettier */
import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signin")
  signin(): { msg: string; } {
    return this.authService.signin();
  }

  @Post("signup")
  signup(): { msg: string; } {
    return this.authService.signup();
  }
}
