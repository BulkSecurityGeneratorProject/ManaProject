import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { ManaProjectSharedModule, UserRouteAccessService } from './shared';
import { ManaProjectHomeModule } from './home/home.module';
import { ManaProjectAdminModule } from './admin/admin.module';
import { ManaProjectAccountModule } from './account/account.module';
import { ManaProjectEntityModule } from './entities/entity.module';
import { ManaProjectAllProjectModule } from './project/all-project.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import { NgAutoCompleteModule } from 'ng-auto-complete';

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        ManaProjectSharedModule,
        ManaProjectHomeModule,
        ManaProjectAdminModule,
        ManaProjectAccountModule,
        ManaProjectEntityModule,
        ManaProjectAllProjectModule,
        NgAutoCompleteModule,
        FormsModule
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [JhiMainComponent]
})
export class ManaProjectAppModule { }
