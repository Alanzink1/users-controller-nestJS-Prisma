import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMembersRepository } from './repositories/rocket-members-repository'

@Controller('team')
export class AppController {

  constructor(private rocketMembersRepository: RocketMembersRepository) {}

  @Post('members')
  async getMember(@Body() body: CreateTeamMemberBody) {

    const { name, 'function': memberFunction } = body;

    await this.rocketMembersRepository.create(name, memberFunction);
    return {

      message: 'Created!'

    }
  }
}
