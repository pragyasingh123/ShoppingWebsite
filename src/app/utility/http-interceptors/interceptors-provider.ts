import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeaderInterceptor } from './httpheader-interceptor';
import { EnsureHttpsInterceptor } from './ensure-https-interceptor';

export const httpInterceptorProviders = [
 
    { provide: HTTP_INTERCEPTORS, useClass: EnsureHttpsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true }
];
