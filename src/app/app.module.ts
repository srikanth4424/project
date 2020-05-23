// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ComponentsComponent } from './_components/components.component';
// import { HelpersComponent } from './_helpers/helpers.component';
// import { ModelsComponent } from './_models/models.component';
// import { ServicesComponent } from './_services/services.component';
// import { AccountComponent } from './account/account.component';
// import { HomeComponent } from './home/home.component';
// import { ProductsComponent } from './products/products.component';
// import { UsersComponent } from './users/users.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     ComponentsComponent,
//     HelpersComponent,
//     ModelsComponent,
//     ServicesComponent,
//     AccountComponent,
//     HomeComponent,
//     ProductsComponent,
//     UsersComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { AngularMaterialModule } from './angular-material.module';
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from './gallery/gallery.component'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        NgImageSliderModule,
        MDBBootstrapModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        ProductsComponent,
        GalleryComponent    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class  AppModule { }