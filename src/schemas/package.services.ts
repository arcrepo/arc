import { Injectable } from '@nestjs/common';

@Injectable()
export class PackageService {
  savePackage() {
    console.log('saving...');
  }
}
