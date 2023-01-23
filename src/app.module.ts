import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [ProductsModule, WalletModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
