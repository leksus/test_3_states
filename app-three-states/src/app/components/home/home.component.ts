import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TreeNode} from "primeng/primeng";
import {treeStructure1} from "../../data/test-struct1";
import {treeStructure2} from "../../data/test-struct2";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styles: [`
        .changed {
            color: red;
        }
    `]
})
export class HomeComponent implements OnInit {

    tree1: TreeNode[];
    tree2: TreeNode[];
    constructor(private router: Router) {

    }

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.tree1 = treeStructure1;
        this.tree2 = treeStructure2;
    }

    checkNode() {

    }

    findChanges() {

    }
}
