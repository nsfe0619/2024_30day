import { Injectable } from '@angular/core';
import
{
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class MockInterceptor implements HttpInterceptor
{


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        // 判斷是否啟用 mock
        if (environment.isMock)
        {
            // 如果是 mock，將請求重定向到本地 JSON 文件
            const mockReq = req.clone({
                url: `assets/mock/${req.url}-data.json`  // 假設所有本地 JSON 文件存放在 assets/mocks 中
            });
            return next.handle(mockReq);
        } else
        {
            // 否則繼續使用原本的 URL
            return next.handle(req);
        }
    }
}
