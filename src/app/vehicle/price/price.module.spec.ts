import { PriceModule } from './price.module';

describe('PriceModule', () => {
  let priceModule: PriceModule;

  beforeEach(() => {
    priceModule = new PriceModule();
  });

  it('should create an instance', () => {
    expect(priceModule).toBeTruthy();
  });
});
