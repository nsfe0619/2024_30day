import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DialogService
{
    private dialogVisibility = new Subject<boolean>(); // 管理彈窗可見性的Subject
    dialogVisibility$ = this.dialogVisibility.asObservable(); // 讓其他組件訂閱可見性狀態

    openDialog()
    {
        this.dialogVisibility.next(true); // 打開彈窗
    }

    closeDialog()
    {
        this.dialogVisibility.next(false); // 關閉彈窗
    }
}