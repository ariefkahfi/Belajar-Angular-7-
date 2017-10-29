import {Directive , TemplateRef , ViewContainerRef, Input} from "@angular/core";


@Directive({
    selector : '[myUnless]'
})
export class UnlessDirective{
    
    constructor(
        private templateRef : TemplateRef<any> , 
        private viewRef : ViewContainerRef)
        {}


    @Input()
    set myUnless(condition : boolean){
        if(!condition){
            this.viewRef.createEmbeddedView(this.templateRef);
        }else{
            this.viewRef.clear();
        }
    }
}