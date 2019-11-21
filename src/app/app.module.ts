import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AceEditorModule } from 'ng2-ace-editor';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { HeaderComponent } from './header/header.component';
import { UserformComponent } from './userform/userform.component';
import {AccordionModule} from 'primeng/accordion';   
import {ButtonModule} from 'primeng/button';   
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    HeaderComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    AceEditorModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
