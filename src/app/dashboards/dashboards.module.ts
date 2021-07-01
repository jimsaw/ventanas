
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardsRoutes } from './dashboards.routing';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';

import {
    TopCardComponent,
    SalesOverviewComponent,
    VisitorComponent,
    Visitor2Component,
    IncomeExpenssComponent,
    PostsComponent,
    NewsletterComponent,
    DeveloperInfoComponent,
    ActivityComponent,
    TopCard2Component,
    SalesPurchaseComponent,
    SalesYearlyComponent,
    ContactListComponent,
    CommentsComponent,
    MessageComponent
} from './dashboard-components';
import { InicioComponent } from './inicio/inicio.component';
import { AlcaldiaComponent } from './alcaldia/alcaldia.component';


@NgModule({
    imports: [
        CommonModule,
        DemoMaterialModule,
        FlexLayoutModule,
        ChartistModule,
        ChartsModule,
        NgApexchartsModule,
        RouterModule.forChild(DashboardsRoutes)
    ],
    declarations: [
        Dashboard1Component,
        Dashboard2Component,
        TopCardComponent,
        SalesOverviewComponent,
        VisitorComponent,
        Visitor2Component,
        IncomeExpenssComponent,
        PostsComponent,
        NewsletterComponent,
        DeveloperInfoComponent,
        ActivityComponent,
        TopCard2Component,
        SalesPurchaseComponent,
        SalesYearlyComponent,
        ContactListComponent,
        CommentsComponent,
        MessageComponent,
        InicioComponent,
        AlcaldiaComponent
    ]
})
export class DashboardsModule { }
