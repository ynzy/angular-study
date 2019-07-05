import { InjectionToken } from '@angular/core';

export interface config {
  dataUrl: string;
}

export const configService = new InjectionToken<config>(
  "TestLibConfig"
);