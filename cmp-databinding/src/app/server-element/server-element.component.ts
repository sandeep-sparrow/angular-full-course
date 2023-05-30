import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() element: {type: String, name: String, content: String}
  @Input() name : String;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log("ngOnChange called");
    // console.log(changes);
  }

  ngOnInit(): void {
    // console.log("ngOnInit called");
    // console.log("Header Text: " + this.header.nativeElement.textContent);
    // console.log("Paragraph Text: " + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    // console.log("ngDoCheck called");
  }

  ngAfterContentInit() {
    // console.log("ngAfterContentInit called");
    // console.log("Paragraph Text: " + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    // console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit() {
    // console.log("ngAfterViewInit called");
    // console.log("Header Text: " + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    // console.log("ngAfterViewChecked called");
  }

  ngOnDestroy() {
    // console.log("ngOnDestroy called");
  }

}
