import {Component, OnInit} from '@angular/core';
import {MessageService} from "../../service/dialog-message.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    dialogText: string;
    isShowDialog: boolean;

    constructor(private messageService: MessageService) {
        this.isShowDialog = false;
        this.dialogText = '';
    }

    ngOnInit() {
        this.messageService.messages.subscribe(text => {
            this.dialogText = text;
            this.isShowDialog = true;
        });
    }
}
