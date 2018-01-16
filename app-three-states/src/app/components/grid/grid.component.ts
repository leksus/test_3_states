import {Component} from '@angular/core';

@Component({
    selector: 'grid',
    templateUrl: './grid.component.html'
})
export class GridComponent {

    elements: string[];
    constructor() {
        this.elements = [
            'data1',
            'data2',
            'data3',
            'data4',
            'data5',
            'data6',
            'data7',
            'data8',
            'data9',
            'data10',
            'data11',
            'data12',
            'data13',
            'data14',
            'data15'
        ];
    }

    drop($event: DragEvent) {
        const data = $event.dataTransfer.getData('text');
        this.elements.push(data);
    }

    dragstart($event: DragEvent, data) {
        $event.dataTransfer.effectAllowed = 'move';
        $event.dataTransfer.setData('text', data);
    }

    dragover($event: DragEvent) {
        if ($event.preventDefault) {
            $event.preventDefault();
        }
        $event.dataTransfer.dropEffect = 'move';

        return false;
    }
}
