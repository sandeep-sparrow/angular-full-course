import { Directive, ElementRef, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})
export class DropdownDirective implements OnInit{

    constructor(private elementRef: ElementRef) {
    }

    @HostBinding('class.open')isOpen = false;

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }

    ngOnInit(): void {

    }

}
