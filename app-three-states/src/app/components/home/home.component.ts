import {Component, EventEmitter, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TreeNode} from "primeng/primeng";
import {treeStructure1} from "../../data/test-struct1";
import {treeStructure2} from "../../data/test-struct2";
import {MessageService} from "../../service/dialog-message.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    tree1: TreeNode[];
    tree2: TreeNode[];
    changedNodes: number;

    constructor(private router: Router, private messages: MessageService) {
        this.changedNodes = 0;
    }

    ngOnInit() {
        this.getData();
        this.findChanges(this.tree1[0], this.tree2[0]);
    }

    getData() {
        this.tree1 = treeStructure1;
        this.tree2 = treeStructure2;
    }

    /**
     * Поиск отличающихся label у двух деревьев
     * Функция предназначена только для деревьев с идентичной структурой
     * @param {TreeNode} data
     * @param {TreeNode} comparing
     */
    findChanges(data: TreeNode, comparing: TreeNode) {
        if (data.label != comparing.label) {
            data.styleClass = 'changed';
            this.changedNodes++;
        }
        if (data.children) {
            for (let i in data.children) {
                this.findChanges(data.children[i], comparing.children[i]);
            }
        }
    }

    notify() {
        this.messages.set(`Количество разных узлов: ${this.changedNodes}`);
    }
}
