import { InjectionToken } from '@angular/core';

export let TOASTER_TOKEN = new InjectionToken<Toaster>('toastr');


export interface Toaster {
    success(message: string, title?: string): void;
    info(message: string, title?: string): void;
    warning(message: string, title?: string): void;
    error(message: string, title?: string): void;
}