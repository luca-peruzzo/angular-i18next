import { PipeTransform } from '@angular/core';
import { I18NextPipe } from './I18NextPipe';
import { ITranslationService } from './ITranslationService';
import { PipeOptions } from './models';
import * as i0 from "@angular/core";
export declare class I18NextCapPipe extends I18NextPipe implements PipeTransform {
    constructor(translateI18Next: ITranslationService, ns: string | string[], scope: string | string[]);
    transform(key: string | string[], options?: PipeOptions): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18NextCapPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<I18NextCapPipe, "i18nextCap", false>;
    static ɵprov: i0.ɵɵInjectableDeclaration<I18NextCapPipe>;
}
