import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  const PORT = 8000;
  await app.listen(PORT, () => console.log(`server is active on port ${PORT}`));
}
bootstrap();
