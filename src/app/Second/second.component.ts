import { Component } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { templateJitUrl } from '@angular/compiler';

@Component({
    selector :'app-second',
    templateUrl:'./second.Component.html'
})
export class SecondComponent
{
    Header = 'This is a Third Component'
}