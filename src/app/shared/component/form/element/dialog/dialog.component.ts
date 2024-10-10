import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/service/dialog.service';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit
{

    isVisible: boolean = false; // 本地的彈窗狀態

    constructor(private dialogService: DialogService) { }

    ngOnInit(): void
    {
        // 訂閱服務的可見性狀態變更
        this.dialogService.dialogVisibility$.subscribe(isVisible =>
        {
            this.isVisible = isVisible;
        });
    }

    close()
    {
        this.dialogService.closeDialog(); // 調用服務關閉彈窗
    }
}