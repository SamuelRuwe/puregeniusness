import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './core.state';
import { EffectsModule } from '@ngrx/effects';
import { SettingsEffects } from './settings/settings.effects';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PgWasmModule } from '@puregeniusness/wasm/script-loader';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      SettingsEffects
    ]),
    environment.production ? [] : StoreDevtoolsModule.instrument({
      name: 'Pure Geniusness'
    }),
    environment.wasmAssetsPath ? PgWasmModule.forRoot({ environment }) : []
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}