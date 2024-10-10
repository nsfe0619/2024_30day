import { Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DialogService
{
    private dialogVisibility = new Subject<boolean>(); // 管理彈窗可見性的Subject
    private templateSubject = new Subject<TemplateRef<any>>();
    dialogVisibility$ = this.dialogVisibility.asObservable(); // 讓其他組件訂閱可見性狀態
    template$ = this.templateSubject.asObservable();

    openDialog(template: TemplateRef<any>)
    {
        this.templateSubject.next(template);   // 傳遞模板
        this.dialogVisibility.next(true);      // 顯示彈窗
    }

    closeDialog()
    {
        this.dialogVisibility.next(false); // 關閉彈窗
    }
}