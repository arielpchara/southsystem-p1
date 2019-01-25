
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SSTLoginModule } from '@southsystem/login';

import { SSTLayoutModule, SSTMenuConfig, SSTMenuItem } from '@southsystem/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SSTAuthenticationModule, SSTSimpleStrategy, SSTKeycloakStrategy } from '@southsystem/authentication';
import { SSTAvatarConfig } from '@southsystem/avatar';
import { faUserAlt, faPlug, faPlus, faBurn, faBaby } from '@fortawesome/free-solid-svg-icons';


const menuItems: SSTMenuItem[] = [
  {
    path: ['users'],
    icon: faUserAlt,
    label: 'Usuários'
  },
  {
    path: ['users'],
    icon: faBaby,
    label: 'Demitir funcionario',
    roles: ['filetransfer-admin']
  }
];

const keycloakConfig = {
  enable: true,
  realm: 'filetransfer',
  url: 'https://keycloak.southsystem.com.br/auth/',
  clientId: 'filetransfer-web'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SSTLayoutModule,
    SSTAuthenticationModule.forRoot(SSTKeycloakStrategy, keycloakConfig)
  ],
  providers: [
    {
      provide: SSTAvatarConfig,
      useValue: {
        endpoint: '/api/avatar'
      }
    },
    {
      provide: SSTMenuConfig,
      useValue: {
        items: menuItems
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
