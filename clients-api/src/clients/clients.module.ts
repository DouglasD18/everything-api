import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/mongoose/database.module';
import { clientsProviders } from './providers/clients.providers';
import { ClientsService } from './services/clients.service';
import { ClientsController } from './controllers/Clients.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ClientsController],
  providers: [
    ClientsService,
    ...clientsProviders,
  ],
})
export class ClientsModule {}