import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {FeedsComponent} from './feeds/feeds.component';
import {ProfileComponent} from './profile/profile.component';
import {BookstoreComponent} from './bookstore/bookstore.component';
import {FeaturesComponent} from './features/features.component';
import {ShareComponent} from './share/share.component';
import {HeaderComponent} from './share/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DonationComponent} from './donation/donation.component';
import {BookdonationComponent} from './bookdonation/bookdonation.component';
import {BookRollComponent} from './book-roll/book-roll.component';
import {MatStepperModule} from '@angular/material/stepper';
import {NotifierModule} from 'angular-notifier';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { ShowBookComponent } from './show-book/show-book.component';
import { OtherProfileComponent } from './other-profile/other-profile.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [UserComponent,
    FeedsComponent,
    ProfileComponent,
    BookstoreComponent,
    FeaturesComponent,
    ShareComponent,
    HeaderComponent,
    DonationComponent,
    BookdonationComponent,
    BookRollComponent,
    ShowBookComponent,
    OtherProfileComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        NgbButtonsModule,
        ReactiveFormsModule,
        MatStepperModule,
        NotifierModule,
        MatMenuModule,
        MatIconModule,
        MatSlideToggleModule,
        FormsModule,
        MatSidenavModule
    ]
})
export class UserModule {
}
