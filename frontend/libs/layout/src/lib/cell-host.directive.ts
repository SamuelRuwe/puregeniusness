import {
  ComponentFactory,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { Cell } from './dynamic-table/cell';

@Directive({
  selector: '[cell]'
})
export class CellHostDirective implements OnInit {

  private factory!: ComponentFactory<any>;
  @Input() cell!: Cell;

  constructor(public viewContainerRef: ViewContainerRef, public el: ElementRef, private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.factory = this.resolver.resolveComponentFactory(this.cell.component);
    const componentRef = this.viewContainerRef.createComponent(this.factory);
    componentRef.instance.data = this.cell.data;
  }

}
