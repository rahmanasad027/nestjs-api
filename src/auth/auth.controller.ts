import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('auth') // Grouping the auth-related endpoints under "auth" tag
@Controller('auth') // Setting a base path for the controller
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'User Signup' }) // Describing the operation
  @ApiResponse({ status: 201, description: 'User successfully signed up' }) // Success response
  @ApiResponse({ status: 400, description: 'Bad Request' }) // Bad request response
  @ApiBody({ type: AuthDto }) // Defining the expected request body
  signup(@Body() dto: AuthDto) {
    console.log('dto in controller is: ', dto);
    return this.authService.signup(dto);
  }

  @Post('signin')
  @ApiOperation({ summary: 'User Signin' }) // Describing the operation
  @ApiResponse({ status: 200, description: 'User successfully signed in' }) // Success response
  @ApiResponse({ status: 400, description: 'Bad Request' }) // Bad request response
  @ApiBody({ type: AuthDto }) // Defining the expected request body
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
