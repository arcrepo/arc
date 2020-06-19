import { Controller, Post, Req, Request } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post()
  login(@Req() req: Request) {
    const body: any = req.body;
    const _authToken = process.env.AUTH_TOKEN;

    if (body.authToken === _authToken) {
      return true;
    } else return false;
  }
}
