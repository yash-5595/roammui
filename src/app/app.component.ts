import { Component } from '@angular/core';
import { AceEditorModule } from 'ng2-ace-editor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlineEditor';
  text:string = "";
    options:any = {maxLines: 10000, printMargin: false};
    onChange(code) {
      console.log("new code", code);
      // this.text=this.text+"hhh"
  }
}
