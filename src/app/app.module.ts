import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatGridListModule, MatExpansionModule, MatSortModule, MatTableModule, MatToolbarModule, MatSelectModule, MatOptionModule, MatSnackBarModule, MatDialogModule, MatInputModule, MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidateService } from './services/candidate.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CandidateDialogComponent } from './components/dialogs/candidate-dialog/candidate-dialog.component';
import { SkillComponent } from './components/skill/skill.component';
import { SkillService } from './services/skill.service';
import { SkillDialogComponent } from './components/dialogs/skill-dialog/skill-dialog.component';
import { CandidateSkillComponent } from './components/candidate-skill/candidate-skill.component';
import { CandidateSkillService } from './services/candidate-skill.service';
import { CandidateSkillDialogComponent } from './components/dialogs/candidate-skill-dialog/candidate-skill-dialog.component';
import { CandidateSearchComponent } from './components/candidate-search/candidate-search.component';
import { CandidateSearchService } from './services/candidate-search.service';
import { CandidateSearchMasterComponent } from './components/candidate-search-master/candidate-search-master.component';
import { CandidateSearchMasterService } from './services/candidate-search-master.service';


const Routes = [
  { path: 'candidate-search-master', component: CandidateSearchMasterComponent},
  { path: 'skill', component: SkillComponent},
  { path: 'candidate', component: CandidateComponent},
  { path: '', redirectTo: 'candidate', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    CandidateDialogComponent,
    SkillComponent,
    SkillDialogComponent,
    CandidateSkillComponent,
    CandidateSkillDialogComponent,
    CandidateSearchComponent,
    CandidateSearchMasterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, MatIconModule, MatSidenavModule, MatListModule,
    MatGridListModule, MatExpansionModule, MatSortModule, MatTableModule,
    MatToolbarModule, MatSelectModule, MatOptionModule,
    MatSnackBarModule, MatDialogModule, MatInputModule,
    MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, MatPaginatorModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    HttpClientModule
  ],
  entryComponents : [CandidateSkillDialogComponent, SkillDialogComponent, CandidateDialogComponent],
  providers: [CandidateSearchMasterService, CandidateSearchService, CandidateSkillService, SkillService, CandidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
