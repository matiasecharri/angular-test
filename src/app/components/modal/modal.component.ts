import { Component, Input, ViewChild } from '@angular/core';
import { ModalPosition, ModalState, PortalService } from '../../services/portal-service.service';
import { Subscription } from 'rxjs';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  imports: [ MatDialogModule ],
  templateUrl: './modal.component.html',
  standalone: true,
  styleUrl: './modal.component.scss',
})
export class ModalComponent {

  @Input() title: string = '';

  constructor(private dialog: MatDialog) {}

}